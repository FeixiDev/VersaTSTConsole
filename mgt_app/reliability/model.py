# coding:utf-8
from flask import render_template, views


class Spof(views.MethodView):
    def get(self):
        return render_template("spof.html")


class SpofPVC(views.MethodView):
    def get(self):
        return render_template("spof-pvc.html")
