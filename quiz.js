//THE FOLLOWING CODE REPRESENT IS LINK WITH MY "quiz.html"
//THIS CODE MAKE A FEW QUESTIONS AN KEEP THE VALUE IN AN ARRAY AN OBJECT
//AND GIVE US THE SUM OF CORRECT OR WRONG ANSWER.

var user = {}
var responses = []

function nameQuestion() {
  var name = prompt('What is your name?')
  user.name = name;//we keep the answer in our object
}

function question1() {

  var firstQuestion = prompt('Does Krillin die more than once in the Dragon Ball series? (Yes or No)')

  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true;
  }

  else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false;
  }

  else {
    alert("Please answer either Yes or No");
    return question1();
  }

  responses.push(firstQuestion);//we keep the answer in our array
}

function question2() {
	var secondQuestion = prompt('How many times has Goku won the World Martial Arts Tournament? (One, Two or Four)');
	secondQuestion = secondQuestion.toLowerCase();
	
	switch (secondQuestion) {
	  	case 'one':
	        secondQuestion = true;
	        break;
	   	case 'two':
	        secondQuestion = false;
	        break;
	  	case 'four':
	    	secondQuestion = false;
	    	break;
	  	default:
	        alert("Please write one of the provided answers!");
	        return question2();
	    }

  responses.push(secondQuestion);//we keep the answer in our array
}


function question3() {
	var thirdQuestion = prompt('Which is the highest Saiyan level they reach in Dragon Ball Z? (Two, Three or Four)');
	thirdQuestion = thirdQuestion.toLowerCase();
  	
  	switch (thirdQuestion) {
  	case 'two':
        thirdQuestion = false;
        break;
   	case 'three':
        thirdQuestion = true;
        break;
  	case 'four':
    	thirdQuestion = false;
    	break;
  	default:
        alert("Please write one of the provided answers!");
        return question2();
  }

  responses.push(thirdQuestion);//we keep the answer in our array
}


function question4() {

  var fourthQuestion = prompt('Is Gohan the one who raised Goku when he was a child? (Yes or No)')

  if (fourthQuestion.toLowerCase() === 'yes') {
    fourthQuestion = true
  }

  else if (fourthQuestion.toLowerCase() === 'no') {
    fourthQuestion = false
  }

  else {
    alert("Please answer either Yes or No!");
    return question4();
  }

  responses.push(fourthQuestion);
}

function evaluate(responsesArray) {
	totalTrue = 0;
	totalFalse = 0;

	for (var i = 0; i < responsesArray.length; i++) {
		if (responsesArray[i] == true) {
			totalTrue += 1;//we sum correct answer
		}

		else {
			totalFalse += 1;//we sum wrong answer
		}
	}

	user.correct = totalTrue;//we push the correct answer in our object
	user.failed = totalFalse;//we push the wrong answer in our object

	showResults();
}

function showResults() {
	alert('Hi ' + user.name + '! You have ' + user.correct + ' correct answers and ' + user.failed + ' incorrect answers.' );
}//we create an alert calling our object to get the user name/ correct answer/ wrong answer
//we call our functions to get our code working
nameQuestion();

question1();

question2();

question3();

question4();

evaluate(responses);