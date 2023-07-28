#!/usr/bin/env python

# https://stackoverflow.com/questions/48152674/how-do-i-check-if-pytorch-is-using-the-gpu

import torch

from pprint import pprint

use_cuda = torch.cuda.is_available()
cuda_count = torch.cuda.device_count()
current_dev = torch.cuda.current_device()

pprint(use_cuda)
pprint(cuda_count)
pprint(current_dev)
