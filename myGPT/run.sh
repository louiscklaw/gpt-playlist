#!/usr/bin/env bash

set -ex

python3 ingest.py

python3 myGPT.py
