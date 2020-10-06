console.log("Hi! Welcome to use Quick-Search!")
// 百度搜索
chrome.contextMenus.create({
    title: '使用 百度 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-baidu',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://www.baidu.com/s?wd=' + encodeURI(params.selectionText) });
    }
});
// 谷歌搜索
chrome.contextMenus.create({
    title: '使用 谷歌 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-google',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://www.google.com/search?q=' + encodeURI(params.selectionText) });
    }
});
// 必应搜索
chrome.contextMenus.create({
    title: '使用 必应 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-bing',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://cn.bing.com/search?q=' + encodeURI(params.selectionText) });
    }
});
// 多吉搜索
chrome.contextMenus.create({
    title: '使用 多吉 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-doge',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://www.dogedoge.com/results?q=' + encodeURI(params.selectionText) });
    }
});
// Magi 
chrome.contextMenus.create({
    title: '使用 Magi 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-magi',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://magi.com/search?q=' + encodeURI(params.selectionText) });
    }
});
// Lookao
chrome.contextMenus.create({
    title: '使用 Lookao 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-lookao',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://lookao.com/search?q=' + encodeURI(params.selectionText) });
    }
});
// DuckDuckGo
chrome.contextMenus.create({
    title: '使用 DuckDuckGo 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-ddg',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://duckduckgo.com/?q=' + encodeURI(params.selectionText) });
    }
});
// 秘迹搜索
chrome.contextMenus.create({
    title: '使用 秘迹 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-miji',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://mijisou.com/?q=' + encodeURI(params.selectionText) });
    }
});
// 搜狗搜索
chrome.contextMenus.create({
    title: '使用 搜狗 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-sogou',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://mijisou.com/?q=' + encodeURI(params.selectionText) });
    }
});
// 360搜索
chrome.contextMenus.create({
    title: '使用 360 搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-so',
    type: 'normal',
    onclick: function (params) {
        // 打开搜索页面
        chrome.tabs.create({ url: 'https://www.so.com/s?q=' + encodeURI(params.selectionText) });
    }
});