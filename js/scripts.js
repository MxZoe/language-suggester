//business logic
let counter = 1;
let tally = 0;
//UI logic
$(document).ready(function(){
  $("#nextButton").click(function(event){
    let checkedValue =0;
    if(counter == 1){
      $("#questionOne").hide();
      $("#questionTwo").show();
      checkedValue = parseInt($("input[name='question1']:checked").val());
      tally += checkedValue;
      counter++;
    }
    else if(counter == 2){
      $("#questionTwo").hide();
      $("#questionThree").show();
      checkedValue = parseInt($("input[name='question2']:checked").val());
      tally += checkedValue;
      counter++;
    }
    else if(counter == 3){
      $("#questionThree").hide();
      $("#questionFour").show();
      checkedValue = parseInt($("input[name='question3']:checked").val());
      tally += checkedValue;
      counter++;
    }
    else if(counter == 4){
      $("#questionFour").hide();
      $("#nextButton").hide()
      $("#questionFive").show();
      $("#submitButton").show();
      checkedValue = parseInt($("input[name='question1']:checked").val());
      tally += checkedValue;
      counter = 1;
    }
    else{
      counter = 1;
    }
    event.preventDefault();
  });
  $("#restartButton").click(function(event){
    $("#result").hide();
    $("#questionOne").show();
    $("#nextButton").show();
    $("submitButton").hide();
    $("#restartButton").hide();
    counter = 0;
    tally = 0;
    event.preventDefault();
  });

  $("form#formOne").submit(function(event){
    checkedValue = parseInt($("input[name='question1']:checked").val());
    tally += checkedValue;
    if(tally <= 5){
      $("#insertResult").append("Your language is Python!")
    }
    else if(tally > 5 && tally <= 10){
      $("#insertResult").append("Your language is C#!")
    }
    else if(tally > 11 && tally <= 15){
      $("#insertResult").append("Your language is Java!")
    }
    else if(tally > 15 && tally <=20){
      $("#insertResult").append("Your language is Javascript!")
    }
    else{
      $("#insertResult").append("Your language is unknown. Sorry! Something went wrong")
    }
    $("#submitButton").hide();
    $("#questionFive").hide();
    $("#restartButton").show();
    $("#result").show();
    event.preventDefault();
  });
});