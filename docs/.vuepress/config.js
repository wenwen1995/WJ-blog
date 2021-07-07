module.exports = {
    title: 'WJ-blog',
    // plugins: ['autobar'],
    description: '我的个人网站',
    dest: './dist',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/logo.jpg'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/WJ-blog/', // 这是部署到github相关的配置
    repo: 'https://github.com/wenwen1995/WJ-blog.git', // 添加 github 链接
    markdown: {
        lineNumbers: true  // 代码块显示行号
    },
    themeConfig: {
        search: true,//搜索
        searchMaxSuggestions: 10,
        nav: [ // 导航栏配置
            {text: '前端', link: '/front/introduction'},
            {text: '算法题库', link: '/algorithm/study-leetcode'},
            {text: '生活', link: '/life/introduction'},
        ],
        sidebar: [
            {
                title: "前端学习",
                collapsable: false,
                children: [
                    ['/front/introduction', '介绍'],
                    ['/front/study/single-spa-understand', '关于single-spa的理解和小实战'],
                    ['/front/study/typescript-about-interface-understand', 'TYPESCRIPT 关于interface理解'],
                    ['/front/study/css3 transform, transform-origin usage', 'css3 transform, transform-origin 用法'],
                ]
            },
            {
                title: "工作遇到的问题",
                collapsable: false,
                children: [
                    ['/front/work/realize-iframe-and-window.postMessage', '认识iframe和window.postMessage的使用'],
                    ['/front/work/vue-admin keep-alive-multiple-router-can\'t-cathe', 'vue 使用keep-alive 三级以上的路由，无法缓存问题'],
                    ['/front/work/scrollIntoView VS scrollIntoViewIfNeeded', 'scrollIntoView VS scrollIntoViewIfNeeded、爬坑'],
                    ['/front/work/circle-progress-by-css3', '静态环形进度条css3实现'],
                    ['/front/work/circle-progress-by-svg', '静态环形进度条svg实现'],
                ]
            },
            ['/algorithm/study-leetcode', '刷leetcode部分笔记总结'],
            {
                title: "生活杂记",
                collapsable: false,
                children: [
                    ['/life/introduction', '介绍'],
                    ['/life/lifeDaily/2021-7-7-life', '2021年7月7日生活笔记'],
                ]
            },
        ],
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    }
};
