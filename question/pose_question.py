from question.convert_number_to_words import convert_number_to_words


def pose_question(num, action):
    """
     Takes number and converts to words and poses a question
     asking for user to write the question.
     Returns a question.
    """

    number_in_words = convert_number_to_words(num)
    if action == "Write":
        question = "Write number " + number_in_words
    elif action == "Say":
        question = "Say number " + number_in_words

    return question
