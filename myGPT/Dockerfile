FROM ubuntu:22.04

# LABEL repository="https://github.com/hivaze/PrivateGPTBot"
# LABEL website="https://github.com/hivaze/PrivateGPTBot"

RUN apt update 
RUN apt install -qy wget curl git
RUN apt install -qy python3 python3-pip

WORKDIR /app
# COPY requirements.txt /app/requirements.txt
# RUN pip3 install -r requirements.txt

RUN pip install langchain==0.0.177
RUN pip install gpt4all==0.2.3
RUN pip install chromadb==0.3.23
RUN pip install urllib3==2.0.2
RUN pip install pdfminer.six==20221105
RUN pip install python-dotenv==1.0.0
RUN pip install unstructured==0.6.6
RUN pip install extract-msg==0.41.1
RUN pip install tabulate==0.9.0
RUN pip install pandoc==2.3
RUN pip install pypandoc==1.11
RUN pip install tqdm==4.65.0

# NOTE: install of the llama handled later
RUN apt install -qy nvidia-cuda-toolkit
RUN nvcc --version

# RUN pip install llama-cpp-python==0.1.77
RUN pip uninstall -y llama-cpp-python
RUN CMAKE_ARGS="-DLLAMA_CUBLAS=on" FORCE_CMAKE=1 pip install llama-cpp-python --no-cache-dir --verbose

# RUN mkdir /app/models
# RUN wget https://gpt4all.io/models/ggml-gpt4all-j-v1.3-groovy.bin
# RUN wget http://192.168.10.61:8181/ggml-gpt4all-j-v1.3-groovy.bin

# COPY main.py main.py
# COPY app/ app/
# COPY resources/ resources/

# CMD ["python3", "main.py"]
