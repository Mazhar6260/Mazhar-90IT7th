function fizzbuzz(n) {
   
  /*
  Takes an integer n and return

  - 'fizz' if its divisible by 3
  - 'buzz' if its divisible by 5
  - 'fizzbuzz' if its divisible by 3 and 5

  if none of above conditions holds return '';

  For 9 it will return "fizz"
  For 10 it will return "buzz"
  For 15 it will return "fizzbuzz"
  */

  // WRITE YOUR CODE HERE
  "use strict";
  if (n / 3 === 0)    
      {
        return "fizz";

      }
  else if(n / 5 === 0) 
  {
    return "buzz";      
  }
  else if (n / 3 === 0 && n / 5 === 0) {
    return "fizzbuzz";
      
  }
  else {
    return "";
  }

}

function isFlaskEmpty(flask) {
  /*
  Takes a Flask (represented as Array of colors) and returns
  if flask is empty i.e. there is no color inside that
  */

  // WRITE YOUR CODE HERE

  if (flask === undefined || flask.length === 0)
  {
    return true;
  }
}

function isFlaskFilled(flask) {
  /*
  Takes a Flask (represented as Array of colors) and returns
  if flask is filled i.e. it holds 4 colors
  */
  
  // WRITE YOUR CODE HERE
  if (flask.length === 4) {
    return true;
  }
  else {
    return false;
  }
}

function getTopColor(flask) {
  /*
  Takes a Flask (represented as Array of Color (string) and returns
  color that is at top. If flask is empty return null

  Hint: You can get length of flask by using `.length` i.e. `flask.length`
  */

  // WRITE YOUR CODE HERE
  if (flask.length === 0 || flask == undefined) {
    return null;
  } else {
    return flask[0];
  }
}

function getTopColorOccurances(flask) {
  /*
  Takes a Flask (represented as Array of colors) and returns
  number of occurances of top color. Return 0 if flask is empty

  Hint: You have to loop over flask and count until color isn't what
  is top color. Something like this:

  topColor = <top-flask-color>
  counter = 0
  reverse loop over each color in flask (i.e. last element will come first):
    if topColor == color:
      counter += 1
    else:
      break

  return counter
  */

  // WRITE YOUR CODE HERE
   for (var i = 0; i < flask.length; i++)
        {
        topColor_ = getTopColor();
        counter = 0;
        if ( flask [i] == topColor_)
            {
                counter =counter + 1;
            }
        else
            {
                break
            }
          }

  return counter;

}

function isFlaskContainSameColor(flask) {
  /*
  Takes a Flask (represented as Array of colors) and returns
  if all the colors in flask are same. Return false if flask is empty
  */

  // WRITE YOUR CODE HERE
  if (flask.allValuesSame()) {
    return true;
  }
  else {
    return false;
  }
}

function isFlaskFilledWithSameColor(flask) {
  /*
  Takes a Flask (represented as Array of colors) and returns
  if
    - all the colors in flask are same
    - length of flask is 4

  Hint: Use isFlaskContainSameColor and check length is 4
  */

  // WRITE YOUR CODE HERE

  if (isFlaskContainSameColor() && isFlaskFilled()) {
    return true;
  }
  else {
    return false;
  }
}

function canPour(flaskA, flaskB) {
  /*
  Takes two flasks (represented as Array of colors) i.e., flaskA and flaskB
  and return true if following rules hold:

  - Flask A is not empty
  - Flask B is not filled
  - Either Flask B is empty or top color on both flasks is same

  Hint: Use above helper functions
  */

  // WRITE YOUR CODE HERE

if (isFlaskEmpty(flaskA)) {
    return true;
  }
else if (!isFlaskFilled(flaskB))
{
   return true;
}
else if (isFlaskFilled(flaskB) || getTopColor(flaskA) === getTopColor(flaskB)) {
   return true;
 }
else {
    return false;
  }



}

/* DO NOT EDIT ANYTHING BELOW THIS LINE */
module.exports = {
  fizzbuzz,
  isFlaskEmpty,
  isFlaskFilled,
  getTopColor,
  getTopColorOccurances,
  isFlaskContainSameColor,
  isFlaskFilledWithSameColor,
  canPour,
};
