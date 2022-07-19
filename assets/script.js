var time = document.querySelector(".time");
var heading = document.querySelector("header");
var pageContent = document.querySelector(".content");
var options = document.querySelector(".options");
var subScore = document.querySelector("#subScore");
var userId = document.querySelector("#user");
var scoresBtn = document.querySelector(".scoresBtn");

var quizTitle = document.createElement("h1");
var someText = document.createElement("p");
var startButton = document.createElement("button");
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
var result = document.createElement("p");
var submitMess = document.createElement("h5");

var timeLeft = 120;
var score = 0;
var page = 0;

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
    userId.remove();
    subScore.remove();

}

function nextPage() {

    startTime();
    page = 1;

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

    ans1.addEventListener("click", decreaseTime);
    ans2.addEventListener("click", decreaseTime);
    ans3.addEventListener("click", increaseScore);


    console.log(score);
    console.log(page);

}

function increaseScore() {
    score += 20;
    console.log(score);

    if (page == 1) {
        thirdPage();
    } else if (page == 2){ 
        fourthPage();
    } else if (page == 3) {
        fifthPage();
    } else if (page == 4) {
        sixthPage();
    } else if (page == 5) {
        allDone();
    }

    return;
}

function decreaseTime() {
    if (timeLeft > 0) {
    timeLeft = timeLeft - 10;
    }

    if (page == 1) {
        thirdPage();
    } else if (page == 2) {
        fourthPage();
    } else if (page == 3) {
        fifthPage();
    } else if (page == 4) {
        sixthPage();
    } else if (page == 5) {
        allDone();
    }

    return;
}

function thirdPage() {

    page = 2;

    someText.textContent = "What is used to store information to be referenced and used by programs?";
    ans1.textContent = "Information tool thing";
    ans2.textContent = "Variables (var)";
    ans3.textContent = "Dragons";
    ans4.textContent = "Boolean";

    pageContent.appendChild(someText);
    options.appendChild(ans1);
    options.appendChild(ans2);
    options.appendChild(ans3);
    options.appendChild(ans4);

    ans1.removeEventListener("click", decreaseTime);
    ans2.removeEventListener("click", decreaseTime);
    ans3.removeEventListener("click", increaseScore);

    ans1.addEventListener("click", decreaseTime);
    ans2.addEventListener("click", increaseScore);
    ans3.addEventListener("click", decreaseTime);
    ans4.addEventListener("click", decreaseTime);

    console.log(score);
    console.log(page);
}

function fourthPage() {

    page = 3;

    someText.textContent = "Which one is a programming language?";
    ans1.textContent = "Python";
    ans2.textContent = "Chicken";
    ans3.textContent = "Turtle";
    ans4.textContent = "Cheetah";

    ans1.removeEventListener("click", decreaseTime);
    ans2.removeEventListener("click", increaseScore);
    ans3.removeEventListener("click", decreaseTime);
    ans4.removeEventListener("click", decreaseTime);

    ans1.addEventListener("click", increaseScore);
    ans2.addEventListener("click", decreaseTime);
    ans3.addEventListener("click", decreaseTime);
    ans4.addEventListener("click", decreaseTime);

    console.log(score);
    console.log(page);
}

function fifthPage() {

    page = 4;

    someText.textContent = "Which one is a HTML tag?";
    ans1.textContent = "<bloop>";
    ans2.textContent = "<bleep>";
    ans3.textContent = "<section>";
    ans4.textContent = "<boing>";

    ans1.removeEventListener("click", increaseScore);
    ans2.removeEventListener("click", decreaseTime);
    ans3.removeEventListener("click", decreaseTime);
    ans4.removeEventListener("click", decreaseTime);

    ans1.addEventListener("click", decreaseTime);
    ans2.addEventListener("click", decreaseTime);
    ans3.addEventListener("click", increaseScore);
    ans4.addEventListener("click", decreaseTime);

    console.log(score);
    console.log(page);
}

function sixthPage() {

    page = 5;

    someText.textContent = "Did you like this test?";
    ans1.textContent = "no";
    ans2.textContent = "no";
    ans3.textContent = "no";
    ans4.textContent = "yes";

    ans1.removeEventListener("click", decreaseTime);
    ans2.removeEventListener("click", decreaseTime);
    ans3.removeEventListener("click", increaseScore);
    ans4.removeEventListener("click", decreaseTime);

    ans1.addEventListener("click", decreaseTime);
    ans2.addEventListener("click", decreaseTime);
    ans3.addEventListener("click", decreaseTime);
    ans4.addEventListener("click", increaseScore);

    console.log(score);
    console.log(page);
}

function allDone() {
    
    page = 6;

    someText.textContent = "All Done!";

    result.textContent = `You scored ${score}/100`;
    options.appendChild(result);
    options.appendChild(userId);
    options.appendChild(subScore);

    ans1.remove();
    ans2.remove();
    ans3.remove();
    ans4.remove();

    subScore.addEventListener("click", function(event) {
        event.preventDefault();
    
    
        userId = document.querySelector("#user").value;
    
        if (userId === "") {
            submitMess.textContent = "User cannot be blank";
            options.appendChild(submitMess);
        } else {
            submitMess.textContent = "Registered successfully";
            options.appendChild(submitMess);
        }
        
        localStorage.setItem("User", userId);
      
        highscores();
      
      });
    

}


function highscores() {
    quizTitle.textContent = "Highscores";
    result.textContent = score + "/100 - " + localStorage.getItem("User");

    pageContent.appendChild(quizTitle);
    pageContent.appendChild(result);

    someText.remove();
    options.remove();

}


mainPage();
