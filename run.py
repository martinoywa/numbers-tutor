from flask import Flask, render_template, request
from question import pick_number, pose_question
from model import speech_to_text

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/write")
def write():
    number = pick_number.pick_number()
    question = pose_question.pose_question(number, "Write")
    return render_template("write.html", question=question)


@app.route("/say", methods=["GET", "POST"])
def say():
    number = pick_number.pick_number()
    question = pose_question.pose_question(number, "Say")
    if request.method == "GET":
        return render_template("say.html", question=question)
    file = request.files["recording"]
    with open("recording.wav", "wb") as audio:
        audio_stream = file.read()
        audio.write(audio_stream)
    return render_template("say.html", question=question, answer=speech_to_text("recording.wav"))


if __name__ == "__main__":
    app.run(debug=True)
