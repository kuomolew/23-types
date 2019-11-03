//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

console.log('Test');

(function () {
    var totalScore = 0;
    var Question = function(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    };

    var questionOne = new Question('2 + 2  = ?', ['4', '"4"', '22'], 1);
    var questionTwo = new Question('"2" + 2 = ?', ['4', '"4"', '"22"'], 3);
    var questionThree = new Question('"2+2" = ?', ['4', '"4"', 'канал такой есть'], 3);

    var questions = [questionOne, questionTwo, questionThree];

    Question.prototype.askQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i+1 + ': ' + this.answer[i]);
        }
    }

    Question.prototype.isCorrect = function(ans) {
        //console.log(ans);
        Number(ans) ? ans = Number(ans) : ans = -1;
        if (ans == this.correct) {
            totalScore +=2;
            console.log('Congratulations! This answer was correct.');
        } else {
            console.log('Oops, this answer was incorrect.');
        }

    }

    var run = function () {
        for (let i = 0; i < 3; i++) {
            questions[i].askQuestion();
            var answer = prompt('Please type the number of correct answer');
            questions[i].isCorrect(answer);
        }
        console.log('Total score = ' + totalScore);         
    }

    run();
    
})();