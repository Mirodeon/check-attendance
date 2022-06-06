const locationBtn = document.getElementById("location");
const activityBtn = document.getElementById("activity");
let countLocation = 0;
let countActivity = 0;

function requestLocation() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { infoLocation: "info" })
    });
}

window.addEventListener("load", requestLocation);

function requestActivity() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { infoActivity: "info" })
    });
}

window.addEventListener("load", requestActivity);

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.initialLocation === "becode") {
            countLocation = 0;
            locationBtn.classList.add("becode");
        }
        else if (request.initialLocation === "home") {
            countLocation = 1;
            locationBtn.classList.add("home");
        }
        else if (request.initialActivity === "on-state") {
            countActivity = 0;
            activityBtn.classList.add("on-state");
        }
        else if (request.initialActivity === "off-state") {
            countActivity = 1;
            activityBtn.classList.add("off-state");
        }
    });

function switchLocation() {
    if (countLocation == 0) {
        locationBtn.classList.remove("becode");
        locationBtn.classList.add("home");
        countLocation++;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { chooseLocation: "home" });
        });
    }
    else if (countLocation == 1) {
        locationBtn.classList.remove("home");
        locationBtn.classList.add("becode");
        countLocation--;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { chooseLocation: "becode" });
        });
    }
}

locationBtn.addEventListener("click", switchLocation);

function switchActivity() {
    if (countActivity == 0) {
        activityBtn.classList.remove("on-state");
        activityBtn.classList.add("off-state");
        countActivity++;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { chooseActivity: "off-state" });
        });
    }
    else if (countActivity == 1) {
        activityBtn.classList.remove("off-state");
        activityBtn.classList.add("on-state");
        countActivity--;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { chooseActivity: "on-state" });
        });
    }
}

activityBtn.addEventListener("click", switchActivity);