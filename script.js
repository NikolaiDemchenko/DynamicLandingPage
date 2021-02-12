window.addEventListener("DOMContentLoaded",() => {
    let doc = document;

    let time = doc.getElementById("time"),
        body = doc.querySelector("body");

    function setDate() {
        let date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            amPm = time >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
        setTimeout(setDate, 1000);
    }

    function addZero(value) {
        if (value < 10)
            return '' + 0 + value;
        return value;
    }

    function setBg() {
        let date = new Date(),
            hour = date.getHours();
        if (hour < 6 || hour > 18) {
            body.classList.add("night");
        }
        else if (hour > 6 && hour < 12) {
            body.classList.add("morning");
        }
        else {
            body.classList.add("afternoon");
        }
    }

    setDate();
    setBg();
});