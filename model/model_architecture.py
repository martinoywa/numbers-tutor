import torch
import torch.nn as nn
import torch.nn.functional as F
from pathlib import Path


class Net(nn.Module):
    """
    Architecture of the model
    """
    pass

def get_model():
    """
    Load model checkpoint
    :return: model
    """

    checkpoint = Path('model/checkpoints/weights.pt')
    model = Net()
    model.load_state_dict(torch.load(checkpoint, map_location='cpu'), strict=False)
    model.eval()

    return model
