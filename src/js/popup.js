const locationBtn = document.getElementById("location");
const activityBtn = document.getElementById("activity");
let countLocation = 0;
let countActivity = 0;

function switchLocation() {
    if (countLocation == 0) {
        locationBtn.classList.remove("becode")
        locationBtn.classList.add("home")
        countLocation++;
    }
    else if (countLocation == 1) {
        locationBtn.classList.remove("home")
        locationBtn.classList.add("becode")
        countLocation--;
    }
}

locationBtn.addEventListener("click", switchLocation);

function switchActivity() {
    if (countActivity == 0) {
        activityBtn.classList.remove("on-state")
        activityBtn.classList.add("off-state")
        countActivity++;
    }
    else if (countActivity == 1) {
        activityBtn.classList.remove("off-state")
        activityBtn.classList.add("on-state")
        countActivity--;
    }
}

activityBtn.addEventListener("click", switchActivity);