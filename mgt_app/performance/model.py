# coding:utf-8
from flask import render_template, views


class SelfDefined(views.MethodView):
    def get(self):
        return render_template("self-defined.html")


class SeqRW(views.MethodView):
    def get(self):
        return render_template("seq-rw.html")


class Video(views.MethodView):
    def get(self):
        return render_template("video.html")


class RandomRW(views.MethodView):
    def get(self):
        return render_template("random-rw.html")
