//jshint  esversion:6

var d = document.querySelectorAll('.box-area li');
var c = document.querySelectorAll('#chn1').classList;
var score = document.querySelectorAll('li span');
var emoj = document.querySelectorAll('.emoji-icon li');
var count = 0;

const emojis = ['🙈', '⚽', '🎌', '💦', '🦊', '🦮', '🎃'];
const size = [40, 49, 59, 69, 90, 120, 130];
const pos = [10, 20, 30, 35, 45, 55, 76, 80, 90];
const duration = [2, 3, 5, 3, 5, 2, 15, 3, 19];


function bubble() {

  var e = emojis[Math.floor(Math.random() * 7)];
  var s = size[Math.floor(Math.random() * 7)];
  var p = pos[Math.floor(Math.random() * 9)];
  var du = duration[Math.floor(Math.random() * 9)];

  var c7 = document.querySelector('#chn7');
  c7.textContent = e;
  c7.style.height = s + 'px';
  c7.style.width = s + 'px';
  c7.style.left = p + '%';
  c7.style.animationDuration = du + 's';
  // console.log(c7);
}


console.log(emoj[0].firstChild.textContent === "🤪 ");

var timer;
var audio1 = new Audio("a1.wav");
var audio2 = new Audio("a2.wav");
var audio3 = new Audio("a3.wav");
var audio4 = new Audio("a1.wav");
var audio5 = new Audio("a2.wav");
var audio6 = new Audio("a3.wav");
var bubbling_bg = new Audio("bubbling.wav");

function reset(index) {
  timer = setTimeout(function() {
    d[index].style.display = "flex";
  }, 1000);
}

function offBubble() {
  for (var x = 0; x < 7; x++) {
    d[x].style.display = "none";
  }
}

function onBubble(){
  for (var x = 0; x < 7; x++) {
    d[x].style.display = "flex";
  }
}
offBubble();
// console.log(bubble);

// console.log(d[0].innerHTML);
// console.log(d);


d[0].onclick = function() {
  audio1.play();
  d[0].style.display = "none";
  // d[0].style.display = "flex";
  // console.log(d[0].textContent);
  // var icon = d[0].textContent;
  var v = Number(score[0].innerText);
  v = v + 1;
  score[0].innerText = v;


  reset(0);

};

d[1].onclick = function() {
  audio2.play();
  console.log(this.textContent);
  // d[0].style.visibility = "initial";
  d[1].style.display = "none";
  var v = Number(score[1].innerText);
  v = v + 1;
  score[1].innerText = v;
  reset(1);


};
d[2].onclick = function() {
  audio3.play();
  d[2].style.display = "none";
  var v = Number(score[2].innerText);
  v = v + 1;
  score[2].innerText = v;
  reset(2);

};
d[3].onclick = function() {
  audio4.play();
  d[3].style.display = "none";
  var v = Number(score[3].innerText);
  v = v + 1;
  score[3].innerText = v;
  reset(3);

};

d[4].onclick = function() {
  audio5.play();
  d[4].style.display = "none";
  var v = Number(score[4].innerText);
  v = v + 1;
  score[4].innerText = v;
  reset(4);

};
d[5].onclick = function() {
  audio6.play();
  d[5].style.display = "none";
  var v = Number(score[5].innerText);
  v = v + 1;
  score[5].innerText = v;
  reset(5);

};

d[6].onclick = function() {
  audio1.play();
  d[6].style.display = "none";
  // var v = Number(score[6].innerText);
  // v = v + 1;
  // score[6].innerText = v;
  bubble();
  reset(6);
};

d[7].onclick = function() {
  audio3.play();

  d[7].style.display = "none";
  onBubble();
};
