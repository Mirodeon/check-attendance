let currentLocation = "becode";

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
        };
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
    else if (heure == 08 && min == 51 && currentLocation === "home") {
        document.querySelector(".btn-outline-secondary").click();
    } // home
    else {
        document.querySelector(".btn-success").click();
       /* alert(currentLocation) */ //test
    } // pointage
}

window.setInterval("pointage()", 20000);