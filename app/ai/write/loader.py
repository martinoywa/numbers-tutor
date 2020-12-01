"""
    Contains model architecture class and loader function.
    NNet:   Defines the neural network architecture
    model_loader(): Loads the trained model
"""
import torch
import torch.nn as nn
import torch.nn.functional as F


# Architecture
class NNet(nn.Module):
    def __init__(self):
        super(NNet, self).__init__()
        #convolutional layer
        self.conv1 = nn.Conv2d(1, 32, 3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, 3, padding=1)
        # max pooling layer
        self.pool = nn.MaxPool2d(2, 2)
        # fully connected layers
        self.fc1 = nn.Linear(64 * 7 * 7, 512)
        self.fc2 = nn.Linear(512, 256)
        self.fc3 = nn.Linear(256, 64)
        self.fc4 = nn.Linear(64, 10)
        # dropout
        self.dropout = nn.Dropout(p=.5)

    def forward(self, x):
        # add sequence of convolutional and max pooling layers
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        # flatten image input
        x = x.view(-1, 64 * 7 * 7)
        # add hidden layer, with relu activation function
        x = self.dropout(F.relu(self.fc1(x)))
        x = self.dropout(F.relu(self.fc2(x)))
        x = self.dropout(F.relu(self.fc3(x)))
        x = F.log_softmax(self.fc4(x), dim=1)
        
        return x


def model_loader(path):
    """
        Returns loaded model.
    """
    model = NNet()
    model.load_state_dict(torch.load(path, map_location='cpu'), strict=False)
    model.eval()

    return model
