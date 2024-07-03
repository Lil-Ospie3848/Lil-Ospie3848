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
    const input1 = input.value.trim().replace(/\s/g, '').toLowerCase();
    if (input1 === correctAnswer) {
        take(puzzleId + 'yes');
        add(puzzleId + 'idk');
    } else { input.value = '';}
}
function puzzle2() { handlePuzzle('puzzle2'); }
function puzzle3() { handlePuzzle('puzzle3'); }
function puzzle4() { handlePuzzle('puzzle4'); }
function p2yes()   { checkAnswer('p2', 'p2input', 'ilikecheeseandnoodles'); }
function p3yes()   { checkAnswer('p3', 'p3input', '20'); }
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
        const answerField1 = answerField.value.trim().replace(/\s/g, '').toLowerCase();
        if (answerField1 === correctAnswer) {
            document.getElementById(colorId).style.color = "#38b000";
            toggleIds.forEach(id => document.getElementById(id).classList.toggle('nd'));
            greenNum++;
        } else {answerField.value = '';}
    });
}

setupPuzzle('p1Sub', 'p1Ans', '20', ['twenty', 'a', 'b', 'c', 'd', 'e', 'abcde', 'p1AS'], 'twenty');
setupPuzzle('p2Sub', 'p2Ans', 'jfovbkfidontlikethisgameonksoeld', ['idltg', 'lad', 'p2AS'], 'idltg');
setupPuzzle('p3Sub', 'p3Ans', 'supercalifragilistic', ['scfl', 'jsutwatygalts', 'p3AS'], 'scfl');
setupPuzzle('p4Sub', 'p4Ans', 'ilikecheeseandnoodles', ['ilcan', 'fp', 'p4AS'], 'ilcan');

/*greens*/
const greens = ['twenty', 'idltg', 'scfl', 'ilcan'];
const r1 = document.getElementById('r1');
r1.addEventListener('click', () => {if (greenNum === 4) {room1();}});

const rooms = document.getElementById('rooms');
const toRooms = document.getElementById('r1Sub');
toRooms.addEventListener('click', () => {
    if (document.getElementById('r1Ans').value.trim() === '1342') {
        rooms.classList.remove('nd');
        document.getElementById('firstPuzzles').classList.add('nd');
        sectValue();
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
    const input1 = input.value.trim().replace(/\s/g, '').toLowerCase();
    if (input1 === correctValue) {
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
puzzles1and2(r1p2Sub, r1p2Ans, 'areyouinapickleoristhisyourcupoftea', ['r1p2q', 'thoopid', 'r2Key', 'r2button', 'toMoreRooms'], ['r1p2q', 'r1p2AS'], 'r2','r1button2');

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
function disablingButton(div, buttonToDisable, wordsToGreen) {
    document.getElementById(div).classList.add('nd');
    const bTD = document.getElementById(buttonToDisable);
    bTD.disabled = true;
    bTD.style.color = '#38b000';
    bTD.style.cursor = 'default';
    document.getElementById('room5').classList.remove('nd');
    document.getElementById(wordsToGreen).style.color = '#38b000';
    changeButtonBackground({target: document.getElementById('r5button')});
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
        const lpinput = LPInput.value.trim().replace(/\s/g, '').toLowerCase();
        if (lpinput === '') {
            LPInput.style.color = "black";
        } else if(lpinput === lpAnswer) {
            lpcount++;
            LPInput.style.color = "black"
        } else {LPInput.style.color = "red"}
    }
}
document.getElementById('pdlj').addEventListener('click', () => {
    lpcount = 0;
    logicPuzzle('da', 'august30');
    logicPuzzle('la', 'houston');
    logicPuzzle('ja', 'gamedeveloper');
    logicPuzzle('db', 'july30');
    logicPuzzle('lb', 'boston');
    logicPuzzle('jb', 'pilot');
    logicPuzzle('dc', 'june30');
    logicPuzzle('lc', 'boulder');
    logicPuzzle('jc', 'astronaut');
    logicPuzzle('dd', 'september30');
    logicPuzzle('ld', 'sanfrancisco');
    logicPuzzle('jd', 'mechanicalengineer');
    if (lpcount === 12) {
        document.getElementById('r2k').checked = true;
        disablingButton('r2', 'r2button', 'room2key');
    }
});
document.getElementById('testing').addEventListener('click', () => {
    function insertAnswer(id) {
             if (id === 'da') {document.getElementById(id).value = 'August 30';}
        else if (id === 'la') {document.getElementById(id).value = 'Houston';}
        else if (id === 'ja') {document.getElementById(id).value = 'Game Developer';}
        else if (id === 'db') {document.getElementById(id).value = 'July 30';}
        else if (id === 'lb') {document.getElementById(id).value = 'Boston';}
        else if (id === 'jb') {document.getElementById(id).value = 'Pilot';}
        else if (id === 'dc') {document.getElementById(id).value = 'June 30';}
        else if (id === 'lc') {document.getElementById(id).value = 'Boulder';}
        else if (id === 'jc') {document.getElementById(id).value = 'Astronaut';}
        else if (id === 'dd') {document.getElementById(id).value = 'September 30';}
        else if (id === 'ld') {document.getElementById(id).value = 'San Francisco';}
        else if (id === 'jd') {document.getElementById(id).value = 'Mechanical Engineer';}
    }
    insertAnswer('da');
    insertAnswer('la');
    insertAnswer('ja');
    insertAnswer('db');
    insertAnswer('lb');
    insertAnswer('jb');
    insertAnswer('dc');
    insertAnswer('lc');
    insertAnswer('jc');
    insertAnswer('dd');
    insertAnswer('ld');
    insertAnswer('jd');
});

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
        disablingButton('r3', 'r3button', 'room3key');
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
            disablingButton('r4', 'r4button','room4key');
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
    { button: 'r1', div: 'room1' },
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
    for (const item of bd) {
        const divElement = document.getElementById(item.div);
        if (divElement && noND(divElement)) {
            const buttonElement = document.getElementById(item.button);
            if (buttonElement) {
                if (buttonState[item.div] && buttonState[item.div] !== item.button) {
                    const lastActiveButton = document.getElementById(buttonState[item.div]);
                    if (lastActiveButton) {lastActiveButton.classList.remove('active');}
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
function setTextColor(elem, color) {document.getElementById(elem).style.color = color;}
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

//room 5
const gridData = [
    "M V C C N L H B U B A A W X N L B K I N D I A N A",
    "I E B I N E B R A S K A U Q O H O O O E E C M R G",
    "C R A R I Z O N A N O B X U R Y H K Y W C Y A Z F",
    "H M M A T E N N E S S E E K T G I L T Y I E S P Z",
    "I O Y M C O L O R A D O W A H E O A E O F W S I P",
    "G N C J N E L V L D R U D L D O O H X R N S A J E",
    "A T N E W J E R S E Y E P A A R K O A K E P C U N",
    "N W E S T V I R G I N I A S K G E M S J W O H H N",
    "A C B Q U P A R S H V E N K O I N A W O H M U K S",
    "X M I N N E S O T A I B H A T A T A A T A A S S Y",
    "M A Q A K N S F L O R I D A A B U S S C M R E O L",
    "A P Y Y I O W R W N E W M E X I C O H H P Y T U V",
    "I Z N X N R L O U I S I A N A T K U I C S L T T A",
    "N C F W E T T F C M H O V C D J Y T N W H A S H N",
    "E O U I V H Q K T A I Z N A N B U H G I I N C D I",
    "C N T L A C E J M J L S C T W Z I C T S R D W A A",
    "A N A L D A R H O D E I S L A N D A O C E Y Y K V",
    "L E H I A R K F U D C Q F O L W A R N O D Y O O I",
    "A C K N E O W Y O M I N G O U A H O G N A J R T R",
    "B T A O B L Y W J Z T D H F R R O L G S S S E A G",
    "A I N I A I K T R U I R S L Q N I I I I I I I P G",
    "M C S S T N H A W A I I S X R J I N K N F O O O N",
    "A U A R K A N S A S H M O N T A N A H T M W N J I",
    "K T S S T Z S D W M X N R C G G D E L A W A R E A",
    "P G V H R X X F R A U H M I S S I S S I P P I Z P"
];

// Function to create the grid
function createGrid(data) {
    const gridContainer = document.getElementById('grid');
    
    // Loop through each row data
    data.forEach(rowData => {
        const row = document.createElement('div');
        row.className = 'grid-row';
        const characters = rowData.split(' ');
    
        characters.forEach(char => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.textContent = char;
            cell.addEventListener('click', () => {cell.classList.toggle('clicked');});
            row.appendChild(cell);
        });
        gridContainer.appendChild(row);
    });
}
createGrid(gridData);


const lettersleft = document.getElementById('left');
let leftamount = 402;
function changeTextColor() {
    leftamount = 402;
    const cells = document.querySelectorAll('.grid-cell');
    const arrayTargets = [3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,28,29,38,39,41,44,46,47,49,50,60,61,62,63,64,66,69,71,72,74,75,78,79,89,96,97,99,100,103,104,113,121,122,124,128,129,130,131,132,133,134,135,136,137,138,142,147,149,162,163,172,174,195,197,199,201,202,203,204,205,206,207,208,209,210,211,212,213,218,220,226,236,237,238,245,252,253,254,255,257,266,270,277,278,279,280,282,283,284,295,302,303,304,316,320,328,329,332,333,336,337,338,339,340,341,357,358,359,362,363,364,365,366,367,373,376,382,383,384,385,388,389,390,391,398,422,423,432,433,434,435,436,437,440,441,446,447,455,466,469,471,472,480,482,483,484,485,486,487,488,489,494,496,497,505,507,508,509,510,511,512,513,514,515,519,521,524,530,538,539,540,541,544,546,549,561,569,570,571,574,576,579,580,581,582,583,584,585,586,587,588,589,590,591,601,602,603,604,605,606,607,608,609,610,611,612,624,625];
    const arrayTargetsMinus = arrayTargets.map(num => num - 1);
    cells.forEach((cell, index) => {
        if (cell.classList.contains('clicked')) {
            if (!arrayTargetsMinus.includes(index)) {
                cell.style.color = '#38b000';
                leftamount--;
                lettersleft.innerText = 'You have ' + leftamount + ' letters left to find.';
            } else {cell.classList.remove('clicked');}
        }
    });
}

const room5submit = document.getElementById('room5submit');
const keys = document.getElementById('keys');
const wordsearch = document.getElementById('wordsearch');
const r2kcheck = document.getElementById('r2k');
const r3kcheck = document.getElementById('r3k');
const r4kcheck = document.getElementById('r4k');
room5submit.addEventListener('click', changeTextColor);
room5submit.addEventListener('click', () => {
    if (!keys.classList.contains('nd')) {
        if (r2kcheck.checked === true && r3kcheck.checked === true && r4kcheck.checked === true) {
            keys.classList.add('nd');
            wordsearch.classList.remove('nd');
        }
    } else if (!wordsearch.classList.contains('nd')) {
        if (leftamount === 0 || document.getElementById('tooLazy').value === '7058') {
            document.getElementById('rooms234').classList.add('nd');
            document.getElementById('finish').classList.remove('nd');
            sectValue();
        }
    }
});
