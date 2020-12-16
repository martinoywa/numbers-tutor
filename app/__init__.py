from flask import Flask
from .views import home, write, speak


# Initialize application.
app = Flask(__name__)
app.register_blueprint(home)
app.register_blueprint(write, url_prefix="/write")
app.register_blueprint(speak, url_prefix="/speak")
