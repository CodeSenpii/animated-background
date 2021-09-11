var d = document.querySelectorAll('.animation-area li');
var audio1 = new Audio("audio1.wav");
var audio2 = new Audio("audio2.wav");
var audio3 = new Audio("audio3.wav");
var audio4 = new Audio("audio4.wav");
var audio5 = new Audio("audio5.wav");
var audio6 = new Audio("audio6.wav");

// console.log(d[0].innerHTML);
console.log(d[0].id);

d[0].onclick = function(){
  audio1.play();
};

d[1].onclick = function(){
  audio2.play();
};
d[2].onclick = function(){
  audio3.play();
};
d[3].onclick = function(){
  audio4.play();
};

d[4].onclick = function(){
  audio5.play();
};
d[5].onclick = function(){
  audio6.play();
};
