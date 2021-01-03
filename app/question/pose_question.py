from app.question.convert_number_to_words import convert_number_to_words


def pose_question(number, action):
    """
    Poses a question depending on which page the user is in.
    :param number: number from pick_number.
    :param action: Write or Speak. Determines the question format.
    :return: A question and expected answer.
    """
    if action == "Write":
        number_words = convert_number_to_words(number)
        question = action + " number " + number_words
        answer = number
        return question, answer
    elif action == "Say":
        number_string = str(number)
        question = action + " number " + number_string
        answer = number_string
        return question, answer
