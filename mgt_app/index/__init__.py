# coding:utf-8
from flask import Blueprint

index_blueprint = Blueprint("index_blueprint", __name__)

from mgt_app.index import views
