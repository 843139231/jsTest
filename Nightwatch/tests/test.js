module.exports = {
    'Search by baidu': function(client){
        const searchInput = '#kw';
        const searchBtn = '#su';
        const resultContainer = '#container'
        // 启动
        client.url('http://baidu.com').maximizeWindow()
            // 确保输入框可以使用.   应该算是一个延时函数，以保证   页面完整加载好
            .waitForElementVisible(searchInput, 5000)
            // 输入"nightwatch"然后搜索.
            .setValue(searchInput, 'nightwatch')
            .click(searchBtn)
            .waitForElementVisible(resultContainer, 1000)
            // 截屏 
            .saveScreenshot('reports/answers.png')
            .end();
    }
}