from flask import Blueprint,render_template


home = Blueprint("home", __name__,template_folder='templates')
@home.route("/index")
def index():
    return render_template('index.html')

write = Blueprint("write", __name__)
@write.route("/")
def index():
    return "Write Page"

speak = Blueprint("speak", __name__)
@speak.route("/")
def index():
    return "Speak Page"
