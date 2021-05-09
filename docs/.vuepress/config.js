/**
 * @file config.js
 * @author wangsuyan
 * @description 网站配置文件
 */
const {description} = require('../../package');

module.exports = {
    title: '会编',
    description: description,
    base: '/js/',

    head: [
        ['meta', {name: 'theme-color', content: '#3e77e9'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: '前端小课',
                link: 'https://lefex.gitee.io'
            },
            {
                text: '关于本站',
                link: 'https://lefex.github.io/js/about.html'
            },
            {
                text: 'github',
                link: 'https://github.com/lefex/js'
            }
        ],
        sidebar: {}
    },

    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom'
    ]
};

