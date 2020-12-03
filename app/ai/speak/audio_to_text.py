import speech_recognition as sr


def audio_to_text(path):
    # initialize the recognizer
    r = sr.Recognizer()
    # open the file
    with sr.AudioFile(path) as source:
        audio_data = r.record(source)
        text = r.recognize_google(audio_data)

    return text
