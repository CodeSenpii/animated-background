//jshint  esversion:6

var d = document.querySelectorAll('.box-area li');
var c = document.querySelectorAll('#chn1').classList;
var score = document.querySelectorAll('li span');
var emoj = document.querySelectorAll('.emoji-icon li');
var mainScore = document.querySelector('#wild-card span');
var count = Number(document.querySelector('p').innerText);

// var wild = document.querySelector('#wild-card').firstChild.textContent;



// const emojis = ['🙈', '⚽', '🎌', '💦', '🦊', '🦮', '🎃', '❤️','🌻'];
const emojis = ['🃏','🃏','🃏','🃏','🃏','🃏','🃏','🃏','🃏'];
const size = [50, 59, 59, 69, 90, 120, 80];
const pos = [10, 20, 30, 35, 45, 55, 76, 80, 90];
const duration = [2, 3, 1.5, 2, 2, 2 , 5, 2, 3];


function bubble() {

  var e = emojis[Math.floor(Math.random() * 9)];
  var s = size[Math.floor(Math.random() * 7)];
  var p = pos[Math.floor(Math.random() * 9)];
  var du = duration[Math.floor(Math.random() * 9)];

  var c7 = document.querySelector('#chn7');
  document.querySelector('#wild-card').firstChild.textContent = e +" ";

  c7.textContent = e;
  c7.style.height = s + 'px';
  c7.style.width = s + 'px';
  c7.style.left = p + '%';
  c7.style.animationDuration = du + 's';

  // console.log(c7);
}// end bubble

// console.log(emoj[0].firstChild.textContent === "🤪 ");
var counter;
var timer;
var audio1 = new Audio("a1.wav");
var audio2 = new Audio("a2.wav");
var audio3 = new Audio("a3.wav");
var audio4 = new Audio("a1.wav");
var audio5 = new Audio("a2.wav");
var audio6 = new Audio("a3.wav");
var laugh = new Audio("laugh.wav");
var gameOver = new Audio("over.wav");
var haha = new Audio("haha.wav");
var clown = [new Audio("clown1.wav"), new Audio("clown2.mp3")];
// var bubbling_bg = new Audio("bubbling.wav");

// var counter = setInterval(myTimer, 1000);

function myTimer(){
  // var d = new Date();
  // var t = d.toLocaleTimeString();
  if(count === 11){
    document.querySelector('p').style.color = 'red';
  }
  if(count === 1){
    clearInterval(counter);
    console.log('STOP');

  }
  count = count - 1;
  document.querySelector('p').innerText = count;

  if(count === 0){
    document.querySelector('p').innerText = 'GAME OVER';
    gameOver.play();
    offBubble();
  }
}

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
  setTimeout(()=> {
    haha.play();}, 500);
  // d[0].style.display = "flex";
  // console.log(d[0].textContent);
  // var icon = d[0].textContent;
  mainScore.innerText = Number(mainScore.innerText)  - 1;
  var v = Number(score[0].innerText);
  v = v + 1;
  score[0].innerText = v;
  reset(0);

};

d[1].onclick = function() {
  audio2.play();
  console.log(this.textContent);
  setTimeout(()=> {
    haha.play();}, 500);
  // d[0].style.visibility = "initial";
  d[1].style.display = "none";
  mainScore.innerText = Number(mainScore.innerText)  - 1;
  var v = Number(score[1].innerText);
  v = v + 1;
  score[1].innerText = v;
  reset(1);


};
d[2].onclick = function() {
  audio3.play();
  d[2].style.display = "none";
  setTimeout(()=> {
    haha.play();}, 500);
  mainScore.innerText = Number(mainScore.innerText)  - 1;
  var v = Number(score[2].innerText);
  v = v + 1;
  score[2].innerText = v;
  reset(2);

};
d[3].onclick = function() {
  audio4.play();
  d[3].style.display = "none";
  setTimeout(()=> {
    haha.play();}, 500);
  mainScore.innerText = Number(mainScore.innerText)  - 1;
  var v = Number(score[3].innerText);
  v = v + 1;
  score[3].innerText = v;
  reset(3);

};

d[4].onclick = function() {
  audio5.play();
  d[4].style.display = "none";
  setTimeout(()=> {
    haha.play();}, 500);
  mainScore.innerText = Number(mainScore.innerText)  - 1;
  var v = Number(score[4].innerText);
  v = v + 1;
  score[4].innerText = v;
  reset(4);

};
d[5].onclick = function() {
  audio6.play();
  d[5].style.display = "none";
  setTimeout(()=> {
    haha.play();}, 500);
  mainScore.innerText = Number(mainScore.innerText)  - 1;
  var v = Number(score[5].innerText);
  v = v + 1;
  score[5].innerText = v;
  reset(5);

};

d[6].onclick = function() {
  audio1.play();
  d[6].style.display = "none";
  var select = Math.floor((Math.random() * 2));
  setTimeout(()=>{
    clown[select].play();
  }, 400);
  var v = Number(mainScore.innerText);
  v = v + 1;
  mainScore.innerText = v;

  bubble();
  reset(6);
};

d[7].onclick = function() {
  laugh.play();
  d[7].style.display = "none";
  onBubble();
  counter = setInterval(myTimer, 1000);
};
