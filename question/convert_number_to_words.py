from num2words import num2words


def convert_number_to_words(num):
    """
        Takes in a number and returns it's
        associated string / word(s).
    """
    words = num2words(num)
    return " ".join(words.split("-")).replace(",", "")
