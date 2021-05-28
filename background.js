chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if (tabId && tab.url.includes("http")) {
        console.log("inside change infor", changeInfo.status)
        chrome.tabs.executeScript(tabId, { file: "contentScript.js" }, (result) => {})
    }
});