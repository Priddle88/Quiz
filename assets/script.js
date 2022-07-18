var time = document.querySelector(".time");
var heading = document.querySelector("header");
var pageContent = document.querySelector(".content");
var options = document.querySelector(".options");


var quizTitle = document.createElement("h1");
var someText = document.createElement("p");
var startButton = document.createElement("button");
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");

var timeLeft = 60;
var score = 0;

ans1.classList.add("btn");
ans2.classList.add("btn");
ans3.classList.add("btn");
ans4.classList.add("btn");


heading.setAttribute("style", "display: flex; justify-content: space-between;");
pageContent.setAttribute("style", "text-align: center;")

function startTime() {

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

    startButton.setAttribute("onclick", "nextPage()");

    quizTitle.textContent = "Coding Quiz";
    someText.textContent = "Get ready for the most intense quiz ever";
    startButton.textContent = "Start Quiz";


    pageContent.appendChild(quizTitle);
    quizTitle.appendChild(someText);
    pageContent.appendChild(startButton);

}

function nextPage() {
    startTime();
    quizTitle.textContent = "";
    someText.textContent = "What type of data stores a value of true of false?";
    ans1.textContent = "String";
    ans2.textContent = "Number";
    ans3.textContent = "Boolean";

    startButton.remove();

    pageContent.appendChild(someText);
    options.appendChild(ans1);
    options.appendChild(ans2);
    options.appendChild(ans3);

    ans1.addEventListener("click", increaseScore);
    ans2.addEventListener("click", decreaseTime);
    ans3.addEventListener("click", decreaseTime);

    console.log(score);

}

function increaseScore() {
    score += 20;
    console.log(score);
}

function decreaseTime() {
    timeLeft = timeLeft - 10;
}

mainPage();
