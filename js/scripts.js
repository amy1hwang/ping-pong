//Business Logic
var pingPongFunction = function(input) {
  if (isNaN(input) || input <= 0) {
    alert("The input you have entered is invalid. Please enter a number greater than 0.");
  } else {
    //sets an array that contains a range of number from 0 to input.
    parseInt(input);
    var numbersArray = [];
    for(var i = 1; i <= input; i++) {
      numbersArray.push(i);
    }
    //modifies the numbersArray to replace 3x to ping, 5x to pons, and 15x to ping-pong
    var pingPongNumbersArray = numbersArray.map(function(number) {
      return pingPongNumbers(number);
    });
  }
  return pingPongNumbersArray;
};

//replaces 3x = ping, 5x = pong, 15x = ping-pong
var pingPongNumbers = function(number) {
  if (number%3 === 0 && number%5 != 0) {
    return "ping";
  } else if (number%5 === 0 && number%3 != 0) {
    return "pong";
  } else if (number%3 === 0 && number%5 === 0) {
    return "ping-pong";
  } else {
    return number;
  }
}

//User Interface Logic
$(document).ready(function() {
  $(".panel-default>.panel-heading").click(function(event) {
    event.preventDefault();
    $(".panel-default>.panel-body").slideToggle();
  });
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var outputList = $(".output-list");
    //clears the previous result
    $(".output-list").html("");
    //lists the items inside pingPongNumbersArray
    pingPongFunction(input).forEach(function(item) {
      $(".output-list").append("<li>" + item + "</li>");
    });
    $(".output").slideDown();
  });
});
