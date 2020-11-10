(function (exports, require, module, __filename, __dirname, process, global, Buffer) { return function (exports, require, module, __filename, __dirname) { var path = require("path");

var isWin = process.platform == "win32";

var userDict = {};

var onUserDictUpdated = function(newDict){
  userDict = newDict;
}

var SpellcheckerFactory = function() {
  this.cache = new Map();
  this.dictPath = this.getDictionaryPath();
  this.userDictPath = null;
  this.userListProvider = null;
};

SpellcheckerFactory.prototype.clearCache = function(){
  var emptyKeys = [];
  this.cache.forEach(function(v, k){
    if(!v) emptyKeys.push(k);
  });
  emptyKeys.forEach(function(k){
    this.cache.delete(k);
  }, this)
}

SpellcheckerFactory.prototype.setUserDictProvider = function(provider){
  if(this.userListProvider) this.userListProvider.off("update", onUserDictUpdated)
  this.userListProvider = provider;
  if(provider == null) return;
  provider.on("update", onUserDictUpdated);
  userDict = provider.loadUserDict();
}

SpellcheckerFactory.prototype.wrapSpellChecker = function(spellchecker, lang) {
  spellchecker.lang = lang;

  var self = this;
  userDict[lang] = userDict[lang] || [];

  var isHunspell = spellchecker.isHunspell();
  var isWin10 = !isHunspell && isWin;

  if(isHunspell) {
    (userDict[lang] || []).forEach(function(newWord){
      spellchecker.__proto__.add.call(spellchecker, newWord);
    });
  } else {
    spellchecker.__proto__.add.call(spellchecker, "Typora");
  }

  spellchecker.add = function(word) {
    !isWin10 && spellchecker.__proto__.add.call(spellchecker, word);
    self.userListProvider && self.userListProvider.add(lang, word);
  }

  spellchecker.remove = function(word) {
    !isWin10 && spellchecker.__proto__.remove.call(spellchecker, word);
    self.userListProvider && self.userListProvider.remove(lang, word);
  }

  spellchecker.isLearned = function(word){
    return (userDict[lang] || []).indexOf(word) > -1;
  }

  if(isWin10) {
    spellchecker.isMisspelled = function(word){
      return spellchecker.__proto__.isMisspelled.call(spellchecker, word) && 
      !spellchecker.isLearned(word);
    }
  }
  
}

SpellcheckerFactory.prototype.getSpellChecker = function(lang){
  var spellchecker = this.cache.get(lang);
  if(this.cache.has(lang)) {
    return spellchecker;
  }

  var bindings = require("../build/Release/spellchecker.node");
  var Spellchecker = bindings.Spellchecker;

  spellchecker = new Spellchecker();
  var success = spellchecker.setDictionary(lang, this.userDictPath || this.dictPath);
  if(!success && !spellchecker.isHunspell()) {
    spellchecker = new Spellchecker(true);
    success = spellchecker.setDictionary(lang, this.userDictPath || this.dictPath);
  }
  spellchecker = success ? spellchecker : null;
  this.cache.set(lang, spellchecker);
  if(spellchecker) {
    this.wrapSpellChecker(spellchecker, lang);
  }
  return spellchecker;
}

SpellcheckerFactory.prototype.getUserDictionaryPath = function(){
  return this.userDictPath;
}

SpellcheckerFactory.prototype.setUserDictionaryPath = function(userDictPath){
  return this.userDictPath = userDictPath;
}

SpellcheckerFactory.prototype.getDictionaryPath = function() {
  var dict = path.join(__dirname, "..", "vendor", "hunspell_dictionaries");
  try {
    // HACK: Special case being in an asar archive
    var unpacked = dict.replace(
      ".asar" + path.sep,
      ".asar.unpacked" + path.sep
    );
    if (require("fs").statSync(unpacked)) {
      dict = unpacked;
    }
  } catch (error) {}
  return dict;
};

SpellcheckerFactory.prototype.detectLanguageForText = function(text, options){
  return new Promise(function(resolve){
    try {
      require('cld').detect(text, options, function(err, result) {
        if(!result) return resolve(null, err);
  
        if (!result.reliable || result.languages[0].percent < 85) {
          return resolve(null, "No reliable result for lang check");
        }
  
        resolve(result.languages[0].code, null);
      });
    } catch(e) {
      resolve(null, e);
    }
  });
};

module.exports = new SpellcheckerFactory();

}.call(this, exports, require, module, __filename, __dirname); });