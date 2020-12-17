import speech_recognition as sr

from app.question.convert_number_to_words import convert_number_to_words


def audio_to_text(path):
    # initialize the recognizer
    r = sr.Recognizer()
    # open the file
    with sr.AudioFile(path) as source:
        audio_data = r.record(source)
        text = r.recognize_google(audio_data)

    return convert_number_to_words(int(text))
