# mongo-dump
[![release Actions Status](https://github.com/exesse/mongo-dump/workflows/release/badge.svg)](https://github.com/exesse/mongo-dump/actions)
[![build Actions Status](https://github.com/exesse/mongo-dump/workflows/build/badge.svg)](https://github.com/exesse/mongo-dump/actions)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0484d1d38b5d41318f0980126a1c45a9)](https://www.codacy.com/gh/exesse/mongo-dump/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=exesse/mongo-dump&amp;utm_campaign=Badge_Grade)
[![DeepSource](https://deepsource.io/gh/exesse/mongo-dump.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/exesse/mongo-dump/?ref=repository-badge)
[![DeepSource](https://deepsource.io/gh/exesse/mongo-dump.svg/?label=resolved+issues&show_trend=true)](https://deepsource.io/gh/exesse/mongo-dump/?ref=repository-badge)
 
mongo-dump is a backup utility for MongoDB compatible with Azure, AWS and GCP.

## Docker

````bash
sudo docker run --name mongo-dump --env-file dev.env -d -v /tmp/mongo-dump:/tmp/mongo-dump mongo-dump:0.0.1-dev
````

!Temporary 
```bash
sudo docker build -t mongo-dump:0.0.1-dev .

sudo docker stop mongo-dump && sudo docker rm mongo-dump && sudo docker rmi mongo-dump:0.0.1-dev
```