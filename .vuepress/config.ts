import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "python-office",
  description: "为自动化而生",
  port: 18001,
  head: [
    ["link", { rel: "icon", href: "https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg" }],
    ['script', {}, `
                    var _hmt = _hmt || [];
                    (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?bd18154a0aff45581049f87f5c644b44";
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                    })();
                    `
    ]
  ],
  plugins:[
    mdEnhancePlugin(
      {
        mermaid: true,
        card: true,
      },
    ),
    copyCodePlugin(
      {
        locales: {
          "/": {
            copy: "复制代码"
          }
        }
      },
    ),
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "晚枫",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    bulletin: {
      body: [
        {
          type: 'text',
          content: `我们的软件得到了进一步的优化，用户体验得到了进一步的改善`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        { type: 'title', content: 'QQ 群' },
        {
          type: 'text',
          content: `
          <ul>
            <li>QQ群1：</li>
            <li>QQ群2：</li>
            <li>QQ群3：</li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        { type: 'title', content: 'GitHub' },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="https://github.com/CoderWanFeng/python-office/issues">Issues<a/></li>
            <li><a href="https://github.com/CoderWanFeng/python-office/discussions">Discussions<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        { type: 'hr', },
        {
          type: 'buttongroup',
          children: [
            { text: '打赏', link: 'https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/wechat-pay.jpg' }
          ]
        }
      ],
    },
    series: {
      "/docs": [
        {
          text: "入门指南",
          children: ["/docs/guide/introduction.html", "/docs/guide/allFunc.html", "/docs/guide/office.html", "/docs/guide/requirement.html"],
        },
        {
          text: "原创课程",
          children: ["/docs/course/50-python-office.html"],
        },
        {
          text: "核心功能",
          children: ["/docs/office/word.html", "/docs/office/excel.html", "/docs/office/ppt.html", "/docs/office/pdf.html", "/docs/office/email.html", "/docs/office/file.html", "/docs/office/image.html", "/docs/office/ocr.html", "/docs/office/tools.html", "/docs/office/video.html", "/docs/office/web.html", "/docs/office/robot.html", "/docs/office/datav.html", "/docs/office/finance.html"],
        },
        {
          text: "视频课程",
          children: ["/docs/video/video.html", "/docs/video/poocr.html"],
        },
        {
          text: "关于作者",
          children: ["/docs/contributor/contributor.html", "/docs/contributor/about.html"],
        },
        {
          text: "相关文档",
          children: ["/docs/ref/git.html", "/docs/ref/log.html", "/docs/ref/ref.html", "/docs/ref/qaq.html"],
        },
      ],
    },
    navbar: [
      { text: "学习文档", link: "/guide/introduction", icon: "Account"},
      {
        text: "下载资料",
        icon: "Download",
        children: [
          { text: "软件", link: "http://python4office.cn/python-download/" },
          { text: "源码", link: "/docs/contributor/contributor.md" },
        ],
      },
      {
        text: "学习课程",
        icon: "Archive",
        children: [
          { text: "Python基础", link: "http://gk.link/a/128fC" },
          { text: "自动化办公", link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect" },
          { text: "微信机器人", link: "https://mp.weixin.qq.com/s/9aspEHdCiAdXK17AvHlu9Q" },
        ],
      },
      {
        text: "关于作者",
        icon: "Chat",
        children: [
          { text: "读者群", link: "https://mp.weixin.qq.com/s/NN2pX2bQPpczOeGF4ARNtw" },
          { text: "作者微信", link: "https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw" },
        ],
      },
      
      { text: "领取福利", link: "http://python4office.cn/sideline-pro-list/", icon: "Gift"},
    ],
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
