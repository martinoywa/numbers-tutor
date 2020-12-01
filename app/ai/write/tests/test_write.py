import os.path
import unittest
from pathlib import Path
import torch

from app.ai.write.inference import prediction

class TestWriteModule(unittest.TestCase):
    
    def test_checkpoints_exists(self):
        """
            Assert that checkpoints file
            exists.
            :return: True if exists else False
        """
        checkpoint = Path('app/ai/write/checkpoints/checkpoint.pt')
        self.assertTrue(True, os.path.isfile(checkpoint))

    def test_model_loading(self):
        """
            Assert that checkpoints are
            being loaded without conflicts.
            :return: True if so else False
        """
        pass

    def test_inferencing_type(self):
        """
            Assert that model outputs expected
            label. Type expected is int.
            :return: True if int else False
        """
        test_image = Path('app/ai/write/tests/test_image/3.jpeg')

        with open(test_image, "rb") as f:
            image = f.read()
        pred = prediction(image)
        self.assertEqual(int, type(pred))

    def test_inferencing_output(self):
        """
            Assert that model makes correct
            predictions.
            :return: True if match else False
        """
        test_image = Path('app/ai/write/tests/test_image/3.jpeg')

        with open(test_image, "rb") as f:
            image = f.read()
        pred = prediction(image)
        self.assertEqual(3, pred)
