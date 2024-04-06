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
    nice.textContent = (nice.textContent === "Back") ? "Nice" : "Back";
    document.getElementById("notTextOnly").classList.toggle('nd');
}

var ddcontent = document.getElementById("st-nm");
statename.forEach(function(state) {
    var option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    ddcontent.appendChild(option);
})