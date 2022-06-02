function pointage() {

    var time = new Date(); // récup date

    var heure = time.getHours(); // heure
    var min = time.getMinutes(); // minute

    if ((heure == 08 && min == 55) || (heure == 12 && min == 30) || (heure == 13 && min == 20) || (heure == 17 && min == 00)) {
        location.reload();
    } // refresh
    else if (heure == 08 && min == 56) {
        document.querySelector(".btn-outline-primary").click();
    } // @becode
    else if ((heure == 08 && min == 57) || (heure == 12 && min == 32) || (heure == 13 && min == 22) || (heure == 17 && min == 02)) {
        document.querySelector(".btn-success").click();
    } // pointage
    /*else if (heure == 13 && min == 58) {
        alert("Hello World !");
    }*/ //test
}

window.setInterval("pointage()", 30000);