# -*- coding: utf-8 -*-
from mgt_app import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0',  # 任何ip都可以访问
            port=7773,  # 端口
            debug=True
            )
