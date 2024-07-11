#!/bin/sh

python manage.py migrate --noinput
django-admin compilemessages --locale=ru_RU
python manage.py runserver 0.0.0.0:8000