# coding:utf-8
from flask import Blueprint

performance_blueprint = Blueprint("performance_blueprint", __name__, template_folder='templates')

from mgt_app.performance import views
