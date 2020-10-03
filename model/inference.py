import torch
from model.preprocessing import preprocessing
from model.model_architecture import get_model


model = get_model()

def inference(bytes):
    """
    Perform prediction
    :param bytes: Image bytes from canvas
    :return: Prediction
    """
    preprocessed_image = preprocessing(bytes)
    output = model.forward(preprocessed_image)
    _, prediction = torch.max(output, 1)

    return prediction.item()