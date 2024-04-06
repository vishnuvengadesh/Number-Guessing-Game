var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var text3 = document.querySelector("#text3");

var result = Math.floor(Math.random()*10) - 1;
var no_of_guesses = 0;
var guesses_num = [];

function play(){
      var user_guess = document.querySelector("#gues").value;
      if(user_guess < 1 || user_guess > 10){
            alert("Enter number between 1 to 10");
      }
      else{
            guesses_num.push(user_guess);
            no_of_guesses = no_of_guesses + 1;
            if(user_guess < result){
                  text1.textContent = "Your Guess Is Low";
                  text2.textContent = "Number Of Guesses : " + no_of_guesses;
                  text3.textContent = "Guessed Number Are : " + guesses_num;
            }
            else if(user_guess > result){
                  text1.textContent = "Your Guess Is Hig";
                  text2.textContent = "Your Guess Is Low : " + no_of_guesses;
                  text3.textContent = "Guessed Number Are : " + guesses_num;

            }
            else if(user_guess == result){
                  text1.textContent = "You Won";
                  text2.textContent = "The Number is : " + result;
                  text3.textContent = " You Guessed : " + no_of_guesses + "Guesses";

            }
      }
      
            
      }

