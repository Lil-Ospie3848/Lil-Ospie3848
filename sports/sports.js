//NFL
const NFLconferences = ["AFC", "NFC"];
const NFLdivisions = ["East", "North", "South", "West"];
const NFLteamsData = {
  "AFC": [
    ["Buffalo Bills", "Miami Dolphins", "New England Patriots", "New York Jets"],
    ["Baltimore Ravens", "Cincinnati Bengals", "Cleveland Browns", "Pittsburgh Steelers"],
    ["Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Tennessee Titans"],
    ["Denver Broncos", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers"]
  ],
  "NFC": [
    ["Dallas Cowboys", "New York Giants", "Philadelphia Eagles", "Washington Commanders"],
    ["Chicago Bears", "Detroit Lions", "Green Bay Packers", "Minnesota Vikings"],
    ["Atlanta Falcons", "Carolina Panthers", "New Orleans Saints", "Tampa Bay Buccaneers"],
    ["Arizona Cardinals", "Los Angeles Rams", "San Francisco 49ers", "Seattle Seahawks"]
  ]
};
const NFLteamsContainer = document.getElementById("nfl");
NFLconferences.forEach((NFLconference, NFLconferenceIndex) => {
  NFLdivisions.forEach((NFLdivision, NFLdivisionIndex) => {
    const NFLteamDiv = NFLteamsContainer.children[NFLconferenceIndex * NFLdivisions.length + NFLdivisionIndex];
    const NFLteamParagraphs = NFLteamDiv.querySelectorAll('.team');

    NFLteamsData[NFLconference][NFLdivisionIndex].forEach((NFLteam, NFLteamIndex) => {
      NFLteamParagraphs[NFLteamIndex].textContent = NFLteam;
    });
  });
});
function showNFL() {
  NFLteamsContainer.classList.toggle('nd');
}

//NBA
const NBAdivisions = ["Atlantic", "Central", "Southeast", "Northwest", "Pacific", "Southwest"];
const NBAteamsData = {
  "Atlantic": ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors"],
  "Central": ["Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Milwaukee Bucks"],
  "Southeast": ["Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards"],
  "Northwest": ["Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunder", "Portland Trail Blazers", "Utah Jazz"],
  "Pacific": ["Golden State Warriors", "LA Clippers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings"],
  "Southwest": ["Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orleans Pelicans", "San Antonio Spurs"]
};
const NBAteamsContainer = document.getElementById("nba");
NBAdivisions.forEach((NBAdivision) => {
    const NBAteamDiv = NBAteamsContainer.querySelector(`.${NBAdivision}`);
    const NBAteamParagraphs = NBAteamDiv.querySelectorAll('.team');

    NBAteamsData[NBAdivision].forEach((NBAteam, NBAteamIndex) => {
      NBAteamParagraphs[NBAteamIndex].textContent = NBAteam;
    });
});
function showNBA() {
  NBAteamsContainer.classList.toggle('nd');
}

//NHL
const NHLdivisions = ["Atlantic", "Metropolitan", "Central", "Pacific"];
const NHLteamsData = {
    "Atlantic": ["Boston Bruins", "Buffalo Sabres", "Detroit Red Wings", "Florida Panthers", "Montreal Canadiens", "Ottawa Senators", "Tampa Bay Lightning", "Toronto Maple Leafs"],
    "Metropolitan": ["Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils", "New York Islanders", "New York Rangers", "Philadelphia Flyers", "Pittsburgh Penguins", "Washington Capitals"],
    "Central": ["Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Minnesota Wild", "Nashville Predators", "St. Louis Blues", "Winnipeg Jets", "Arizona Coyotes"],
    "Pacific": ["Anaheim Ducks", "Calgary Flames", "Edmonton Oilers", "Los Angeles Kings", "San Jose Sharks", "Seattle Kraken", "Vancouver Canucks", "Vegas Golden Knights"]
};
const NHLteamsContainer = document.getElementById("nhl");
NHLdivisions.forEach((NHLdivision) => {
    const NHLteamDiv = NHLteamsContainer.querySelector(`.${NHLdivision}`);
    const NHLteamParagraphs = NHLteamDiv.querySelectorAll('.team');

    NHLteamsData[NHLdivision].forEach((NHLteam, NHLteamIndex) => {
        NHLteamParagraphs[NHLteamIndex].textContent = NHLteam;
    });
});
function showNHL() {
    document.getElementById("nhl").classList.toggle('nd');
}

//MLB
const MLBconferences = ["AL", "NL"];
const MLBdivisions = ["Central", "East", "West"];
const MLBteamsData = {
    "AL": [
        ["Chicago White Sox", "Clevland Guardians", "Detroit Tigers", "Kansas City Royals", "Minnesota Twins"],
        ["Baltimore Orioles", "Boston Red Sox", "New York Yankees", "Tampa Bay Rays", "Toronto Blue Jays"],
        ["Houston Astros", "Los Angeles Angels", "Oakland Athletics", "Seattle Mariners", "Texas Rangers"]
    ],
    "NL": [
        ["Chicago Cubs", "Cincinnati Reds", "Milwaukee Brewers", "Pittsburgh Pirates", "St. Louis Cardinals"],
        ["Atlanta Braves", "Miami Marlins", "New York Mets", "Philadelphia Phillies", "Washington Nationals"],
        ["Arizona Diamondbacks", "Colorado Rockies", "Los Angeles Dodgers", "San Diego Padres", "San Francisico Giants"]
    ]
};
const MLBteamsContainer = document.getElementById("mlb");
MLBconferences.forEach((MLBconference, MLBconferenceIndex) => {
    MLBdivisions.forEach((MLBdivision, MLBdivisionIndex) => {
        const MLBteamDiv = MLBteamsContainer.children[MLBconferenceIndex * MLBdivisions.length + MLBdivisionIndex];
        const MLBteamParagraphs = MLBteamDiv.querySelectorAll('.team');

        MLBteamsData[MLBconference][MLBdivisionIndex].forEach((MLBteam, MLBteamIndex) => {
            MLBteamParagraphs[MLBteamIndex].textContent = MLBteam;
        });
    })
});
function showMLB() {
    document.getElementById("mlb").classList.toggle('nd');
}

//MLS
const MLSdivisions = ["Eastern", "Western"];
const MLSteamsData = {
    "Eastern": ["Atlanta United FC", "CF Montreal", "Charlotte FC", "Chicago Fire FC", "Columbus Crew", "D.C. United", "FC Cincinnati", "Inter Miami FC", "Nashville FC", "New England Revolution", "New York City FC", "New York Red Bulls", "Orlando City FC", "Philadelphia Union", "Toronto FC"],
    "Western": ["Austin FC", "Colorado Rapids", "FC Dallas", "Houston Dynamo FC", "LA Galaxy", "LAFC", "Minnesota United FC", "Portland Timbers", "Real Salt Lake", "San Jose Earthquakes", "Seattle Sounders FC", "Sporting Kansas City", "St. Louis CITY SC", "Vancouver Whitecaps", "MLS has an odd number of teams"]
};
const MLSteamsContainer = document.getElementById("mls");
MLSdivisions.forEach((MLSdivision) => {
    const MLSteamDiv = MLSteamsContainer.querySelector(`.${MLSdivision}`);
    const MLSteamParagraphs = MLSteamDiv.querySelectorAll('.team');

    MLSteamsData[MLSdivision].forEach((MLSteam, MLSteamIndex) => {
        MLSteamParagraphs[MLSteamIndex].textContent = MLSteam;
    });
});
function showMLS() {
    document.getElementById("mls").classList.toggle('nd');
}

function togg(selectedLeague) {
  const leagues = ['nfl', 'nba', 'nhl', 'mlb', 'mls'];
  leagues.forEach(league => {
    const container = document.getElementById(league);
    if (league === selectedLeague) {
      container.classList.toggle('nd');
    } else {
      container.classList.add('nd');
    }
  })
}