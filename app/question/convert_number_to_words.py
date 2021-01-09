from num2words import num2words


def convert_number_to_words(number):
    """
    Converts numbers to words.
    :param number: Number from pick_numbers.
    :return: Text equivalent of the number.
    """
    words = num2words(number)
    return " ".join(words.split("-")).replace(",", "")
