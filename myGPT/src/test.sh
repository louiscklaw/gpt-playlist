#!/usr/bin/env bash

set -ex


# docker pull su77ungr/casalioy:stable

# docker run -it --rm \
#   -p 8501:8501 --shm-size=16gb \
#   -v ./models:/src/CASALIOY/models \
#   -v ./src:/app \
#   su77ungr/casalioy:stable /bin/bash

# inside docker
# python casalioy/ingest.py
# python casalioy/ingest.py ./source_documents y


docker compose up -d --build

docker compose exec -it casaloy-gpu bash
