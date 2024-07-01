/*welcome*/
function wc() {
    document.getElementById('wc').classList.add('nd');
    document.getElementById('intro').classList.remove('nd');
    sectValue();
}
/*first puzzles*/
function toggleClass(elementId, action) {
document.getElementById(elementId).classList[action]('nd');}

function take(elementId) {toggleClass(elementId, 'remove');}
function add(elementId) {toggleClass(elementId, 'add');}

function key() {take('firstPuzzles'); add('intro'); sectValue();}

function puzzle1() {take('puzzle1');addMultiple(['puzzle2', 'puzzle3', 'puzzle4', 'room1']);}
function p1yes() {take('p1yes');add('p1idk');add('key');add('intro');}

function handlePuzzle(puzzleId) {
    addMultiple(['puzzle1', 'puzzle2', 'puzzle3', 'puzzle4', 'room1']);
    take(puzzleId);
}

function checkAnswer(puzzleId, inputId, correctAnswer) {
    const input = document.getElementById(inputId);
    if (input.value === correctAnswer) {
        take(puzzleId + 'yes');
        add(puzzleId + 'idk');
    } else {
        input.value = '';
    }
}
function puzzle2() { handlePuzzle('puzzle2'); }
function p2yes()   { checkAnswer('p2', 'p2input', 'ilikecheeseandnoodles'); }
function puzzle3() { handlePuzzle('puzzle3'); }
function p3yes()   { checkAnswer('p3', 'p3input', '20'); }
function puzzle4() { handlePuzzle('puzzle4'); }
function p4yes()   { checkAnswer('p4', 'p4input', 'supercalifragilistic'); }

function room1() {take('room1'); addMultiple(['puzzle1','puzzle2','puzzle3','puzzle4']);}

function addMultiple(elementIds) {elementIds.forEach(add);}

/*first puzzle inputs*/
let greenNum = 0;
function setupPuzzle(subId, ansId, correctAnswer, toggleIds, colorId) {
    const subButton = document.getElementById(subId);
    const answerField = document.getElementById(ansId);
    answerField.value = '';

    subButton.addEventListener('click', () => {
        if (answerField.value === correctAnswer) {
            document.getElementById(colorId).style.color = "#38b000";
            toggleIds.forEach(id => document.getElementById(id).classList.toggle('nd'));
            greenNum++;
            //console.log(greenNum);
        } else {
            answerField.value = '';
        }
    });
}

setupPuzzle('p1Sub', 'p1Ans', '20', ['twenty', 'a', 'b', 'c', 'd', 'e', 'abcde', 'p1AS'], 'twenty');
setupPuzzle('p2Sub', 'p2Ans', 'jfovbkfidontlikethisgameonksoeld', ['idltg', 'lad', 'p2AS'], 'idltg');
setupPuzzle('p3Sub', 'p3Ans', 'supercalifragilistic', ['scfl', 'jsutwatygalts', 'p3AS'], 'scfl');
setupPuzzle('p4Sub', 'p4Ans', 'ilikecheeseandnoodles', ['ilcan', 'fp', 'p4AS'], 'ilcan');

/*greens*/
const greens = ['twenty', 'idltg', 'scfl', 'ilcan'];
const r1 = document.getElementById('r1');
r1.addEventListener('click', () => {
    if (greenNum === 4) {room1();}
    //else {console.log(`Not all elements are green yet.`);}
});
const rooms = document.getElementById('rooms');
const toRooms = document.getElementById('r1Sub');
toRooms.addEventListener('click', () => {
    if (document.getElementById('r1Ans').value === '1342') {
        rooms.classList.remove('nd');
        document.getElementById('firstPuzzles').classList.add('nd');
    } //else {console.log('Not all elements are visible.'); document.getElementById('r1Ans').value = '';}
});

/*room 1*/
let r1p3total = 0;

const r1p1 = () => { take('r1p1'); addMultiple(['r1p2','r1p3']); }
const r1p2 = () => { take('r1p2'); addMultiple(['r1p1','r1p3']); }
const r1p3 = () => { take('r1p3'); addMultiple(['r1p1','r1p2']); }

const r1p1Sub = document.getElementById('r1p1Sub');
const r1p1Ans = document.getElementById('r1p1Ans');
const r1p2Sub = document.getElementById('r1p2Sub');
const r1p2Ans = document.getElementById('r1p2Ans');
const r1p3Sub = document.getElementById('r1p3Sub');
const fitbElements = Array.from({ length: 8 }, (_, i) => document.getElementById(`fitb${i + 1}`));
const [fitb1, fitb2, fitb3, fitb4, fitb5, fitb6, fitb7, fitb8] = fitbElements;

function r1checkAnswer (input, correctValue, elementsToShow, elementsToHide, title) {
    if (input.value === correctValue) {
        elementsToShow.forEach(id => document.getElementById(id).classList.remove('nd'));
        elementsToHide.forEach(id => document.getElementById(id).classList.add('nd'));
        input.style.color = "#38b000";
        document.getElementById(title).style.color = "#38b000";
        document.getElementById('rooms').classList.add('nd');
        document.getElementById('rooms234').classList.remove('nd');
    } else {input.value = '';}
};
function puzzles1and2(submitButton, input, correctValue, elementsToShow, elementsToHide, roomToShow, title) {
    const p2keyCheck = document.getElementById('p2keyCheck');
    const p3keyCheck = document.getElementById('p3keyCheck');
    submitButton.addEventListener('click', () => {
        r1checkAnswer (input, correctValue, elementsToShow, elementsToHide, title);
        if (roomToShow === 'r2') {r2(); p2keyCheck.checked = true; changeButtonBackground({target: document.getElementById('r2button')});}
        else if (roomToShow === 'r3') {r3(); p3keyCheck.checked = true; changeButtonBackground({target: document.getElementById('r3button')});}
        sectValue();
    });
}
puzzles1and2(r1p1Sub, r1p1Ans, '3225', ['r1p1q', 'time', 'r3Key', 'r3button', 'toMoreRooms'], ['r1p1q', 'r1p1AS'], 'r3','r1button1');
puzzles1and2(r1p2Sub, r1p2Ans, 'are you in a pickle or is this your cup of tea', ['r1p2q', 'thoopid', 'r2Key', 'r2button', 'toMoreRooms'], ['r1p2q', 'r1p2AS'], 'r2','r1button2');

/*transition*/
function r2() {take('r2'); take('r5button'); add('r3'); add('r4'); add('room5');}
function r3() {take('r3'); take('r5button'); add('r2'); add('r4'); add('room5');}
function r4() {take('r4'); take('r5button'); add('r2'); add('r3'); add('room5');}
function r5() {take('room5'); add('r2'); add('r3'); add('r4');}
document.getElementById('toMoreRooms').addEventListener('click', () => {
    toggleRooms();
    sectValue();
    hideRoom1();
});
document.getElementById('backFromRooms').addEventListener('click', () => {
    toggleRooms();
    sectValue();
    hideRoom1();
});
function toggleRooms() {
    document.getElementById('rooms234').classList.toggle('nd');
    document.getElementById('rooms').classList.toggle('nd');
    autoCBB();
}
function hideRoom1() {
    const time = document.getElementById('time');
    const thoopid = document.getElementById('thoopid');
    const web = document.getElementById('web');
    if (time && thoopid && web && !time.classList.contains('nd') && !thoopid.classList.contains('nd') && !web.classList.contains('nd')) {
        document.getElementById('backFromRooms').classList.add('nd');
    }
}

/*keyButtons() in rooms234*/
function keyButtons(button, checkbox, confirmationDiv, puzzleDiv) {
    document.getElementById(button).addEventListener('click', () => {
        if (document.getElementById(checkbox) && document.getElementById(checkbox).checked === true) {
            document.getElementById(confirmationDiv).classList.add('nd');
            document.getElementById(puzzleDiv).classList.remove('nd');
        }
    });
}
keyButtons('check1','p2keyCheck','keyFromP2','room2puzzle');
keyButtons('check2','p3keyCheck','keyFromP1','room3puzzle');
keyButtons('check3','p4keyCheck','keyFromP3','room4puzzle');

/*rooms 2 3 4 (5)*/
function disablingButton(div, buttonToDisable) {
    document.getElementById(div).classList.add('nd');
    const bTD = document.getElementById(buttonToDisable);
    bTD.disabled = true;
    bTD.style.color = '#38b000';
    bTD.style.cursor = 'default';
    document.getElementById('room5').classList.remove('nd');
    changeButtonBackground({target: document.getElementById('r5button')})
}
/*room 2*/
['p2keyCheck','p3keyCheck','p4keyCheck'].forEach(id => {document.getElementById(id).disabled = true;});
const ids = ["pp", "dt", "ll", "jj", "pa", "da", "la", "ja", "pb", "db", "lb", "jb", "pc", "dc", "lc", "jc", "pd", "dd", "ld", "jd"];
const inputs = {};
ids.forEach(id => {inputs[id] = document.getElementById(id);});
const disabledInputs = [inputs.pp, inputs.dt, inputs.ll, inputs.jj, inputs.pa, inputs.pb, inputs.pc, inputs.pd];
disabledInputs.forEach(element => {
    if (element) {
        element.disabled = true;
        element.style.textAlign = 'center';
        element.style.backgroundColor = '#415a77';
        element.style.borderColor = '#415a77';
        element.style.color = 'white';
    }

});

inputs.pp.value = "Person";
inputs.pa.value = "A";
inputs.pb.value = "B";
inputs.pc.value = "C";
inputs.pd.value = "D";
inputs.dt.value = "Date";
inputs.ll.value = "Location";
inputs.jj.value = "Job";

let lpcount = 0;
function logicPuzzle(lpInput, lpAnswer) {
    if (lpInput && lpAnswer) {
        const LPInput = document.getElementById(lpInput);
        if (LPInput.value === '') {
            LPInput.style.color = "black";
        } else if(LPInput.value === lpAnswer) {
            lpcount++;
            LPInput.style.color = "black"
        } else {LPInput.style.color = "red"}
    }
}
document.getElementById('pdlj').addEventListener('click', () => {
    //lpcount = 0;
    logicPuzzle('da', 'August 30');
    logicPuzzle('la', 'Houston');
    logicPuzzle('ja', 'Game Developer');
    logicPuzzle('db', 'July 30');
    logicPuzzle('lb', 'Boston');
    logicPuzzle('jb', 'Pilot');
    logicPuzzle('dc', 'June 30');
    logicPuzzle('lc', 'Boulder');
    logicPuzzle('jc', 'Astronaut');
    logicPuzzle('dd', 'September 30');
    logicPuzzle('ld', 'San Francisco');
    logicPuzzle('jd', 'Mechanical Engineer');

    if (lpcount === 12) {
        document.getElementById('r2k').checked = true;
        disablingButton('r2', 'r2button');
    }
});
document.getElementById('testing').addEventListener('click', () => {
    lpcount = 12;
})

/*room 3*/
let puzzle3count = 0;
let triedOnce = 0;

function crossMath(cmInput, cmAnswer) {
    const CMInput = document.getElementById(cmInput);
    if (CMInput) {
        if (CMInput.value === '') {CMInput.style.color = "black";}
        else if (CMInput.value === cmAnswer) {
            puzzle3count++;
            CMInput.style.color = "black";
        } else {CMInput.style.color = "red";}
    }
}

document.getElementById('room3submit').addEventListener('click', () => {
    puzzle3count = 0;
    triedOnce = 0;
    const r330Input = document.getElementById('r330');
    const allInputsFilled = checkAllInputs();

    if (!r330Input) {puzzle3count++; hint();}
    else if (allInputsFilled) {nohint(); triedOnce++; hintButton.innerHTML = 'Hint';}

    if (allInputsFilled && puzzle3count === 7 && (r330Input ? r330Input.value !== '' : document.getElementById('hint').innerHTML === '1')) {
        document.getElementById('r3k').checked = true;
        disablingButton('r3', 'r3button');
    }
});

function checkAllInputs() {
    const inputIds = ['r32', 'r34', 'r314', 'r318', 'r328', 'r330', 'r347'];
    for (const id of inputIds) {
        const input = document.getElementById(id);
        if (input && input.value === '') {return false;}
    }
    return true;
}

const hintButton = document.getElementById('hintButton');
hintButton.addEventListener('click', () => {
    hintButton.innerHTML = 'Hint';
    if (triedOnce === 1) {
        const r330Input = document.getElementById('r330');
        if (r330Input) {
            puzzle3count++;
            //console.log(puzzle3count);
            crossMath('r330', '1');
            r330Input.remove();
            document.getElementById('hint').innerHTML = 1;
            hintButton.classList.add('nd');
        }
    } else if (triedOnce === 0) {hintButton.innerHTML = 'Try it first';}
})

function nohint() {
    crossMath('r32', '48');
    crossMath('r34', '76');
    crossMath('r314', '56');
    crossMath('r318', '34');
    crossMath('r328', '73');
    crossMath('r330', '1');
    crossMath('r347', '468');
}
function hint() {
    crossMath('r32', '48');
    crossMath('r34', '76');
    crossMath('r314', '56');
    crossMath('r318', '34');
    crossMath('r328', '73');
    crossMath('r347', '468');
}

/*room 4*/
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
        endgame('Finished');
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
        if (value === 'Finished') {
            document.getElementById('guessButton').classList.add('nd');
            document.getElementById('r4k').checked = true;
            disablingButton('r4', 'r4button');
        } else if (value === 'Try again') {
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
    guessDiv.style.width = '250px';
    row.appendChild(guessDiv);
    for (let i = 0; i < guess.length; i++) {
        let colorAnswer = document.createElement('button');
        colorAnswer.style.aspectRatio = '1/1';
        colorAnswer.style.width = '50px';
        colorAnswer.style.cursor = 'default';
        colorAnswer.style.backgroundColor = colormap[guess[i]];
        guessDiv.appendChild(colorAnswer);
    }

    const feedbackDiv = document.createElement('div');
    feedbackDiv.style.display = 'flex';
    feedbackDiv.style.gap = '5px';
    feedbackDiv.style.width = '250px';
    row.appendChild(feedbackDiv);

    let correctPositions = feedback.correctPositions;
    let correctColors = feedback.correctColors;
    for (let i = 0; i < 4; i++) {
        let fb = document.createElement('button');
        fb.style.aspectRatio = '1/1';
        fb.style.width = '50px';
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


/*changeButtonBackground()*/
const buttons = document.querySelectorAll('.cbb');
const bd = [
    { button: 'p1button', div: 'puzzle1' },
    { button: 'p2button', div: 'puzzle2' },
    { button: 'p3button', div: 'puzzle3' },
    { button: 'p4button', div: 'puzzle4' },
    { button: 'r1button1', div: 'r1p1' },
    { button: 'r1button2', div: 'r1p2' },
    { button: 'r1button3', div: 'r1p3' },
    { button: 'r2button', div: 'r2' },
    { button: 'r3button', div: 'r3' },
    { button: 'r4button', div: 'r4' },
    { button: 'r5button', div: 'room5' }
];

function changeButtonBackground(event) {
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}
buttons.forEach(button => {button.addEventListener('click', changeButtonBackground);});

const buttonState = {};

function noND(element) {return !element.classList.contains('nd');}
function autoCBB() {
    
    const bd = [
        { button: 'p1button', div: 'puzzle1' },
        { button: 'p2button', div: 'puzzle2' },
        { button: 'p3button', div: 'puzzle3' },
        { button: 'p4button', div: 'puzzle4' },
        { button: 'r1button1', div: 'r1p1' },
        { button: 'r1button2', div: 'r1p2' },
        { button: 'r1button3', div: 'r1p3' },
        { button: 'r2button', div: 'r2' },
        { button: 'r3button', div: 'r3' },
        { button: 'r4button', div: 'r4' },
        { button: 'r5button', div: 'room5' }
    ];
    
    for (const item of bd) {
        const divElement = document.getElementById(item.div);
        if (divElement && noND(divElement)) {
            const buttonElement = document.getElementById(item.button);
            if (buttonElement) {
                if (buttonState[item.div] && buttonState[item.div] !== item.button) {
                    const lastActiveButton = document.getElementById(buttonState[item.div]);
                    if (lastActiveButton) {
                        lastActiveButton.classList.remove('active');
                    }
                }
                
                buttonElement.classList.add('active');
                buttonState[item.div] = item.button;
            }
            break;
        }
    }
}

const butts = document.querySelectorAll('.cbb'); // Update selector as needed
butts.forEach(button => {
    button.addEventListener('click', (event) => {
        const targetButton = event.target;
        const targetDiv = bd.find(item => item.button === targetButton.id).div;

        const divElement = document.getElementById(targetDiv);
        if (divElement && noND(divElement)) {
            if (buttonState[targetDiv] && buttonState[targetDiv] !== targetButton.id) {
                const lastActiveButton = document.getElementById(buttonState[targetDiv]);
                if (lastActiveButton) {
                    lastActiveButton.classList.remove('active');
                }
            }
            
            targetButton.classList.add('active');
            buttonState[targetDiv] = targetButton.id;
        }
    });
});

autoCBB();

/*room 1 puzzle 1*/
function setTextColor(elem, color) {
    document.getElementById(elem).style.color = color;
}
function resetColors(classNames) {
    classNames.forEach(className => {
        const classElems = document.getElementsByClassName(className);
        Array.from(classElems).forEach(elem => {elem.style.color = '';})
    })
}
function addEventListeners (timeName) {
    Array.from(document.getElementsByClassName(timeName)).forEach(elem => {
        elem.addEventListener('click', () => {
            setTextColor('t','black');
            setTextColor('tt','black');
            setTextColor('tff','black');
            setTextColor('four','black');
            setTextColor('five','black');
            setTextColor(timeName, 'red');
            resetColors(['t','tt','tff','four','five']);
            elem.style.color = '#87A0BD'
        });
    });
}
addEventListeners('four');
addEventListeners('tff');
addEventListeners('t');
addEventListeners('tt');
addEventListeners('five');
