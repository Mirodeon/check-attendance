let currentLocation = "becode";
let currentActivity = "on-state";

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.chooseLocation === "becode") {
            currentLocation = "becode";
        }
        else if (request.chooseLocation === "home") {
            currentLocation = "home";
        }
        else if (request.chooseActivity === "on-state") {
            currentActivity = "on-state";
        }
        else if (request.chooseActivity === "off-state") {
            currentActivity = "off-state";
        }
        else if (request.infoLocation === "info") {
            chrome.runtime.sendMessage({ initialLocation: currentLocation });
        }
        else if (request.infoActivity === "info") {
            chrome.runtime.sendMessage({ initialActivity: currentActivity });
        }
    });


function pointage() {

    var time = new Date();
    var heure = time.getHours();
    var min = time.getMinutes();

    if ((heure == 08 && min == 45) || (heure == 12 && min == 30) || (heure == 13 && min == 20) || (heure == 17 && min == 00)) {
        location.reload();
    } // refresh
    else if (heure == 08 && min == 46 && currentLocation === "becode") {
        document.querySelector(".btn-outline-primary").click();
    } // becode
    else if (heure == 08 && min == 46 && currentLocation === "home") {
        document.querySelector(".btn-outline-secondary").click();
    } // home
    else if (currentActivity === "on-state" && ((heure == 08 && min >= 47) || (heure == 12 && min >= 31) || (heure == 13 && min >= 21) || (heure == 17 && min >= 01))) {
        document.querySelector(".btn-success").click();
        /*alert(currentLocation);//test*/
    } // pointage
}

window.setInterval("pointage()", 60000);