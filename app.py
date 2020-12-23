from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("html/window.html")


@app.route('/locales/Base.lproj/Front.json')
def front():
    return render_template("json/Front.json")


@app.route('/locales/Base.lproj/Menu.json')
def menu():
    return render_template("json/Menu.json")


@app.route('/locales/Base.lproj/Panel.json')
def panel():
    return render_template("json/Panel.json")


@app.route('/tools')
def tools():
    return render_template("tools.html")


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='8080')
