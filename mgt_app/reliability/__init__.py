# coding:utf-8
from flask import Blueprint

reliability_blueprint = Blueprint("reliability_blueprint", __name__, template_folder='templates')

from mgt_app.reliability import views
