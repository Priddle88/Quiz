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

var timeLeft = 60;
var score = 0;
var page = 0;
var users = [];
var scores = [];
var resets = 0;
var finalUser = [];
var finalScore= [];

ans1.classList.add("btn");
ans2.classList.add("btn");
ans3.classList.add("btn");
ans4.classList.add("btn");


heading.setAttribute("style", "display: flex; justify-content: space-between;");
pageContent.setAttribute("style", "text-align: center;")
scoresBtn.addEventListener('click', highscores);
pageContent.classList.add("pageC");

function startTime() {

    var countdown = setInterval(function() {

        timeLeft --;
        time.textContent = `Time: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(countdown);
            time.textContent = "";
            allDone();
        } else if (timeLeft <= 0) {
            clearInterval(countdown);
            time.textContent = "";
            timeLeft = 0;
        }

    }, 1000);
}

function mainPage(){

    startButton.removeEventListener('click', reset);
    startButton.setAttribute("onclick", "nextPage()");

    quizTitle.textContent = "Coding Quiz";
    someText.textContent = "Get ready for the most intense quiz ever";
    startButton.textContent = "Start Quiz";

    // pageContent.appendChild(userId);
    pageContent.appendChild(quizTitle);
    quizTitle.appendChild(someText);
    pageContent.appendChild(startButton);

    if (resets == 0) {
        userId.remove();
    }
    subScore.style.display = "none";

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
    options.style.display = "block";
    options.appendChild(ans1);
    options.appendChild(ans2);
    options.appendChild(ans3);

    if (resets >= 1) {
    someText.appendChild(ans1);
    someText.appendChild(ans2);
    someText.appendChild(ans3);
    options.style.display = "none";
        
    }

    ans1.removeEventListener("click", decreaseTime);
    ans2.removeEventListener("click", decreaseTime);
    ans3.removeEventListener("click", decreaseTime);
    ans4.removeEventListener("click", increaseScore);

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

    if (resets >= 1) {
        someText.appendChild(ans1);
        someText.appendChild(ans2);
        someText.appendChild(ans3);
        someText.appendChild(ans4);
        }

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

    if (resets >= 1) {
        someText.appendChild(ans1);
        someText.appendChild(ans2);
        someText.appendChild(ans3);
        someText.appendChild(ans4);
        }

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

    if (resets >= 1) {
        pageContent.appendChild(someText);
        pageContent.appendChild(ans1);
        pageContent.appendChild(ans2);
        pageContent.appendChild(ans3);
        pageContent.appendChild(ans4);
        }

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

    if (resets >= 1) {
        var newDiv = document.createElement("div");
        someText.appendChild(newDiv);
        newDiv.appendChild(ans1);
        newDiv.appendChild(ans2);
        newDiv.appendChild(ans3);
        newDiv.appendChild(ans4);
        }

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

    options.style.display = "block";

    result.textContent = `You scored ${score}/100`;

    subScore.style.display = "inline";
    if (resets == 0) {
        options.appendChild(result);
        options.appendChild(userId);
        options.appendChild(subScore);
    }

    if (resets >= 1) {
        
        result.style.display = "block";
        // options.appendChild(result);
        // options.appendChild(userId);
        // options.appendChild(subScore);

        someText.appendChild(options);
        options.appendChild(result);
        result.appendChild(userId);
        userId.style.display = "block";
        userId.appendChild(subScore);
        }

    ans1.remove();
    ans2.remove();
    ans3.remove();
    ans4.remove();

    subScore.addEventListener("click", function(event) {
        event.preventDefault();
    
    
        userId = document.querySelector("#user").value;
    
        if (userId === "") {
            submitMess.textContent = "User cannot be blank";
            someText.appendChild(submitMess);
        } else {
            submitMess.textContent = "Registered successfully";
            someText.appendChild(submitMess);
        }
        
        store(userId);
        scoreStore(score);
        localStorage.setItem("User", userId);
      
        highscores();
      
      });
    

}

function store(itemId) {
    users.push(itemId);
    localStorage.setItem("User1", JSON.stringify(users));
    finalUser = JSON.parse(localStorage.getItem("User1"));
    
}

function scoreStore(itemId) {
    scores.push(itemId);
    localStorage.setItem("Score", JSON.stringify(scores));
    finalScore = JSON.parse(localStorage.getItem("Score"))
}

function scoreList() {
    var orderList = document.createElement("ol");
    pageContent.appendChild(orderList);

    for (i = 0; i < finalUser.length; i++) {
        orderList.appendChild(document.createElement("li").textContent = finalUser[i]);
    }
}


function highscores() {
    quizTitle.textContent = "Highscores";
    // result.textContent = score + "% - " + localStorage.getItem("User");

    var orderList = document.createElement("ul");
    var listItem = document.createElement("li");
    

    pageContent.appendChild(quizTitle);
    // pageContent.appendChild(result);
    pageContent.appendChild(startButton);
    // scoreList();

    quizTitle.appendChild(orderList);

    for (i = 0; i < finalUser.length; i++) {
        var itemNumber = i + 1;
        // listItem.textContent = itemNumber + ".  " + finalScore[i] + " - " + finalUser[i];
        // orderList.appendChild(listItem);
        orderList.appendChild(document.createElement("li"));

        if (page > 0) {
            orderList.children[0].appendChild(document.createElement("li"));
        }

        orderList.children[i].textContent = itemNumber + ".  " + finalScore[i] + " - " + finalUser[i];
    }


    startButton.textContent = "Play Again?";

    startButton.removeAttribute("onclick", "nextPage()");
    startButton.addEventListener('click', reset);

    someText.remove();
    options.style.display = "none";
    // console.log(localStorage.getItem("User"));

}

function reset() {
    score = 0;
    page = 0;
    resets += 1;
    timeLeft = 60;
    result.style.display = "none";
    submitMess.remove();

    mainPage();
}



mainPage();
