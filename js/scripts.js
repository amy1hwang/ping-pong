var pingPongFunction = function(input) {
  if (isNaN(input)) {
    alert("The input you have entered is not a number. Please enter a number.");
  } else if (input <= 0 ) {
    alert("The input you have entered is less than or equal to 0. Please enter a number bigger than 0.");
  } else {
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

// var element = ""
// for(var p = 0; p < pingPongNumbersArray.length; p++) {
//   element = pingPongNumbersArray[p];
// }
// console.log(element);

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

//each element in the array is printed on <li>
//("li").text(pingPongFunction(input))

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var outputList= $(".output-list");
    console.log(pingPongFunction(input));
    pingPongFunction(input).forEach(function(element) {
      $(".output-list").append("<li>" + element + "</li>");
    })
  });
});
