import unittest

from app.question.pick_number import pick_number
from app.question.convert_number_to_words import convert_number_to_words
from app.question.pose_question import pose_question


class TestQuestionModule(unittest.TestCase):

    def test_pick_number(self):
        """
        Assert that pick number returns
        an integer
        Returns:
            True if int, else False
        """
        number = pick_number()
        self.assertTrue(isinstance(number, int))

    def test_convert_number_to_words(self):
        """
        Assert that number to words conversion
        works correctly.
        Returns:
            True if so, False otherwise
        """
        number = 0
        word = convert_number_to_words(number)
        self.assertEqual(word, 'zero')

        number = 21
        word = convert_number_to_words(number)
        self.assertEqual(word, 'twenty one')

        number = 101
        word = convert_number_to_words(number)
        self.assertEqual(word, 'one hundred and one')

        number = 1999
        word = convert_number_to_words(number)
        self.assertEqual(word, 'one thousand nine hundred and ninety nine')

    def test_pose_question(self):
        """
        Asserts that returned question
        and answer are correct
        Returns:
            True if correct, else False
        """
        number = 0
        action = "Write"
        question, answer = pose_question(number, action)
        self.assertEqual(question, "Write number zero")
        self.assertEqual(answer, 0)

        number = 21
        action = "Say"
        question, answer = pose_question(number, action)
        self.assertEqual(question, "Say number 21")
        self.assertEqual(answer, "21")

        number = 101
        action = "Write"
        question, answer = pose_question(number, action)
        self.assertEqual(question, "Write number one hundred and one")
        self.assertEqual(answer, 101)

        number = 1999
        action = "Say"
        question, answer = pose_question(number, action)
        self.assertEqual(question, "Say number 1999")
        self.assertEqual(answer, "1999")
