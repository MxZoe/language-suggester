//business logic

//UI logic
$(document).ready(function(){
  //function to make the next button show the next section and hide the previous
  $("#nextButton").click(function(event){
    let counter = 0;
    let tally = 0;
    let checkedValue =0;
    if(counter == 0){
      $("#questionOne").hide();
      $("#questionTwo").show();
      checkedValue = parseInt($("input[name='question1']:checked").val());
      tally += checkedValue;
      counter++;
    }
    else if(counter == 1){
      $("#questionTwo").hide();
      $("#questionThree").show();
      checkedValue = parseInt($("input[name='question2']:checked").val());
      tally += checkedValue;
      counter++;
    }
    else if(counter == 2){
      $("#questionThree").hide();
      $("#questionFour").show();
      checkedValue = parseInt($("input[name='question3']:checked").val());
      tally += checkedValue;
      counter++;
    }
    else if(counter == 3){
      $("#questionFour").hide();
      $("#nextButton").hide()
      $("#questionFive").show();
      $("#submitButton").show();
      checkedValue = parseInt($("input[name='question1']:checked").val());
      tally += checkedValue;
      counter = 1;
    }
    else{
      counter = 0;
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
  });

  //function to submit the form and return a language. Ranges for language selection are not even.
  $("form#formOne").submit(function(event){
    checkedValue = parseInt($("input[name='question1']:checked").val());
    tally += checkedValue;
    if(tally >= 5 && tally <= 10){
      $("#insertResult").text("Your language is Python!")
    }
    else if(tally >= 11 && tally <= 15){
      $("#insertResult").text("Your language is C#!")
    }
    else if(tally >= 16 && tally <= 20){
      $("#insertResult").text("Your language is Java!")
    }
    else{
      $("#insertResult").text("Your language is unknown. Sorry! Something went wrong.")
    }
    $("#submitButton").hide();
    $("#questionFive").hide()
    $("#result").show();
    $("#restartButton").show()
    event.preventDefault();
  });
});