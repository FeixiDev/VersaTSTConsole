# coding:utf-8
"""
Global constants for VersaTST
"""
VERSION = " "


class ExitCode(object):
    OK = 0
    UNKNOWN_ERROR = 1
    ARGPARSE_ERROR = 2
    OBJECT_NOT_FOUND = 3
    OPTION_NOT_SUPPORTED = 4
    ILLEGAL_STATE = 5
    CONNECTION_ERROR = 20
    CONNECTION_TIMEOUT = 21
    UNEXPECTED_REPLY = 22
    API_ERROR = 10
    NO_SATELLITE_CONNECTION = 11


class CmdError(Exception):
    "执行命令出错"
    pass


def init():
    global _GLOBAL_DICT
    _GLOBAL_DICT = {}
    _GLOBAL_DICT['LOG_ID'] = 0
    _GLOBAL_DICT['RPL'] = 'no'
    _GLOBAL_DICT['LOG_SWITCH'] = 'yes'


def set_value(key, value):
    """ 定义一个全局变量 """
    _GLOBAL_DICT[key] = value


def get_value(key, dft_val=None):
    """ 获得一个全局变量,不存在则返回默认值 """
    try:
        return _GLOBAL_DICT[key]
    except KeyError:
        return dft_val
