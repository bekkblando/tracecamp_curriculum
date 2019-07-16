FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /kickstarter
WORKDIR /kickstarter
COPY requirements.txt /kickstarter/
RUN pip install -r requirements.txt
COPY . /kickstarter/