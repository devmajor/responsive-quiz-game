  
let score = 0;
let counter = document.querySelector('.score');
const qbox = document.querySelectorAll('.question-section div');
const q1 = document.querySelector('.question-1');
const q2 = document.querySelector('.question-2');
const q3 = document.querySelector('.question-3');
const q4 = document.querySelector('.question-4');
const q5 = document.querySelector('.question-5');
    
function questionOne(index) {
    
    // Question and Options array
    const questions = [
        {
            "question1": "What is HTML",
            "options": {
                "a": "Hypertext Tranfer Protocol",
                "b": "Hypertext Transmission Protocol",
                "c": "Hypertext Technical Protocal"
            },
            "answer": "Hypertext Tranfer Protocol"
        }
    ];
    
    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];
    
    // give correct background and text color based on answer
    
    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q1.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q1.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }
      
}

function questionTwo(index) {
    
    // Question and Options array
    const questions = [
        {
            "question2": "What is the plural form of Stadium?",
            "options": {
                "a": "Stadiums",
                "b": "Stadius",
                "c": "Stadia"
            },
            "answer": "Stadia"
        }
    ];
    
    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];
    
    // give correct background and text color based on answer
    
    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q2.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q2.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }
      
} 

function questionThree(index) {
    
    // Question and Options array
    const questions = [
        {
            "question3": "Which is correct?",
            "options": {
                "a": "An img tag has a closing tag",
                "b": "An img tag is a self closing tag",
                "c": "An img tag does not have a tag"
            },
            "answer": "An img tag is a self closing tag"
        }
    ];
    
    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];
    
    // give correct background and text color based on answer
    
    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q3.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q3.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }
      
} 

function questionFour(index) {
    
    // Question and Options array
    const questions = [
        {
            "question4": "Which of the following is the correct way to start a formal letter?",
            "options": {
                "a": "To whom it may concern",
                "b": "Dear Sir/Madam",
                "c": "Hi Baby"
            },
            "answer": "Dear Sir/Madam"
        }
    ];
    
    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];
    
    // give correct background and text color based on answer
    
    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q4.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q4.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }
      
} 

function questionFive(index) {
    
    // Question and Options array
    const questions = [
        {
            "question5": "What HTML attribute prevents a form from submitting an empty field(s)?",
            "options": {
                "a": "prevent",
                "b": "restrict",
                "c": "required"
            },
            "answer": "required"
        }
    ];
    
    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];
    
    // give correct background and text color based on answer
    
    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q5.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q5.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }
      
} 
// Questions animation

const questionContainer = document.querySelector('.all-questions');
const uls = document.querySelectorAll('.all-questions div');

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.previousBtn');
let ulCounter = 0;
const size = uls[0].clientWidth;

questionContainer.style.transform = 'translateX(' + (-size * ulCounter) + 'px)';
nextBtn.addEventListener('click', () => {
    questionContainer.style.transition = 'transform 0.4s ease-in-out';
    ulCounter++;
    questionContainer.style.transform = 'translateX(' + (-size * ulCounter) + 'px)';
    
        if (ulCounter == uls.length && uls.length == uls.length + 1) {
            alert("This is the end");
        } 
});



// When clicked, goes to the previous question
prevBtn.addEventListener('click', () => {
    questionContainer.style.transition = 'transform 0.4s ease-in-out';
    ulCounter--;
    questionContainer.style.transform = 'translateX(' + (-size * ulCounter) + 'px)';
    
        
});



    // Start Quiz Animation
    const startBtn = document.querySelector(".start-quiz-btn");
    const introBox = document.querySelector(".intro-box");
    const questionSection = document.querySelector('.question-section');
    const navigationBox = document.querySelector('.navigationBtn');
    const scoreBox = document.querySelector('.scorebox');

    questionContainer.style.display = 'none';
    navigationBox.style.display = 'none';
    scoreBox.style.display = 'none';

    startBtn.addEventListener('click', function () {
        introBox.classList.add('removeIntroBox') ? startBtn.innerHTML = "End Quiz" : startBtn.innerHTML = "Start Quiz";
        questionSection.classList.add('question-section');
        
        questionContainer.style.display = 'block';
        navigationBox.style.display = 'block';
    });



