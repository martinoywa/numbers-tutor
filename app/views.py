from flask import Blueprint


home = Blueprint("home", __name__)
@home.route("/")
def index():
    return "Home Page"

write = Blueprint("write", __name__)
@write.route("/")
def index():
    return "Write Page"

speak = Blueprint("speak", __name__)
@speak.route("/")
def index():
    return "Speak Page"
