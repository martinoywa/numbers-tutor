import unittest
from app.question.convert_number_to_words import convert_number_to_words

from app.ai.speak.audio_to_text import audio_to_text


class TestSpeakModule(unittest.TestCase):

    def test_audio_to_text(self):
        """
            Asserts audio is correctly
            converted to text
        Returns: Trues if correct else False
        """
        audio = 'app/ai/speak/tests/test_audio/150.wav'
        text = audio_to_text(audio)
        self.assertEqual("one hundred and fifty", convert_number_to_words(int(text)))
