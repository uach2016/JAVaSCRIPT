/* We are sending a rover to Mars and we need to program its movements so that we can send it commands from Earth.
The rover is on a 10 x 10 grid The rover will have starting x,y coordinates (ie. 0,0) and the direction it is facing (N,E,S,W) 
place some obstacles*/

var Rover = {
  position: [0,0], 
  direction: 'N'
}
var rover_orientation = 0;//0=north, 1= east, 2=south, 3=west
var question = prompt("where do you want to go? F, B, L, R");// F=forward, B= back, L= left, R= right
var question = question.toUpperCase(); 

function change_position(){
  switch(Rover.direction) {
    case 'N':{
    if(Rover.position[0]<=10)
      Rover.position[0]++
      else {
        console.log("invalid position");
      }
    }
      break;
     case 'E':{
    if(Rover.position[1]<=10)
      Rover.position[1]++
      else {
        console.log("invalid position");
      }
    }
      break;
     case 'S':{
    if(Rover.position[0]>0)
      Rover.position[0]--
      else {
        console.log("invalid position");
      }
    }
      break;
    case 'W':{
    if(Rover.position[1]>0)
      Rover.position[1]--
      else {
        console.log("invalid position");
      }
    }
      break;
         
  };
}

function goForward() {
 
if(rover_orientation == 0){
    Rover.direction='N';
    console.log(rover_orientation);
    change_position();
      }
      else if (rover_orientation == 1) {
        Rover.direction='E';
          console.log(rover_orientation);
          change_position()
      }
      else if (rover_orientation == 2) {
        Rover.direction='S';
          console.log(rover_orientation);
          change_position()
      }
      else if (rover_orientation == 3) {
        Rover.direction='W';
          console.log(rover_orientation);
          change_position()
      }
}
function goBack() {
  if(rover_orientation == 0){
    Rover.direction='S';
    console.log(rover_orientation);
    change_position();
      }
    else if (rover_orientation == 1) {
        Rover.direction='W';
          console.log(rover_orientation);
          change_position()
      }
    else if (rover_orientation == 2) {
        Rover.direction='N';
          console.log(rover_orientation);
          change_position()
      }
    else if (rover_orientation == 3) {
        Rover.direction='E';
          console.log(rover_orientation);
          change_position()
      }
}
    function  goLeft(){
      if (rover_orientation == 0) {
        rover_orientation == 3;
      }
      else {
      --rover_orientation;
      }
}


    function  goRight(){
      if(rover_orientation == 3)
      rover_orientation =0;
      else {
      ++rover_orientation;
      }
}

function go(){
  for (var i = 0; i < question.length; i++){
    console.log(question.charAt(i))
    Rover.direction=question.charAt(i);
    switch (Rover.direction)
    {
    case 'F':
      goForward()
      break;
      case 'B':
        goBack()
      break;
      case 'L':
        goLeft()
      break;
      case 'R':
        goRight()
    break; 

    }
  }
}
function obstacle(){
for (var i = 0; i < question.length; i++){
  if ((Rover.position[0]===2)&&(Rover.position[1]===1)){
    console.log("you are in an obstacle, please change direction " +  question, " and start again and choose diferent way");

  }
  else if ((Rover.position[0]===4)&&(Rover.position[1]===2)){
    console.log("you are in an obstacle, please change direction " +  question, " and start again and choose diferent way");
  }
}
}
go();
obstacle();
console.log("New Rover Position: [" + Rover.position[0] + ", " + Rover.position[1] + "]");

 

 