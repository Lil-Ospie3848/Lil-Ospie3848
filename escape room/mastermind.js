let secretCode = generateCode();
let attempts = 0;

function generateCode() {
    let colors = ['R', 'O', 'Y', 'G', 'B', 'P'];
    let code = [];
    for (let i = 0; i < 4; i++) {code.push(colors[Math.floor(Math.random() * colors.length)]);}
    return code.join('');
}
function makeGuess() {
    let guessTried = 0;
    ['guess1', 'guess2', 'guess3', 'guess4'].forEach(id => {
        const colorId = document.getElementById(id);
        if (colorId.style.backgroundColor !== '') {guessTried++;}
    }
    )
    if (guessTried < 4) {return;}
    if (attempts >= 10) {
        document.getElementById('controls').classList.add('nd');
        document.getElementById('inputs').classList.remove('color');
        document.getElementById('inputs').classList.add('nd');
        return;
    }
    let guess = '';
    ['guess1', 'guess2', 'guess3', 'guess4'].forEach(id => {
        const color = document.getElementById(id).style.backgroundColor.toUpperCase();
        if (color === 'RED') guess += 'R';
        else if (color === 'ORANGE') guess += 'O';
        else if (color === 'YELLOW') guess += 'Y';
        else if (color === 'GREEN') guess += 'G';
        else if (color === 'BLUE') guess += 'B';
        else if (color === 'PURPLE') guess += 'P';
    });
    attempts++;
    const feedback = getFeedback(guess);
    displayGuess(guess, feedback);
    if (feedback.correctPositions === 4) {
        document.getElementById('controls').classList.add('nd');
        document.getElementById('inputs').classList.remove('color');
        document.getElementById('inputs').classList.add('nd');
        document.getElementById('feedback').textContent = `Congrats! You cracked the code in ${attempts} attempts!`;
        endgame('Play again');
    }
    else if (attempts >= 10) {
        document.getElementById('feedback').textContent = `Game over! The correct code was ${secretCode}.`;
        endgame('Try again');
    }
}
function endgame(value) {
    const movinOn = document.getElementById('movinOn');
    const feedback = document.getElementById('feedback');
    movinOn.classList.remove('nd');
    movinOn.innerHTML = value;
    movinOn.onclick = () => {
        if (value === 'Try again' || value === 'Play again') {
            document.getElementById('board').innerHTML = '';
            document.getElementById('controls').classList.remove('nd');
            document.getElementById('inputs').classList.add('color');
            feedback.textContent = '';
            movinOn.classList.add('nd');
            movinOn.innerHTML = '';
            ['guess1', 'guess2', 'guess3', 'guess4'].forEach(id =>{
                document.getElementById(id).style.backgroundColor = '';
                document.getElementById(id).classList.remove('selected');
            });
            attempts = 0;
            secretCode = generateCode();
        }
    };
}
function getFeedback(guess) {
    let correctPositions = 0;
    let correctColors = 0;
    let tempCode = secretCode.split('');
    let tempGuess = guess.split('');

    // Check for correct positions
    for (let i = 0; i < 4; i++) {
        if (tempGuess[i] === tempCode[i]) {
            correctPositions++;
            tempCode[i] = tempGuess[i] = null;
        }
    }
    // Check for correct colors
    for (let i = 0; i < 4; i++) {
        if (tempGuess[i] !== null) {
            let index = tempCode.indexOf(tempGuess[i]);
            if (index !== -1) {
                correctColors++;
                tempCode[index] = null;
            }
        }
    }

    return { correctPositions, correctColors };
}
function displayGuess(guess, feedback) {
    const board = document.getElementById('board');
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.marginBottom = '10px';
    const colormap = {
        'R': 'red',
        'O': 'orange',
        'Y': 'yellow',
        'G': 'green',
        'B': 'blue',
        'P': 'purple'
    };

    const guessDiv = document.createElement('div');
    guessDiv.style.display = 'flex';
    guessDiv.style.gap = '5px';
    row.appendChild(guessDiv);
    for (let i = 0; i < guess.length; i++) {
        let colorAnswer = document.createElement('button');
        colorAnswer.style.aspectRatio = '1/1';
        colorAnswer.style.width = '60px';
        colorAnswer.style.cursor = 'default';
        colorAnswer.style.backgroundColor = colormap[guess[i]];
        guessDiv.appendChild(colorAnswer);
    }

    const feedbackDiv = document.createElement('div');
    feedbackDiv.style.display = 'flex';
    feedbackDiv.style.gap = '5px';
    row.appendChild(feedbackDiv);

    let correctPositions = feedback.correctPositions;
    let correctColors = feedback.correctColors;
    for (let i = 0; i < 4; i++) {
        let fb = document.createElement('button');
        fb.style.aspectRatio = '1/1';
        fb.style.width = '60px';
        fb.style.cursor = 'default';

        if (correctPositions > 0) {fb.style.backgroundColor = 'black'; fb.style.border = '1px solid white'; correctPositions--;}
        else if (correctColors > 0) { fb.style.backgroundColor = 'white'; correctColors--;}
        else {fb.style.backgroundColor = 'gray';}
        feedbackDiv.appendChild(fb);
    }
    board.appendChild(row);
}
function colorClicked(color) {
    document.getElementById(color).addEventListener('click', () => {
        const selectedElements = document.getElementsByClassName('selected');
        for (let elem of selectedElements) {elem.style.backgroundColor = color;}
    });
}
['red', 'orange', 'yellow', 'green', 'blue', 'purple'].forEach(colorClicked);
['guess1', 'guess2', 'guess3', 'guess4'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
        ['guess1', 'guess2', 'guess3', 'guess4'].forEach(id => document.getElementById(id).classList.remove('selected'));
        document.getElementById(id).classList.add('selected');
    });
});