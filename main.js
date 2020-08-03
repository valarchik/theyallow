//LOGO

document.querySelector('.logo').onclick=function () {
 alert('Dont touch me mthfck!');
 console.log('fff');
}

//IMAGE

var myImage = document.querySelector('.img');

myImage.onclick = function() {
 var mySrc = myImage.getAttribute('src');
 if(mySrc === 'img/1.jpg') {
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
 myHeading.textContent = 'Hell, ' + myName;
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