import unittest
from question.pick_number import pick_number
from question.convert_number_to_words import convert_number_to_words
from question.pose_question import pose_question


class TestQuestion(unittest.TestCase):
    """
        Tests for the question module.
    """
    def test_pick_number(self):
        """
            Tests the pick_number function.
        """
        number = pick_number()
        self.assertTrue(isinstance(number, int))

    def test_convert_number_to_words(self):
        """
            Tests the convert_number_to_words function.
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
            Tests the pose_question function.
        """
        number = 0
        word = pose_question(number)
        self.assertEqual(word, 'Write number zero')

        number = 21
        word = pose_question(number)
        self.assertEqual(word, 'Write number twenty one')

        number = 101
        word = pose_question(number)
        self.assertEqual(word, 'Write number one hundred and one')

        number = 1999
        word = pose_question(number)
        self.assertEqual(word, 'Write number one thousand nine hundred and ninety nine')


if __name__ == "__main__":
    unittest.main()
