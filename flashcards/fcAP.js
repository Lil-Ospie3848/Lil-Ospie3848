const rq1 = `
Influence of Industrial Revolution
EU needed more extensive raw materials and ag products
The new economic needs had solutions found abroad

Cecil Rhodes
An English imperialist
Spoke on the importance of imperialism to avoid civil war in GBR

Nationalism
Mass growth of nationalism made imperialism broadly popular in EU
Mass growth of nationalism drove the rise of imperialism

Suez canal
Opened in 1869
Allowed EUs faster, more predictable travel to Asia & Africa, as well as interior rivers

“John Chinaman”
The Chinese image by EU in the late 1800s
Weak, cunning, obstinately conservative, distinct threat
Represented by the yellow pearl

Race
EU used power and science to support racial preferences/racial prejudice (be racist)
Ex: using measurements, whites had larger heads, therefore were more advanced

Jules Ferry
French politician
In 1883 said that superior races have a right because they have a duty to civilize inferior races

“Civilizing mission”
EUs were to bring Christianity, good government…
Suppressing native customs opposing Western ways of living
Thought to be “progress” and “civilization”

“Social Darwinism”
“Survival of the fittest”
EU dominance involved displacement/destruction of backward people/”unfit” races

First and second phases of European colonial conquests
1st: takeover of the Americas
2nd: focused on Africa and Asia, involved “new players”, Spanish and Portuguese now had minor roles

European colonial control
Preferred informal control - without wholesale colonial takeover 
using economic penetration (& occasional military intervention)
Cheaper with less wars

European technological advantages
Military advantages
Repeating rifles and machine (Maxim) guns

Mughal Empire
Mughal fragmentation with absence of cultural/political unity invited and facilitated EU penetration

“Scramble for Africa”
1875-1914
The 6 EU “Great Powers” were partitioning all of Africa
Peaceful negotiations with great powers, bloody wars to gain actual control

Decentralized societies
Areas with no formal state structure
Harder to conquer areas
Meant village by village conquest

Boers
White descendants of the earlier Dutch settlers in South Africa

Boer War
1899-1902 in South Africa
Boers fought bitterly for 3 years before succumbing to British forces

Settler colonies
“neo-European”
Australia/New Zealand to Brits
Those 2 had the most decimated populations out of any colonizing

US imperialism
Westward expansion overwhelmed natives
War with Mexico
Removing (sometimes exterminating) Indian Peoples
“Kill the Indian, Save the Man” - slogan in boarding schools assimilating

Japanese Imperialism
Takeover of Taiwan and Korea was similar to EU actions

Liberia
13,000 freed US slaves seeking greater freedom moved to West Africa becoming a colonizing elite

Ethiopia
Expanded as they defeated Italy in Battle of Adowa 1896

Siam (Thailand)
Notable for avoiding/succumbing to nearby colonization (with Ethiopia)
Resistance to colonial rule
`;
function makeAPCard(term, definition) {
    return `
        <div class="card2">
            <p class="term">${term}</p>
            <p class="defi">${definition}</p>
        </div><br><br>
    `;
}
const terms = rq1.trim().split('\n\n');
const cards = terms.map(termText => {
    const [term, ...definitionLines] = termText.split('\n');
    const definition = definitionLines.map(line => `<li>${line}</li>`).join('');
    return makeAPCard(term, definition);
})
const container = document.createElement('div');
container.classList.add('container', 'fifty', 'center');
container.innerHTML = cards.join('');
document.body.appendChild(container);