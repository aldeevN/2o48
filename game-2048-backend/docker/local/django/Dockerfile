# pull official base image
FROM python:3.10.0
# set work directory
RUN apt-get update && apt-get upgrade -y
RUN apt-get install libgdal-dev g++ gettext -y
WORKDIR /usr/src/app
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt



COPY . .

RUN chmod +x /usr/src/app/docker/local/django/entrypoint.sh

CMD ["/usr/src/app/docker/local/django/entrypoint.sh"]