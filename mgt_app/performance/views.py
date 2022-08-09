# coding:utf-8
from mgt_app.performance import performance_blueprint
from mgt_app.performance import model

performance_blueprint.add_url_rule('/performance/self-defined', view_func=model.SelfDefined.as_view('SelfDefined'))
performance_blueprint.add_url_rule('/performance/seq-rw', view_func=model.SeqRW.as_view('SeqRW'))
performance_blueprint.add_url_rule('/performance/video', view_func=model.Video.as_view('Video'))
performance_blueprint.add_url_rule('/performance/random-rw', view_func=model.RandomRW.as_view('RandomRW'))
