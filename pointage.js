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
    else {
        document.querySelector(".btn-success").click();
    } // pointage2 
}
window.setInterval("pointage()", 60000);