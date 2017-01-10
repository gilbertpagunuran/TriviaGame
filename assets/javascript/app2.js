$(document).ready(function()
{

var runBal = 0;
var status = 0;
var score = 0;
var loss = 0;
var ansList = [];
var buttonActive = false; 

var sCount = 0;
var qCount = 0;

var stringQuestion = "";
var correctAnswer = "";
var correctItem = 0;
var roundNo = 1;

var queryURL = 'https://opentdb.com/api.php?amount=1&category=22&difficulty=medium&type=multiple';
//var queryURL = "https://www.opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";
askQuestion();


var z = setInterval(secCounter, 1000);

  function askQuestion(){
      $.ajax({url: queryURL,method: "GET"})
      .done(function(data) {
        console.log(data.results[0].correct_answer);

        $("#qLine").html(roundNo + ".  " + data.results[0].question);

        ansList[0] = data.results[0].correct_answer;
        ansList[1] = data.results[0].incorrect_answers[0];
        ansList[2] = data.results[0].incorrect_answers[1];
        ansList[3] = data.results[0].incorrect_answers[2];

        correctAnswer = data.results[0].correct_answer;

        var b = Math.floor(Math.random() * 4);
        console.log("b=" + b);
        if (b == 1 || b == 2 || b == 3) {         //swap places
          tempHold = ansList[0];
          ansList[0] = ansList[b];
          ansList[b] = tempHold;
        }

        $("#btn1").html(ansList[0]);
        $("#btn2").html(ansList[1]);
        $("#btn3").html(ansList[2]);
        $("#btn4").html(ansList[3]);
        correctItem = b;

      });

  };

  function secCounter(){
    sCount++;
    $("#xNum").html(sCount);

    if (sCount == 10){              //time's up

      clearInterval(z);

      $("#msgLine").html(correctAnswer);     //show correct answer
     
      sCount = 0;
      $("#xNum").html(sCount);      // reset time count to 0
      setTimeout(timeDelay,3000);  // and wait 3 seconds
    }
  }

  function timeDelay() {

     if (roundNo == 10) {
        alert("Round is completed. Your score is " + score)
        roundNo = 0;
        score = 0;
     }

    sCount = 0;
    $("#xNum").html(sCount);      // reset time count to 0

    z = setInterval(secCounter, 1000);   // restart timer
    $("#msgLine").html("");

    askQuestion();                      // ask new question
    roundNo++;                          // question count
    buttonActive = false;               // enable buttons
  }

  $("#btn1").on("click",function(){     
     if (buttonActive) {return;}
     buttonActive = true;

     if (correctItem == 0) {
        score++;
        $("#msgLine").html("Correct!");     //confirm

     } else {
        loss++;
        $("#msgLine").html(correctAnswer);   //show correct answer
     }
    clearInterval(z);
  //  sCount = 0;
  //  $("#xNum").html(sCount);      // reset time count to 0
    setTimeout(timeDelay,3000);  // and wait 3 seconds

  });

  $("#btn2").on("click",function(){    

    if (buttonActive) {return;}
     buttonActive = true;

     if (correctItem == 1) {
        score++;
        $("#msgLine").html("Correct!");     //confirm

     } else {
        loss++;
        $("#msgLine").html(correctAnswer);   //show correct answer
     }
    clearInterval(z);
  //  sCount = 0;
  //  $("#xNum").html(sCount);      // reset time count to 0
    setTimeout(timeDelay,3000);  // and wait 3 seconds

  });

  $("#btn3").on("click",function(){    

    if (buttonActive) {return;}
     buttonActive = true;

     if (correctItem == 2) {
        score++;
        $("#msgLine").html("Correct!");     //confirm

     } else {
        loss++;
        $("#msgLine").html(correctAnswer);   //show correct answer
     }
    clearInterval(z);
  //  sCount = 0;
  //  $("#xNum").html(sCount);      // reset time count to 0
    setTimeout(timeDelay,3000);  // and wait 3 seconds

  });

  $("#btn4").on("click",function(){     

      if (buttonActive) {return;}
     buttonActive = true;

     if (correctItem == 3) {
        score++;
        $("#msgLine").html("Correct!");     //confirm

     } else {
        loss++;
        $("#msgLine").html(correctAnswer);   //show correct answer
     }
    clearInterval(z);
  //  sCount = 0;
  //  $("#xNum").html(sCount);      // reset time count to 0
    setTimeout(timeDelay,3000);  // and wait 3 seconds

  });

});