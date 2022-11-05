FROM python:3.8-alpine
EXPOSE 8000

# set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app/django
COPY requirements.txt /app/django/

RUN python -m pip install --upgrade pip
RUN pip3 install --upgrade setuptools 
RUN apk add --no-cache gcc musl-dev python3-dev
RUN pip3 install -r requirements.txt --no-cache-dir
COPY . /app/django/

COPY ./docker-entrypoint.sh /app/django/

ENTRYPOINT ["./docker-entrypoint.sh"]   