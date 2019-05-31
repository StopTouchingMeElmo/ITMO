clock.style.width = "900px";
clock.style.margin = "150px";
clock.style.textAlign = "center";
clock.style.fontSize = "150px";

let span1 = document.createElement("span");
span1.style.color = "orange";
let span2 = document.createElement("span");
span2.style.color = "green";
let span3 = document.createElement("span");
span3.style.color = "red";

clock.appendChild(span1);
clock.appendChild(span2);
clock.appendChild(span3);

function displayClock() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hrs = (hrs < 10) ? '0' + hrs : hrs;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    span1.innerHTML = hrs + ":";
    span2.innerHTML = min + ":";
    span3.innerHTML = sec;

}

setInterval(displayClock, 1000);