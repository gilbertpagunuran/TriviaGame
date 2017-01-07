$(document).ready(function()
{

// initialize counters
var z = Math.floor((Math.random() * 101) + 19); // generate random integer between 19 and 120
document.getElementById("xNum").innerHTML = z;


var runBal = 0;
var status = 0;
var wins = 0;
var loss = 0;
var gems = getGems();

  console.log("entering event...");


  $("#btn1").on("click",function(){			//1st button
    if (status == 1 || status == 2) {
        runBal = 0;
        status = 0;
        statDisplay();
        z = Math.floor((Math.random() * 101) + 19);
        gems = getGems();
        document.getElementById("xNum").innerHTML = z;

     return;
    }

  	runBal = runBal + gems[0];
  	console.log("runBal=" + runBal);
    status = checkTotal(runBal,z);
    statDisplay();
  });
 
  $("#btn2").on("click",function(){			//2nd button
    if (status == 1 || status == 2) {
        runBal = 0;
        status = 0;
        statDisplay();
          z = Math.floor((Math.random() * 101) + 19);
        gems = getGems();
        document.getElementById("xNum").innerHTML = z;
     return;
    }
 	  runBal = runBal + gems[1];
    status = checkTotal(runBal,z);
    statDisplay();
  	console.log("runBal=" + runBal);
  });

  $("#btn3").on("click",function(){			//3rd button
    if (status == 1 || status == 2) {
        runBal = 0;
        status = 0;
        statDisplay();
          z = Math.floor((Math.random() * 101) + 19);
        gems = getGems();
        document.getElementById("xNum").innerHTML = z;
     return;
    }
  	runBal = runBal + gems[2];
    status = checkTotal(runBal,z);
    statDisplay();
  	console.log("runBal=" + runBal);
  
  });

  $("#btn4").on("click",function(){			//4th button
    if (status == 1 || status == 2) {
        runBal = 0;
        status = 0;
        statDisplay();
          z = Math.floor((Math.random() * 101) + 19);
        gems = getGems();
        document.getElementById("xNum").innerHTML = z;
     return;
    }
 	  runBal = runBal + gems[3];
    status = checkTotal(runBal,z);
    statDisplay();
  	console.log("runBal=" + runBal);
  });

  $("#btn5").on("click",function(){     //reset
          runBal = 0;
          status = 0;
          wins = 0;
          loss = 0;
          statDisplay();
          z = Math.floor((Math.random() * 101) + 19);
          gems = getGems();
          document.getElementById("xNum").innerHTML = z;
    });


  function checkTotal(r,n) 
  {
      if (r == n) {
          wins++;
          return 1;
      }
      else if (r > n) {
          loss++;
          return 2;
      }
  }


  function statDisplay() {
      document.getElementById("guess").innerHTML = runBal;
      document.getElementById("msgLine").innerHTML = " ";
      document.getElementById("win").innerHTML = "Win: " + wins;
      document.getElementById("loss").innerHTML = "Loss: " + loss;
      if (status == 1) {
          document.getElementById("msgLine").innerHTML = "you win!";
        }
      else if (status == 2) {
          document.getElementById("msgLine").innerHTML = "sorry!";
      }
  }


  // shuffle cards and get 4 distinct numbers between 1 and 12
  function getGems() {

      var b = Math.floor((Math.random() * 12) + 1);
      var gums = [];
        gums.push(b);
      while (gums.length < 4) {

        b = Math.floor((Math.random() * 12) + 1);
        gums.push(b);

        for (var i = 0; i < gums.length - 1; i++) 
        {
          if (b == gums[i]) {gums.pop(); break;}
        }                           // duplicate number generated
      }

      return gums;
  }

});


