<p align="center">
  <a href="https://www.saaspegasus.com/static/images/web/modern-javascript/django-react-header.png"><img src="https://www.saaspegasus.com/static/images/web/modern-javascript/django-react-header.png" alt="Spring Boot" height="200"></a>
</p>

<p align="center">
    <em>Personal Fullstack Portfolio Using React, Tailwind, Django Rest Framework, Docker & Kubernetes </em>
</p>

---

**Source Code**:

https://github.com/reactjs/reactjs.org.git

---

React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.

Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.

Django REST framework (DRF) is a powerful and flexible toolkit for building Web APIs. Its main benefit is that it makes serialization much easier. Django REST framework is based on Django's class-based views, so it's an excellent option if you're familiar with Django.




<p align="center">
  <a href="https://miro.medium.com/max/1200/1*lAMsvtB6afHwTQYCNM1xvw.png" alt="React & Django" height="200"></a>
</p>


## Project Description

_FullStack Porfolio Web Application Using React as Frontend, DRF as backend on express server, PostgreSQL as database_
__Fully Dockerized and Configured Kuberentes_

## Requirements

React 17+

npx/npm/node

postgresql 9.0+

django 4.0+

## Installation

<div class="termy">

***CLIENT SETUP***

Setup an .env.development file in frontend/ with following sample
```console

REACT_APP_BASE_URL=
REACT_APP_EMAIL_JS_SERVICE=
REACT_APP_EMAIL_JS_TEMPLATE=
REACT_APP_EMAIL_JS_KEY=

```
</div>

<div class="termy">

Install Using yarn package

```console
$ yarn
```
</div>

<div class="termy">

Run the Project
```console
$ yarn start:development
```
</div>


<div class="termy">


***SERVER SETUP***

Setup an .env file in backend/ with following sample
```console
 // For DRF & Postgres Configurations

SECRET_KEY=
DEBUG=
ALLOWED_HOSTS=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
CORS_ALLOWED_ORIGINS=
CORS_ALLOW_ALL_ORIGINS=

```
</div>

<div class="termy">

Create a virtual environment

_python -m venv env_

Activate the virtual environment

_env/Scripts/activate_

Install Using pip package

```console
$ pip install -r requirements.txt

```
</div>

<div class="termy">

Setup Database 
```console

Open PSQL Terminal

$ create database DB_NAME

$ create role DB_USER with password DB_PASSWORD

$ allow all privileges on database DB_NAME to DB_USER

```
</div>

<div class="termy">

Perform the DB migrations in django

```console
$ py manage.py migrate

$ py manage.py runserver 8000
```
</div>


<div class="termy">

Follow the swagger Ui Documentation
```console
http://{SERVER_HOST}:{SERVER_PORT}/doc
```
</div>


</div>

# Try it out with [Docker](https://www.docker.com/)

<div class="termy">

Dockerize Personally (OPTIONAL)

```console
$ docker build -t frontend .
$ docker build -t backend ./django/

$ docker run -p 3000:80 frontend
$ docker run -p 8000:80 backend
```

</div>

<div class="termy">

Run the Project via Docker Compose Directly

```console
$ docker-compose up 
```

</div>


<div class="termy">

Setting up the project in miniube-kubernetes cluster

```console
$ minikube start
$ minikube status
$ alias k='kubectl
$ docker-compose -f k8s/minikube.yml build backend
$ k apply -f kubernetes/django/deployment.yml

_for postgres user and password_
$ echo -n "my-secret-user" | base64
bXktc2VjcmV0LXN0cmluZw==
$ echo -n "my-secret-password" | base64 -d
my-secret-string
$ k apply -f k8s/postgres/secrets.yml
$ k apply -f k8s/django/deployment.yml (if any changes for v2)
$ k apply -f k8s/django/migration.yml
$ k apply -f k8s/django/
$ docker-compose -f k8s/minikube.yml build frontend
$ k apply -f k8s/fronent/
$ minikube addons enable ingress
$ k apply -f k8s/ingress.yml


```

</div>


