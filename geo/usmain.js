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
    const ddcontent = document.getElementById("st-nm");
    const selectedState = ddcontent.value;
    const selectedIndex = ddcontent.selectedIndex;
    bits.forEach((element, index) => {
        const content = arrays[index][selectedIndex];
        if (element) {
            element.textContent = content;
        }
    });
    const estabDate = estab[selectedIndex];
    if (estabDate) {
        const [month, day, year] = estabDate.split(/[\s,]+/);
        updatePC("mth", month);
        updatePC("day", day);
        updatePC("yrs", year);
    }
    listOptions(selectedState);
}
function nextState() {
    const ddcontent = document.getElementById("st-nm");
    const selectedIndex = ddcontent.selectedIndex;
    if (selectedIndex < ddcontent.options.length - 1) {
        ddcontent.selectedIndex = selectedIndex + 1;
    } else {
        ddcontent.selectedIndex = 1;
    }
    update();
}

function backAsTate() {
    const ddcontent = document.getElementById("st-nm");
    const selectedIndex = ddcontent.selectedIndex;
    if (selectedIndex > 1) {
        ddcontent.selectedIndex = selectedIndex - 1;
    } else {
        ddcontent.selectedIndex = ddcontent.options.length - 1;
    }
    update();
}

document.getElementById("next").addEventListener("click", nextState);
document.getElementById("back").addEventListener("click", backAsTate);
document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowRight"){nextState()}
    if (event.key === "ArrowLeft"){backAsTate()}
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

function listOptions(selectedState) {
    var ddcontent = document.getElementById("st-nm");
    ddcontent.innerHTML = '';
    statename.forEach(function(state) {
        var option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        ddcontent.appendChild(option);
    });
    if (selectedState) {
        ddcontent.value = selectedState;
    }
    if (selectedState !== "- Select") {
        var selectOption = ddcontent.querySelector('option[value="- Select"]');
        if (selectOption) {
            selectOption.disabled = true;
        }
    };
}
function initializePage() {
    bits.forEach((element, index) => {
        const content = arrays[index][0];
        if (element) {
            element.textContent = content;
        }
    });
    listOptions(statename[0]);
}

window.onload = initializePage;
/*UPDATE LOG: JUST NEED TO GET BUTTONS < AND > TO
BE WORKING WITH CHANGING THE NAME OF THE SELECTED
ELEMENT AND THAT SHOULD BE BIG PROGRESS.*/