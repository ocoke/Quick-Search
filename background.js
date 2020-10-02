// 百度搜索
chrome.contextMenus.create({
    title: '使用百度搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-baidu',
    type: 'normal',
    onclick: function (params) {
        // 打开百度搜索页面
        chrome.tabs.create({ url: 'https://www.baidu.com/s?wd=' + encodeURI(params.selectionText) });
    }
});
// 谷歌搜索
chrome.contextMenus.create({
    title: '使用谷歌搜索「%s」',
    contexts: ['selection'],
    id: 'quick-search-google',
    type: 'normal',
    onclick: function (params) {
        // 打开谷歌搜索页面
        chrome.tabs.create({ url: 'https://www.google.com/search?q=' + encodeURI(params.selectionText) });
    }
});