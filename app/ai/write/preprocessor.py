import io
from torchvision import transforms
from PIL import Image


def preprocess(image_bytes):
    """
        Returns transformed image tensor.
    """
    transform = transforms.Compose([transforms.Resize((28,28)),
                                    transforms.ToTensor()])
    # image_bytes are what we get from web request then grays the image
    image = Image.open(io.BytesIO(image_bytes)).convert('L')
    # sends a single image
    return transform(image).unsqueeze(0)
