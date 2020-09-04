import os
import unittest
import torch
from model.preprocessing import preprocessing
from pathlib import Path
from model.inference import inference


with open("test_images/test_number.png", "rb") as f:
    number_bytes = f.read()

class TestModel(unittest.TestCase):
    def test_preprocessing(self):
        """
        Test preprocessing function
        :return: assertions
        """
        # assert that tensors are being created
        bytes = number_bytes
        preprocessed = preprocessing(bytes)
        self.assertEqual(torch.Tensor, type(preprocessed))

        # assert output is of correct shape
        bytes = number_bytes
        preprocessed = preprocessing(bytes)
        self.assertEqual([1, 1, 28, 28], list(preprocessed.shape))

    def test_model_architecture(self):
        """
        Test model architecture function
        :return: assertions
        """
        # assert that checkpoints file is available
        os.chdir("../")
        path = Path("checkpoints/weights.pt")
        self.assertTrue(os.path.isfile(path))

    def test_inference(self):
        """
        Test inference
        :return: assertions
        """
        # assert prediction is of type int
        bytes = number_bytes
        prediction = inference(bytes)
        self.assertTrue(isinstance(prediction, int))

        # assert for prediction correctness
        bytes = number_bytes
        prediction = inference(bytes)
        self.assertEqual(1, prediction)


if __name__ == '__main__':
    unittest.main()
