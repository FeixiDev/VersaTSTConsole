# coding:utf-8
from flask import jsonify, render_template, make_response, views
from mgt_app.utils import read_config
import socket


def cors_data(data_dict):
    response = make_response(jsonify(data_dict))
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'OPTIONS,HEAD,GET,POST'
    response.headers['Access-Control-Allow-Headers'] = 'x-requested-with'
    return response


class Index(views.MethodView):
    def get(self):
        return render_template("index.html")


class IndexPreview(views.MethodView):
    def get(self):
        return render_template("index-preview.html")


class VplxIp(views.MethodView):
    def get(self):
        config_obj = read_config.Config()
        ip = {
            'ip': config_obj.get_ip() + ":" + config_obj.get_port()
        }
        return cors_data(ip)


class MgtIp(views.MethodView):
    def get(self):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            s.connect(('8.8.8.8', 80))
            ip = s.getsockname()[0]
        finally:
            s.close()
        mgt_ip = {'ip': ip}
        return cors_data(mgt_ip)
