#!/usr/bin/env bash

set -ex

# pip install langchain==0.0.177
# pip install gpt4all==0.2.3
# pip install chromadb==0.3.23
# pip install urllib3==2.0.2
# pip install pdfminer.six==20221105
# pip install python-dotenv==1.0.0
# pip install unstructured==0.6.6
# pip install extract-msg==0.41.1
# pip install tabulate==0.9.0
# pip install pandoc==2.3
# pip install pypandoc==1.11
# pip install tqdm==4.65.0

# apt update
# apt install -qy nvidia-cuda-toolkit

nvcc --version

pip uninstall -y llama-cpp-python
CMAKE_ARGS="-DLLAMA_CUBLAS=on" FORCE_CMAKE=1 pip install llama-cpp-python --no-cache-dir --verbose
