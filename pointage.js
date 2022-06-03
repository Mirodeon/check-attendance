function pointage() {

    var time = new Date();

    var heure = time.getHours();
    var min = time.getMinutes();

    if ((heure == 08 && min == 50) || (heure == 12 && min == 30) || (heure == 13 && min == 20) || (heure == 17 && min == 00)) {
        location.reload();
    } // refresh
    else if (heure == 08 && min == 51) {
        document.querySelector(".btn-outline-primary").click();
    } // becode
    /*else if (heure == 08 && min == 51) {
        document.querySelector(".btn-outline-secondary").click();
    } // home*/
    else if ((heure == 08 && min == 52) || (heure == 12 && min == 32) || (heure == 13 && min == 22) || (heure == 17 && min == 02)) {
        document.querySelector(".btn-success").click();
    } // pointage
    /*else {
        document.querySelector(".btn-outline-primary").click();
    } //test*/
}

window.setInterval("pointage()", 60000);