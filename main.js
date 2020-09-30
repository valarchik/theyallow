/*//LOGO

document.querySelector('.logo').onclick=function () {
 alert('Dont touch me mthfck!');
 console.log('fff');
}

//IMAGE

var myImage = document.querySelector('.img');

myImage.onclick = function() {
 var mySrc = myImage.getAttribute('src');
 if(mySrc.replace('\\', '/') === 'img/1.jpg') {
  myImage.setAttribute ('src','img/2.jpg');
 } else {
  myImage.setAttribute ('src','img/1.jpg');
 }
}

//FOOTER NAME

var myButton = document.querySelector('button');
var myHeading = document.querySelector('.h1-footer');

function setUserName() {
 var myName = prompt('Please enter your name.');
 localStorage.setItem('name', myName);
 myHeading.textContent = 'Hello, my dear ' + myName;
}
if(!localStorage.getItem('name')) {
 setUserName();
} else {
 var storedName = localStorage.getItem('name');
 myHeading.textContent = 'Hello, ' + storedName;
}
myButton.onclick = function() {
 setUserName();
}
var verb = ["люблю","обожаю","без ума от","каждый день думаю про"];
var partOfBody = ["нос","пупочек","попец","волосок на груди","мизинчик на ноге"];
var comparable = ["луч солнца средь хмурого неба.","запретное райское яблочко.","глоток воды в пустыне."];

var randomVerb = verb[Math.floor(Math.random() * verb.length)];
var randomPartOfBody = partOfBody[Math.floor(Math.random() * partOfBody.length)];
var randomComparable = comparable[Math.floor(Math.random() * comparable.length)];

var compliment = "Я "+ randomVerb + " тебя,потому что твой " + randomPartOfBody + " как " + randomComparable;
console.log(compliment);

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString ="";
while (randomString.length < 5){
 randomString += alphabet[Math.floor(Math.random()*alphabet.length)]
};
console.log(randomString);


var phrase = "My name is Lera";
var newPhrase = "";
for( i=0; i< phrase.length; i++){
 var letter = phrase[i];
 if (letter=="a"){
  newPhrase+=4}
 else if (letter == "i"){
  newPhrase += 1}
 else if (letter == "o"){
  newPhrase += 0}
 else if(letter == "e"){
  newPhrase += 3}
 else{
  newPhrase+=letter }};
console.log(newPhrase)*/
/*
var name = prompt("What is your name?");
console.log("Hello " + name);

var like = confirm("Do you like your name?");

if(like){
 alert("Good")
}else{
 alert("Not good")
}*/