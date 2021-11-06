//business logic

//UI logic
$(document).ready(function(){
  let counter = 1;
  let tally = 0;
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
    counter = 1;
    tally = 0;
    checkedValue = 0;
    $("#result").hide();
    $("#questionOne").show();
    $("#nextButton").show();
    $("submitButton").hide();
    $("#restartButton").hide();
    $("form#formOne").trigger("reset");

    event.preventDefault();
  });

  $("form#formOne").submit(function(event){
    checkedValue = parseInt($("input[name='question1']:checked").val());
    tally += checkedValue;
    if(tally >= 5 && tally <= 10 ){
      $("#insertResult").text("Your language is Python!")
    }
    else if(tally >= 11 && tally <= 15){
      $("#insertResult").text("Your language is C#!")
    }
    else if(tally >= 16 && tally <= 20){
      $("#insertResult").text("Your language is Java!")
    }
    else{
      $("#insertResult").text("Your language is unknown. Sorry! Something went wrong")
    }
    $("#submitButton").hide();
    $("#questionFive").hide();
    $("#restartButton").show();
    $("#result").show();
    event.preventDefault();
  });
});