chrome.contextMenus.create({
    title: '使用百度搜索「%s」', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    id: 'quick-search-baidu',
    type: 'normal',
    onclick: function (params) {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({ url: 'https://www.baidu.com/s?wd=' + encodeURI(params.selectionText) });
    }
});
chrome.contextMenus.create({
    title: '使用谷歌搜索「%s」', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    id: 'quick-search-google',
    type: 'normal',
    onclick: function (params) {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({ url: 'https://www.google.com/search?q=' + encodeURI(params.selectionText) });
    }
});