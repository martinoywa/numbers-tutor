import torch
from app.ai.write.loader import model_loader
from app.ai.write.preprocessor import preprocess
from pathlib import Path


checkpoint = Path('app/ai/write/checkpoints/checkpoint.pt')
model = model_loader(checkpoint)

def prediction(image_bytes):
    """
        Args:
            image_bytes: drawn images
        Returns: predicted label
    """
    tensor = preprocess(image_bytes)
    output = model.forward(tensor)
    _, pred = torch.max(output, 1)
    
    return pred.item()
