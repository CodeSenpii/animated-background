var d = document.querySelectorAll('.animation-area li');
var c = document.querySelectorAll('#chn1').classList;

var timer;
var audio1 = new Audio("a1.wav");
var audio2 = new Audio("a2.wav");
var audio3 = new Audio("a3.wav");
var audio4 = new Audio("a1.wav");
var audio5 = new Audio("a2.wav");
var audio6 = new Audio("a3.wav");

function reset(index){
timer =   setTimeout(function(){
  d[index].style.display = "flex";
}, 1000);}


// console.log(bubble);

// console.log(d[0].innerHTML);
// console.log(d);


d[0].onclick = function(){
  audio1.play();
  d[0].style.display = "none";
  // d[0].style.display = "flex";
  reset(0);
};

d[1].onclick = function(){
  audio2.play();
  console.log(this.textContent);
  // d[0].style.visibility = "initial";
  d[1].style.display = "none";
  reset(1);

};
d[2].onclick = function(){
  audio3.play();
  d[2].style.display = "none";
  reset(2);
};
d[3].onclick = function(){
  audio4.play();
  d[3].style.display = "none";
  reset(3);
};

d[4].onclick = function(){
  audio5.play();
  d[4].style.display = "none";
  reset(4);
};
d[5].onclick = function(){
  audio6.play();
  d[5].style.display = "none";
  reset(5);
};
