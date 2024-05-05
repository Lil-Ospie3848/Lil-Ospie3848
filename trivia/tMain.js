const que = document.getElementById("question");
const ans = document.getElementsByClassName("a");
const league = document.getElementById("league");
let qn = document.getElementById("questionnumber");
let qNum = 1;


const randomLeagueIndex = Math.floor(Math.random() * leaguesQ.length);
const randomLeague = leaguesQ[randomLeagueIndex]
league.textContent = randomLeague;
const randomTeamIndex = Math.floor(Math.random() * teamsQ.length);
const randomTeam = teamsQ[randomTeamIndex]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const a = document.querySelectorAll(".a");
function clicked() {
    a.forEach(element => {
        element.addEventListener('click', function() {
            a.forEach(el => {
                el.classList.remove('c3');
            });
            element.classList.add('c3');
        });
    });
}

function setQuestion(question, questionText, answersArray) {
    a.forEach(el => {
        el.classList.remove('c3');
        el.classList.add('c2');
    });
    console.log("Setting " + question);
    que.textContent = questionText;
    let randomAnswers = answersArray.slice();
    shuffle(randomAnswers);
    for (let i = 0; i < ans.length; i++) {
        ans[i].textContent = randomAnswers[i];
    }
}
const questions = [
    {question: "Where are the " + randomTeam + " from?", answers: teamsA },
    {question: "How many play for one team at a time in the " + league.textContent + "?", answers: offDefA },
    {question: "How do they score?", answers: scoreA },
    {question: "How much does it score?", answers: scoresA },
    {question: "What type of equipment is used?", answers: equipA },
    {question: "Does the " + league.textContent + " have divisions?", answers: divisionsA },
    {question: "How does the time work?", answers: timeA },
    {question: "Length of time", answers: lengthA },
    {question: "What do they play on?", answers: surfaceA }
]

document.getElementById("start").addEventListener("click", function() {
    qn.textContent = "Question 1";
    clicked();
    document.getElementById("start").classList.add("nd");
    document.getElementById("questionaire").classList.remove("nd");
    setQuestion("Question 1", "What does " + league.textContent + " stand for?", leaguesA);
});

document.getElementById("next").addEventListener("click", function() {
    if (qNum < 10) {
        qNum++;
        qn.textContent = "Question " + qNum;
        if (qNum >= 2 && qNum <= 10) {
            setQuestion("Question" + qNum, questions[qNum - 2].question, questions[qNum - 2].answers);
        }
    } else {
        document.getElementById("start").classList.remove("nd");
        document.getElementById("questionaire").classList.add("nd");
        document.getElementById("start").textContent = "You're done!";
        qNum = 1;
    }
});

console.log("League:", league.textContent);
/*ALL OF THE ANSWERS FOR QUESTION 2 NEED TO BE FOR THE SPECIFIC LEAGUE
MAKE QUESTIONS 2-6 ABOUT TEAMS, BUT NOT THE SAME
THEY NEED TO HAVE THE CORRECT ANSWER AS PART OF THE 4
    AND I NEED TO BE ABLE TO CHANGE THOSE
RECORD ANSWERS*/