chrome.browserAction.onClicked.addListener(function  (tab) {
	chrome.tabs.executeScript(tab.id, {file: 'content_script/content.js'});
	chrome.tabs.insertCSS(tab.id, { file: 'css/style.css' });
})