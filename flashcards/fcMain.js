function makeCard(character, pinyin, translation) {
    return `
        <div class="card">
            <p class="char">${character}</p>
            <div class="co">
                <p class="lett">${pinyin}</p>
                <p class="lett">${translation}</p>
            </div>
        </div>
    `;
}
function makeSection(header, array) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('fifty', 'center');
    newDiv.innerHTML = `
        <h2>${header}</h2>
        <div class="grid">
            ${array.join('')}
        </div>
        <br>
        <br>
    `;
    document.body.appendChild(newDiv);
}
const sectIntro = [
    makeCard('你', 'nǐ', 'you'),
    makeCard('我', 'wo', 'I, my, me'),
    makeCard('不', 'bu', 'no, not'),
    makeCard('你', 'nǐ', 'you'),
    makeCard('我', 'wo', 'I, my, me'),
    makeCard('不', 'bu', 'no, not')
]
makeSection('Intro', sectIntro);
