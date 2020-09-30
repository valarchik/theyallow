var name = prompt("What is your name?");
console.log("Hello " + name);

var like = confirm("Do you like your name?");

if (like) {
    alert("Good")
} else {
    alert("Not good");
}

var pickword = function () {
    var words = [
    "коридор",
    "стаканы",
    "черепа"
];
   return words[Math.floor(Math.random() * words.length)];

};

var setupAnswer =function(word){
    var answerArray = [];
    for (var i = 0; i <word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};
var showProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

var getguess=function(){
    return prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
}

var updateState = function(guess,word,answerArray){


}

var remainingLetters = Word.length;
var attempts = 6;
// Игровой цикл
while (attempts > 0 && remainingLetters > 0) {
    // Показываем состояние игры


    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
        for (var j = 0; j < Word.length; j++) {
            if (Word[j] === guess.toLowerCase() && answerArray[j] !== guess.toLowerCase()) {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;
                attempts--;
            }
        }
    }
}
alert(answerArray.join(" "));

if (attempts === 0 && remainingLetters > 0) {
    alert("Попытки исчерпаны! Вы не угадали слово " + Word);
} else {
    alert("Отлично! Вы угадали слово " + Word);
}

