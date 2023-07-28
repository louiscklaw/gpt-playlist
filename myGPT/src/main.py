#!/usr/bin/env python

import os,sys
from pprint import pprint

print('start')

import GPUtil
pprint(GPUtil.getAvailable())

import torch
use_cuda = torch.cuda.is_available()
pprint(use_cuda)