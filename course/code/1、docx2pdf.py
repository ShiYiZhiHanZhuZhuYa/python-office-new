# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw
@个人网站      ：www.python-office.com
@代码日期    ：2023/7/15 0:35 
@本段代码的视频说明     ：
'''

# pip install python-office ，下载教程：https://www.bilibili.com/video/BV1pT4y1k7FH
import office

office.word.docx2pdf(path=r'./test_files/程序员晚枫（作品合集）.docx',
                     output_path=r'./test_files/docx2pdf/程序员晚枫（作品合集）.pdf')
