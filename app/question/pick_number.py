from random import randint


def pick_number():
    """
    Incrementally pick a number from 0 to 10. For now, we'll start with random numbers.
    :return: A digit.
    """
    return randint(0, 10)
