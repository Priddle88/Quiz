var time = document.querySelector(".time");
var heading = document.querySelector("header");
var pageContent = document.querySelector(".content");

heading.setAttribute("style", "display: flex; justify-content: space-between;");
pageContent.setAttribute("style", "text-align: center;")

function startTime() {
    var timeLeft = 60;

    var countdown = setInterval(function() {

        timeLeft --;
        time.textContent = `Time: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(countdown);
            time.textContent = "";
        }

    }, 1000)
}

function mainPage(){
    startTime();
    var quizTitle = document.createElement("h1");
    var someText = document.createElement("p");

    quizTitle.textContent = "Coding Quiz";
    someText.textContent = "Get ready for the most intense quiz ever";

    pageContent.appendChild(quizTitle);
    quizTitle.appendChild(someText);
}

mainPage();
