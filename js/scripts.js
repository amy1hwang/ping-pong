var pingPongFunction = function(input) {
  if (isNaN(input) || input <= 0) {
    alert("The input you have entered is invalid. Please enter a number greater than 0.");
  } else {
    parseInt(input);
    var numbersArray = [];
    for(var i = 1; i <= input; i++) {
      numbersArray.push(i);
    }
  }
  var pingPongNumbersArray = numbersArray.map(function(number) {
    return pingPongNumbers(number);
  });
  return pingPongNumbersArray;
};

//replace 3x = ping, 5x = pong, 15x = ping-pong
var pingPongNumbers = function(number) {
  if (number%3 === 0 && number%5 != 0) {
    return "ping";
  } else if (number%5 === 0 && number%3 != 0) {
    return "pong"
  } else if (number%3 === 0 && number%5 === 0) {
    return "ping-pong"
  } else {
    return number;
  }
}

//i want the new result to come out but not append on the last result.

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var outputList = $(".output-list");
    $(".output-list").html("");
    pingPongFunction(input).forEach(function(item) {
      $(".output-list").append("<li>" + item + "</li>");
    });
  });
});
