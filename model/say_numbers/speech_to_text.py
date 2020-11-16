import torch
from glob import glob
from model import (init_jit_model,
                   split_into_batches,
                   read_batch,
                   prepare_model_input)
from pathlib import Path


def speech_to_text(file_path):
    device = torch.device('cpu')  # gpu also works, but our models are fast enough for CPU
    checkpoint = Path("model/say_numbers/checkpoints/en_v1_jit.model")
    model, decoder = init_jit_model(checkpoint, device=device)

    audio_files = glob(file_path)
    batches = split_into_batches(audio_files, batch_size=10)
    input = prepare_model_input(read_batch(batches[0]),
                                device=device)

    output = model(input)
    answer = []
    for example in output:
        answer.append(decoder(example.cpu()))

    return " ".join(answer)
