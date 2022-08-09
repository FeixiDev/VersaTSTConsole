# coding:utf-8
from mgt_app.reliability import reliability_blueprint
from mgt_app.reliability import model

reliability_blueprint.add_url_rule('/reliability/spof', view_func=model.Spof.as_view('Spof'))
reliability_blueprint.add_url_rule('/reliability/spof-pvc', view_func=model.SpofPVC.as_view('SpofPVC'))
