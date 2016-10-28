var pingpongFunction = function(input) {
  //If input is not a number, return an error message.
  if (isNaN(input )) {
    alert("The input you have submit is not a number. Please enter a number.")
  } else {
    //array of numbers from 1 to input
    var numberRange = []
    for(var i = 1; i <= input; i++) {
      numberRange.push(i);
    }
    //replace 3x = ping, 5x = pong, 15x = pingpong
    var pingPongNumberRange = numberRange.map(function(number) {
      if (number%3 === 0 && number%5 != 0) {
        return "ping";
      } else if (number%5 === 0 && number%3 != 0) {
        return "pong"
      } else if (number%3 === 0 && number%5 === 0) {
        return "ping-pong"
      } else {
        return number;
      }
    });
    console.log(pingPongNumberRange);
  };
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    pingpongFunction(input);
  })
})
