let numbers = [25.55, 32.07, 45.36, 60.12, 12.53, 25.55, 75.15]
let barEl;

//Load window before JavaScript
function init() {
    //Get week number
    let d = new Date();
    let day = d.getDay();

    //Adding style and functions to the bars
    barEl = document.querySelectorAll(".bars");
    for (let i = 0; i < barEl.length; i++) {
        barEl[i].setAttribute("data-sum", numbers[i])
        barEl[i].addEventListener("mouseenter", showDiv);
        barEl[i].addEventListener("mouseleave", hideDiv);
        barEl[i].addEventListener("click", showDivClick);
        barEl[i].children[0].style.height = numbers[i] * 2 + "px";
        barEl[day].children[0].style.backgroundColor = "hsl(186, 34%, 60%)";
        barEl[day].children[0].addEventListener("mouseenter", function () {
            this.style.backgroundColor = "hsl(187, 49%, 80%)";
        });
        barEl[day].children[0].addEventListener("mouseleave", function () {
            this.style.backgroundColor = "hsl(186, 34%, 60%)";
        });
    }
}//End init
window.addEventListener("load", init);

function showDiv() {
    let beforeDiv = this.querySelector(".bar");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "$" + this.getAttribute("data-sum");
    newDiv.className = "value";
    this.insertBefore(newDiv, beforeDiv);
}

function hideDiv() {
    if (this.hasChildNodes()) {
        this.removeChild(this.children[0]);
    }
}

function showDivClick() {
    let beforeDiv = this.querySelector(".bar");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "$" + this.getAttribute("data-sum");
    newDiv.className = "value";

    let shownDiv = document.querySelector(".value");
    if (shownDiv) {
        shownDiv.parentNode.removeChild(shownDiv.parentNode.children[0]);
        this.insertBefore(newDiv, beforeDiv);
    } else {
        this.insertBefore(newDiv, beforeDiv);
    }
}
