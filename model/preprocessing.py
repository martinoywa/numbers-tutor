import io
from PIL import Image
from torchvision import transforms


def preprocessing(bytes):
    """
    Transforms an image to a form that can be used by the
    model.
    :param bytes: Image bytes
    :return: Transformed image (tensor)
    """

    transform = transforms.Compose([
        transforms.Resize(28, 28),
        transforms.ToTensor()
    ])

    # grays image bytes from the UI canvas
    image = Image.open(io.BytesIO(bytes)).convert('L')

    # return a single batch for the model
    return transform(image).unsqueeze(0)
