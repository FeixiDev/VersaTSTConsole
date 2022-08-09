# coding:utf-8
from mgt_app.index import index_blueprint
from mgt_app.index import model

index_blueprint.add_url_rule('/', view_func=model.Index.as_view('index'))
index_blueprint.add_url_rule(
    '/index/preview', view_func=model.IndexPreview.as_view('index_preview'))
index_blueprint.add_url_rule(
    '/vplxip', view_func=model.VplxIp.as_view('VplxIp'))
index_blueprint.add_url_rule('/mgtip', view_func=model.MgtIp.as_view('MgtIp'))
