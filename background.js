function removePopup() {
    var elems = document.getElementsByTagName('*');
    var highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
    for (var i = 0; i < elems.length; i++) {
        var zindex = Number.parseInt(
            document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
            10
        );
        if (zindex > highest) {
            highest = zindex;
        }
    }
    for (var i = 0; i < elems.length; i++) {
        var zindex = Number.parseInt(
            document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
            10
        );
        if (zindex == highest) {
            elems[i].remove();
        }
    }
    document.body.style.overflowX = null;
    document.body.style.overflowY = scroll;
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removePopup
    });
});