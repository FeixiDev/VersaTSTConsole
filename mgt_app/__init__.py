# coding:utf-8

from flask import Flask
from datetime import timedelta
from mgt_app.index import index_blueprint
from mgt_app.performance import performance_blueprint
from mgt_app.reliability import reliability_blueprint


def create_app():
    app = Flask(__name__)

    app.config['SEND_FILE_MAX_DEFAULT'] = timedelta(seconds=1)

    # 将蓝图注册到app
    app.register_blueprint(index_blueprint)
    app.register_blueprint(performance_blueprint)
    app.register_blueprint(reliability_blueprint)
    return app
