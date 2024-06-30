import React from 'react'

function Result({secretNum, term}) {

    let result;

    if(term){
        if (term > secretNum){
            result = "Lower"
        }else if(term < secretNum){
            result = "Higher"
        }else if(term == secretNum){
            result = "Congratulations, You found it"
        }else{
            result = "Enter a number from 1 to 10 idiot"
        }
    }

  return <h3>You Guessed: {result}</h3>
  
}

export default Result