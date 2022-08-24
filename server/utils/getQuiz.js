// get 10 random quizzes
const {readFileSync} = require('fs');

let loadQuiz = () => {
    let quizzes = JSON.parse(readFileSync('./data/questions.json'));
    const objVal = Object.values(quizzes);
    const allVal = objVal[parseInt(Math.random() * objVal.length)];
    //console.log(random[8]);

    var arr = [];
    while(arr.length < 10) {
        var r = Math.floor(Math.random() * allVal.length) + 1;
        if(arr.indexOf(r) === -1) {
            arr.push(allVal[r]);
        }
    }
    console.log(arr);
    console.log(arr.length);
    return arr;
}

module.exports = {loadQuiz};