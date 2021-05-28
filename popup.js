(function () {
    console.log("hai")
    var otherWindows = chrome.extension.getBackgroundPage();
    console.log(otherWindows.backgroundFunction()); 
})();

console.log("popup")
