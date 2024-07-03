//r1p3
/*arrays*/
const stateNames = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Inidana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marchyland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]
const capital = ["- Capital",
    "Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", 
    "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augustusta", "Annapolis", 
    "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", 
    "Santa Fe", "Albany", "Raleigh", "Bismark", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", 
    "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne", 
]
const estab = ["- Established",
    "December 14, 1819", "January 3, 1959", "February 14, 1912", "June 15, 1836", "September 9, 1850", "August 1, 1876", "January 9, 1788", "December 7, 1787", "March 3, 1845", "January 2, 1788", 
    "August 21, 1959", "July 3, 1890", "December 3, 1818", "December 11, 1816", "December 28, 1846", "January 29, 1861", "June 1, 1792", "April 30, 1812", "March 15, 1820", "April 28, 1788", 
    "February 6, 1788", "January 26, 1837", "May 11, 1858", "December 10, 1817", "August 10, 1821", "November 8, 1889", "March 1, 1867", "October 31, 1864", "June 21, 1788", "December 18, 1787", 
    "January 6, 1912", "July 26, 1788", "November 21, 1789", "November 2, 1889", "March 1, 1803", "November 16, 1907", "February 14, 1859", "December 12, 1787", "May 29, 1790", "May 23, 1788", 
    "November 2, 1889", "June 1, 1796", "December 29, 1845", "January 4, 1896", "March 4, 1791", "June 25, 1788", "November 11, 1889", "June 20, 1863", "May 29, 1848", "July 10, 1890"
]
const mott = ["- Motto",
    "We dare to defend our rights", "North to the Future", "God enriches", "The people rule", "Eureka", "Nothing without providence", "He who transplanted sustains", "Liberty and independence", "In God we trust", "Wisdom, justice, moderation", 
    "The life of the land is perpetuated in righteousness", "Let it be perpetual", "State soverighnty, national union", "The crossroads of America", "Our liberties we prize and our rights we will maintain", "To the stars through difficulties", "United we stand, divded we fall", "Union, justice, and confidence", "I direct", "Strong deeds, gentle words", 
    "By the sword we seek peace, but peace only under liberty", "If you seek a pleasnt peninsula, look about you", "I long to see what is beyond", "By valor and arms", "The welfare of the people is the highest law", "Gold and silver", "Equality before the law", "All for our country", "Live free or die", "Liberty and prosperity", 
    "It goes by growing", "Ever upward", "To be, rather than to seem", "Strength from the soil", "With God, all things are possible", "Hard work conquers all things", "She flies with her own wings", "Virtue, liberty and independence", "Hope", "While I breathe, I hope", 
    "Under God the people rule", "Agriculture and commerce", "Friendship", "Industry", "May the 14th star shine bright", "Thus always to tryants", "By and by", "Mountaineers are always free", "Forward", "Let weapons yield the toga", 
]
const MLBteams = {
    "AL": {
        "Central": ["White Sox", "Guardians", "Tigers", "Royals", "Twins"],
        "East": ["Orioles", "Red Sox", "Yankees", "Rays", "Blue Jays"],
        "West": ["Astros", "Angels", "Athletics", "Marchiners", "Rangers"]
    },
    "NL": {
        "Central": ["Cubs", "Reds", "Brewers", "Pirates", "Cardinals"],
        "East": ["Braves", "Marchlins", "Mets", "Phillies", "Nationals"],
        "West": ["Diamondbacks", "Rockies", "Dodgers", "Padres", "Giants"]
    }
};
const MLSteams = {
    "Eastern": ["Atlanta United FC", "CF Montreal", "Charlotte FC", "Chicago Fire FC", "Columbus Crew", "D.C. United", "FC Cincinnati", "Inter Miami FC", "Nashville FC", "New England Revolution", "New York City FC", "New York Red Bulls", "Orlando City FC", "Philadelphia Union", "Toronto FC"],
    "Western": ["Austin FC", "Colorado Rapids", "FC Dallas", "Houston Dynamo FC", "LA Galaxy", "LAFC", "Minnesota United FC", "Portland Timbers", "Real Salt Lake", "San Jose Earthquakes", "Seattle Sounders FC", "Sporting Kansas City", "Sporting Kansas City", "St. Louis CITY SC", "Vancouver Whitecaps",]
};
const NBAteams = {
    "Atlantic": ["Celtics", "Nets", "Knicks", "76ers", "Raptors"],
    "Central": ["Bulls", "Cavaliers", "Pistons", "Pacers", "Bucks"],
    "Southeast": ["Hawks", "Hornets", "Heat", "Magic", "Wizards"],
    "Northwest": ["Nuggets", "Timberwolves", "Thunder", "Trail Blazers", "Jazz"],
    "Pacific": ["Warriors", "Clippers", "Lakers", "Suns", "Kings"],
    "Southwest": ["Mavericks", "Rockets", "Grizzlies", "Pelicans", "Spurs"]
};
const NFLteams = {
    "AFC": {
        "East": ["Bills", "Dolphins", "Patriots", "Jets"],
        "North": ["Ravens", "Bengals", "Browns", "Steelers"],
        "South": ["Texans", "Colts", "Jaguars", "Titans"],
        "West": ["Broncos", "Chiefs", "Raiders", "Chargers"]
    },
    "NFC": {
        "East": ["Cowboys", "Giants", "Eagles", "Commanders"],
        "North": ["Bears", "Lions", "Packers", "Vikings"],
        "South": ["Falcons", "Panthers", "Saints", "TBuccaneers"],
        "West": ["Cardinals", "Rams", "49ers", "Seahawks"]
    }
};
const NHLteams = {
    "Atlantic": ["Bruins", "Sabres", "Red Wings", "Panthers", "Canadiens", "Senators", "Lightning", "Maple Leafs"],
    "Metropolitan": ["Hurricanes", "Blue Jackets", "Devils", "Islanders", "Rangers", "Flyers", "Penguins", "Capitals"],
    "Central": ["Blackhawks", "Avalanche", "Stars", "Wild", "Predators", "Blues", "Jets", "Coyotes"],
    "Pacific": ["Ducks", "Flames", "Oilers", "Kings", "Sharks", "Kraken", "Canucks", "Golden Knights"]
};
const teamsStuff = {
    "MLB": ["AL Central","AL East","AL West","NL Central","NL East","NL West"],
    "MLS": ["Eastern","Western"],
    "NBA": ["Atlantic","Central","Southeast","Northwest","Pacific","Southwest"],
    "NFL": ["AFC East","AFC North","AFC South","AFC West","NFC East","NFC North","NFC South","NFC West"],
    "NHL": ["Atlantic","Metropolitan","Central","Pacific"]
}

//setting up puzzle
const answers = {
    capital: '',
    motto: '',
    estab: '',
    mlb: '',
    mls: '',
    nba: '',
    nfl: '',
    nhl: ''
};
const stateNum = Math.floor(Math.random() * stateNames.length);
const stateChosen = stateNames[stateNum];
document.getElementById('state').innerText = stateChosen;
answers.capital = capital[stateNum+1];
answers.motto = mott[stateNum+1];
answers.estab = estab[stateNum+1];
function randomize() {
    // MLB
    const selectedMLBLeague = Math.random() < 0.5 ? 'AL' : 'NL';
    const selectedMLBDivision = selectedMLBLeague === 'AL' 
        ? ['Central', 'East', 'West'][Math.floor(Math.random() * 3)] 
        : ['Central', 'East', 'West'][Math.floor(Math.random() * 3)];
    const selectedMLBTeam = MLBteams[selectedMLBLeague][selectedMLBDivision][Math.floor(Math.random() * MLBteams[selectedMLBLeague][selectedMLBDivision].length)];
    document.getElementById('mlb').innerText = selectedMLBTeam;
    answers.mlb = `${selectedMLBLeague} ${selectedMLBDivision}`;
    //console.log(answers.mlb);
    // MLS
    const selectedMLSConference = Math.random() < 0.5 ? 'Eastern' : 'Western';
    const selectedMLSTeam = MLSteams[selectedMLSConference][Math.floor(Math.random() * 15)];
    document.getElementById('mls').innerText = selectedMLSTeam;
    answers.mls = selectedMLSConference;
    //console.log(answers.mls);
    // NBA
    const selectedNBADivision = ['Atlantic', 'Central', 'Southeast', 'Northwest', 'Pacific', 'Southwest'][Math.floor(Math.random() * 6)];
    const selectedNBATeam = NBAteams[selectedNBADivision][Math.floor(Math.random() * NBAteams[selectedNBADivision].length)];
    document.getElementById('nba').innerText = selectedNBATeam;
    answers.nba = selectedNBADivision;
    //console.log(answers.nba);
    // NFL
    const selectedNFLLeague = Math.random() < 0.5 ? 'AFC' : 'NFC';
    const selectedNFLDivision = ['East', 'North', 'South', 'West'][Math.floor(Math.random() * 4)];
    const selectedNFLTeam = NFLteams[selectedNFLLeague][selectedNFLDivision][Math.floor(Math.random() * NFLteams[selectedNFLLeague][selectedNFLDivision].length)];
    document.getElementById('nfl').innerText = selectedNFLTeam;
    answers.nfl = `${selectedNFLLeague} ${selectedNFLDivision}`;
    //console.log(answers.nfl);
    // NHL
    const selectedNHLDivision = ['Atlantic', 'Metropolitan', 'Central', 'Pacific'][Math.floor(Math.random() * 4)];
    const selectedNHLTeam = NHLteams[selectedNHLDivision][Math.floor(Math.random() * NHLteams[selectedNHLDivision].length)];
    document.getElementById('nhl').innerText = selectedNHLTeam;
    answers.nhl = selectedNHLDivision;
    //console.log(answers.nhl);    
}
function listOptions(id, array) {
    const optionid = document.getElementById(id);
    optionid.innerHTML = '';
    if (id === 'fitb2') {
        array.sort((a, b) => {
            const dateA = new Date(a.replace(/,/g, ''));
            const dateB = new Date(b.replace(/,/g, ''));
            //extract
            const monthDayA = dateA.getMonth() * 100 + dateA.getDate();
            const monthDayB = dateB.getMonth() * 100 + dateB.getDate();
            //compare
            if (monthDayA < monthDayB) return -1;
            if (monthDayA > monthDayB) return 1;
            return 0;
        });
    } else {array.sort();}
    array.forEach(item => {
        var option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        optionid.appendChild(option);
    });
    if (id) {optionid.value = id;}
}
listOptions('fitb1', capital);
listOptions('fitb2', estab);
listOptions('fitb3', mott);
listOptions('fitb4', teamsStuff.MLB);
listOptions('fitb5', teamsStuff.MLS);
listOptions('fitb6', teamsStuff.NBA);
listOptions('fitb7', teamsStuff.NFL);
listOptions('fitb8', teamsStuff.NHL);

/*puzzle 3*/
function puzz3ans(inputId, answer) {
    const input = document.getElementById(inputId);
    input.style.color = input.value.trim().toLowerCase() === answer.toLowerCase() ? "white" : input.value ? "red" : "white";
    if (input.value.trim().toLowerCase() === answer.toLowerCase()) r1p3total++;
}

document.getElementById('testingstuff').addEventListener('click', () => {
    function insertAnswer(id) {
        if (id === 'fitb1') {document.getElementById(id).value = answers.capital;}
        else if (id === 'fitb2') {document.getElementById(id).value = answers.estab}
        else if (id === 'fitb3') {document.getElementById(id).value = answers.motto}
        else if (id === 'fitb4') {document.getElementById(id).value = answers.mlb}
        else if (id === 'fitb5') {document.getElementById(id).value = answers.mls}
        else if (id === 'fitb6') {document.getElementById(id).value = answers.nba}
        else if (id === 'fitb7') {document.getElementById(id).value = answers.nfl}
        else if (id === 'fitb8') {document.getElementById(id).value = answers.nhl}
    }
    insertAnswer('fitb1');
    insertAnswer('fitb2');
    insertAnswer('fitb3');
    insertAnswer('fitb4');
    insertAnswer('fitb5');
    insertAnswer('fitb6');
    insertAnswer('fitb7');
    insertAnswer('fitb8');
});

document.getElementById('r1p3Sub').addEventListener('click', () => {
    const selectedCapital = document.getElementById('fitb1').value;
    const selectedEstab = document.getElementById('fitb2').value;
    const selectedMott = document.getElementById('fitb3').value;
    const selectedmlb = document.getElementById('fitb4').value;
    const selectedmls = document.getElementById('fitb5').value;
    const selectednba = document.getElementById('fitb6').value;
    const selectednfl = document.getElementById('fitb7').value;
    const selectednhl = document.getElementById('fitb8').value;
    puzz3ans('fitb1', answers.capital, selectedCapital);
    puzz3ans('fitb2', answers.estab, selectedEstab);
    puzz3ans('fitb3', answers.motto, selectedMott);
    puzz3ans('fitb4', answers.mlb, selectedmlb);
    puzz3ans('fitb5', answers.mls, selectedmls);
    puzz3ans('fitb6', answers.nba, selectednba);
    puzz3ans('fitb7', answers.nfl, selectednfl);
    puzz3ans('fitb8', answers.nhl, selectednhl);
    if (r1p3total === 8) {
        ['r1p3AS', 'fitb', 'rooms', 'r2', 'r3', 'room5'].forEach(id => document.getElementById(id).classList.add('nd'));
        ['web', 'r4Key', 'r4button', 'toMoreRooms', 'rooms234', 'r4'].forEach(id => document.getElementById(id).classList.remove('nd'));
        document.getElementById('p4keyCheck').checked = true;
        document.getElementById('r1button3').style.color = "#38b000";
        changeButtonBackground({target: document.getElementById('r4button')});
        sectValue();
    }
    r1p3total = 0;
});

//room2
/*const dates = ['August 30','July 30','June 30','September 30'];
const locos = ['Houston','Boston','Boulder','San Francisco'];
const jobss = ['Game Developer','Pilot','Astronaut','Mechanical Engineer'];
const LPanswers = {
    da: dates[0],
    db: dates[1],
    dc: dates[2],
    dd: dates[3],
    la: locos[0],
    lb: locos[1],
    lc: locos[2],
    ld: locos[3],
    ja: jobss[0],
    jb: jobss[1],
    jc: jobss[2],
    jd: jobss[3],
}
function LPoptions(id, array) {
    const optionsid = document.getElementById(id);
    optionsid.innerHTML='';
    array.sort();
    array.forEach(item => {
        var option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        optionsid.appendChild(option);
    });
    if (id) {optionsid.value = id};
}
LPoptions('da', dates);
LPoptions('db', dates);
LPoptions('dc', dates);
LPoptions('dd', dates);
LPoptions('la', locos);
LPoptions('lb', locos);
LPoptions('lc', locos);
LPoptions('ld', locos);
LPoptions('ja', jobss);
LPoptions('jb', jobss);
LPoptions('jc', jobss);
LPoptions('jd', jobss);*/