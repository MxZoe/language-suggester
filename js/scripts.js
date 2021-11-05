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

});