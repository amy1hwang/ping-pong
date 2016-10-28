# Ping-Pong
## by Amy Hwang

# description of program
This webpage takes a number from a user and returns a range of numbers from 1 to the user input except for the follow exceptions:
  * Numbers divisible by 3 are replaced with "ping"
  * Numbers divisible by 5 are replaced with "pong"
  * Numbers divisible by 15 are replaced with "ping-pong"

# program setup instructions
* Clone this repository.
* Open index.html, CSS stylesheets, scripts.js.
* Then open the webpage via a browser of your choice.

# specifications
* input is not a number
  * input: "Hi!"
  * output: "The input you have entered is invalid. Please enter a number greater than 0."
* input is less than or equal to 0
  *input: 0, -10
  * output: "The input you have entered is invalid. Please enter a number greater than 0."
* number is not divisible by 3 or 5
  * input: 2
  * output: [1, 2]
* number is divisible by 3 but not 5
  * input: 9
  * output: [1, 2, "ping", 4, 5, 6, 7, 8, "ping"]
* number is divisible by 5 but not 3
  * input: 10
  * output: [1, 2, "ping", 4, "pong", 6, 7, 8, "ping", "pong"]
* number is divisible by 15
  * input: 15
  * output: [1, 2, "ping", 4, "pong", 6, 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"]

# link to site on GitHub Pages
https://amy1hwang.github.io/pingpong

# copyright and license information
Copyright (c) 2016 Amy Hwang. This software is licensed under the Github license.
