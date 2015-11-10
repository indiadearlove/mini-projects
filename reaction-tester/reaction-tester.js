var createdTime;
var clickedTime;
var reactionTime;

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function noDisplay() {
  document.getElementById("square").style.display="none";
}

function display() {

  var top=Math.random();
  var left=Math.random();
  top=top*300;
  left=left*300;
  
  document.getElementById("square").style.top=top + "px";
  document.getElementById("square").style.left=left + "px";

  document.getElementById("square").style.backgroundColor=getRandomColor();

  if (Math.random()> 0.5) {
    document.getElementById("square").style.borderRadius="150px";
  }
  else {
    document.getElementById("square").style.borderRadius="0px";
  }
  
  document.getElementById("square").style.display="block";
}

function makeSquare() {

  setTimeout(function() {

    display();
    createdTime=Date.now();
  
  }, (Math.random())*5000);
  
}

document.getElementById("square").onclick=function() {
  clickedTime=Date.now();

  reactionTime=(clickedTime - createdTime)/1000;
    
  noDisplay();

  document.getElementById('time').innerHTML=reactionTime;

  makeSquare();

}

makeSquare();

