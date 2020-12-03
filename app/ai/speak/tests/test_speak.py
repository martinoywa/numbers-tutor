import unittest
from pathlib import Path

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
        self.assertEqual("150", text)
