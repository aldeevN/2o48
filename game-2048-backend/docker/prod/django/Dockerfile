FROM python:3.12 as builder

ARG PYPI_TOKEN
ARG PYPI_REPO
ARG COMMIT_SHA=""

ENV PYTHONUNBUFFERED 1
ENV DIAGNOSTIC_COMMIT_SHA=${COMMIT_SHA}

WORKDIR /app

RUN pip install --upgrade pip setuptools
RUN apt update && apt upgrade

COPY ./requirements.txt /app/requirements.txt
RUN pip wheel --no-cache-dir --wheel-dir /usr/src/app/wheels -r requirements.txt

FROM python:3.12

RUN apt update && apt upgrade

COPY --from=builder /usr/src/app/wheels /wheels
RUN rm -f /wheels/myteam_access*

RUN pip install --upgrade pip
RUN pip install --no-cache /wheels/*

COPY ./docker/ /app/docker/
COPY ./backend/ /app/backend/
COPY ./manage.py /app/manage.py
COPY ./apps/ /app/apps/

RUN chmod +x /app/docker/prod/django/entrypoint.sh


WORKDIR /app
ENV PYTHONUNBUFFERED 1
CMD ["/app/docker/prod/django/entrypoint.sh"]
