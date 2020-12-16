from flask import Blueprint, render_template


home = Blueprint("home", __name__, template_folder='templates')


@home.route("/")
def index():
    return render_template('index.html')


write = Blueprint("write", __name__, template_folder='templates')


@write.route("/")
def index():
    return render_template('write.html')


speak = Blueprint("speak", __name__, template_folder='templates')


@speak.route("/")
def index():
    return render_template('voice.html')
