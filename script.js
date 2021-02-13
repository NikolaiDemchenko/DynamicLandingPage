window.addEventListener("DOMContentLoaded",() => {
    let doc = document;

    let time = doc.getElementById("time"),
        body = doc.querySelector("body"),
        name = doc.querySelector(".my-name"),
        focus = doc.querySelector(".my-focus"),
        greeting = doc.querySelector(".greeting");

    function setDate() {
        let date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            amPm = hour >= 12 ? "PM" : "AM";
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
            greeting.textContent = "Good Evening,";
        }
        else if (hour > 6 && hour < 12) {
            body.classList.add("morning");
            greeting.textContent = "Good morning,";
        }
        else {
            body.classList.add("afternoon");
            greeting.textContent = "Good afternoon,";
        }
    }

    function setName() {
        if (localStorage.name !== undefined) {
            name.textContent = localStorage.getItem("name");
        }
    }

    function setFocus() {
        if (localStorage.focus !== undefined) {
            focus .textContent = localStorage.getItem("focus");
        }
    }

    window.addEventListener("keypress", (e) => {
        if (e.key !== 'Enter') {
            if (e.target.classList.contains("my-name")) {
                if (name.textContent === "[Enter name]") {
                    localStorage.setItem("name",e.key);
                }
                else {
                    localStorage.setItem("name", name.textContent + e.key);
                }
            }

            if (e.target.classList.contains("my-focus")) {
                if (focus.textContent === "[Enter focus]") {
                    localStorage.setItem("focus",e.key);
                }
                else {
                    localStorage.setItem("focus", focus.textContent + e.key);
                }
            }
        }
        else {
            e.preventDefault();
        }
    });

    setDate();
    setBg();
    setName();
    setFocus();
});