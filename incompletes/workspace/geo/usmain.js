/*function random(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}*/
/*v for value*/
const bits = [
    document.getElementById("st-nm"),
    document.getElementById("nn"),
    document.getElementById("est"),
    document.getElementById("mot"),
    document.getElementById("dEm"),
    document.getElementById("cap"),
    document.getElementById("lrg"),
    document.getElementById("cts"),
    document.getElementById("pa"),
    document.getElementById("ta"),
    document.getElementById("tree"),
    document.getElementById("bird"),
    document.getElementById("flower")
];

const arrays = [statename, nn, estab, mott, dem, captiAl, large, countiesCount, postalAbbr, tradAbbr, treEs, burd, flower];
let current = -1;

function updateEst(updateType) {
    estab = (updateType === 1) ? [estab[1]] : [estab[51]];
    
}
function updatePC(elementId, value) {
    const para = document.getElementById(elementId);
    para.textContent = value;
    console.log("updated");
}


function update() {
    bits.forEach((element, index) => {
        element.innerHTML = arrays[index][current];
    });
    if (estab.length > 0) {
        const [month, day, year] = estab[current].split(/[\s,]+/);
        updatePC("mth", month);
        updatePC("day", day);
        updatePC("yrs", year);
    }
}
function nextState() {
    if (current < statename.length - 1) {
        current++;
        update();
    } else {
        current = 1;
        update();
    }
}
function backAsTate() {
    if (current > 0) {
        current--;
        update();
    } else {
        current = 51;
        update();
    }
}

nextState();

document.getElementById("next").addEventListener("click", function() {
    nextState();
})
document.getElementById("back").addEventListener("click",function() {
    backAsTate();
})
document.addEventListener("keyup", function(event) {
    if (event.key === 'ArrowRight') {nextState();}
    if (event.key === 'ArrowLeft') {backAsTate();}
})

function showhide() {
    document.getElementById("ddcontent").classList.toggle('nd');
    document.getElementById("st-nm").classList.toggle('corner');
}

var stnmElem = document.getElementById('st-nm');
var ddcontent = document.getElementById('ddcontent');
var ul = document.getElementById('stateslist');
statename.forEach(function(value) {
    var li = document.createElement('ul');
    li.textContent = value;
    
    li.style.cursor = 'pointer';
    li.style.transition = 'background-color 0.3s';
    li.addEventListener('mouseover', function() {li.style.backgroundColor = '#3469A2'});
    li.addEventListener('mouseout', function() {li.style.backgroundColor = '#28507b'})
    li.addEventListener('click', function() {udSel(value);})

    ul.appendChild(li);
});

function udSel(state) /*updateSelection*/{
    stnmElem.innerHTML = state;
    ddcontent.innerHTML = window[state];
    ddcontent.style.display = "none";
}

/*text only*/
function textOnly() {
    document.getElementById("outline").classList.toggle('nd');
    var text = document.getElementById("textOnly");
    text.textContent = (text.textContent === "Back") ? "Text Only" : "Back";
    document.getElementById("textOnlyDiv").classList.toggle('nd');
}
function toggleDD() {document.getElementById("blobbycontent").classList.toggle('nd');}
function nice() {
    document.getElementById("text").classList.toggle('nd');
    var nice = document.getElementById("nice");
    nice.textContent = (text.textContent === "Back") ? "Nice" : "Back";
    document.getElementById("notTextOnly").classList.toggle('nd');
}