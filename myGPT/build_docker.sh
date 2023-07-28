#!/usr/bin/env bash

set -ex

# docker compose up -d
# docker compose exec -it main bash

# sudo dnf install gcc

# pip3 install -r requirements.txt

# cp example.env .env

# sudo dnf install poetry
# poetry install
# poetry shell


# cd models
# wget https://gpt4all.io/models/ggml-gpt4all-j-v1.3-groovy.bin
# wget http://192.168.10.61:8181/ggml-gpt4all-j-v1.3-groovy.bin

# python ingest.py

# ./fetch_docker.sh

# mkdir -p models
# cd models
#   if [[ -f "ggml-gpt4all-j-v1.3-groovy.bin" ]]; then
#     echo 'model exist, skipping download'
#   else
#     wget http://192.168.10.61:8181/ggml-gpt4all-j-v1.3-groovy.bin
#   fi
# cd -

docker build . -t logickee/test-private-gpt
# docker push logickee/test-private-gpt
# docker pull logickee/test-private-gpt

docker compose kill
docker compose down

docker compose up -d 
docker compose exec -it main bash

# docker image tag 192.168.10.61:5000/test-private-gpt logickee/test-private-gpt
# docker push logickee/test-private-gpt
