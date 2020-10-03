from flask import Flask, render_template
from question import pick_number, pose_question

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/write")
def write():
    number = pick_number.pick_number()
    question = pose_question.pose_question(number)
    return render_template("write.html", question=question)


@app.route("/say")
def say():
    return render_template("say.html")


if __name__ == "__main__":
    app.run()
