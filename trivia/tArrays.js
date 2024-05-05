/*QUESTIONS*/
const leaguesQ = ["MLB", "MLS", "NBA", "NFL", "NHL"]
const teamsQ = [
    // MLB Teams
    "Diamondbacks", "Braves", "Orioles", "Red Sox", "Cubs", "White Sox",
    "Reds", "Indians", "Rockies", "Tigers", "Astros", "Royals", "Angels",
    "Dodgers", "Marlins", "Brewers", "Twins", "Yankees", "Mets", "Athletics",
    "Phillies", "Pirates", "Padres", "Giants", "Mariners", "Cardinals", "Rays",
    "Rangers", "Blue Jays", "Nationals",
  
    // MLS Teams
    "United", "Fire", "FC Cincinnati", "Rapids",
    "Crew", "FC Dallas", "D.C. United", "Dynamo", "Galaxy",
    "LAFC", "Inter Miami CF", "Minnesota United", "CF Montreal",
    "Nashville SC", "Revolution", "NYCFC",
    "Red Bulls", "Orlando City", "Union", "Timbers",
    "Real Salt Lake", "Earthquakes", "Sounders",
    "Sporting Kansas City", "Toronto FC", "Whitecaps",
  
    // NBA Teams
    "Hawks", "Celtics", "Nets", "Hornets", "Bulls", "Cavaliers", "Mavericks",
    "Nuggets", "Pistons", "Warriors", "Rockets", "Pacers", "Clippers", "Lakers",
    "Grizzlies", "Heat", "Bucks", "Timberwolves", "Pelicans", "Knicks", "Thunder",
    "Magic", "76ers", "Suns", "Trail Blazers", "Kings", "Spurs", "Raptors", "Jazz",
    "Wizards",
  
    // NFL Teams
    "Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals",
    "Browns", "Cowboys", "Broncos", "Lions", "Packers", "Texans", "Colts",
    "Jaguars", "Chiefs", "Raiders", "Chargers", "Rams", "Dolphins", "Vikings",
    "Patriots", "Saints", "Giants", "Jets", "Eagles", "Steelers", "49ers",
    "Seahawks", "Buccaneers", "Titans", "Commanders",
  
    // NHL Teams
    "Ducks", "Coyotes", "Bruins", "Sabres", "Flames", "Hurricanes", "Blackhawks",
    "Avalanche", "Blue Jackets", "Stars", "Red Wings", "Oilers", "Panthers",
    "Kings", "Wild", "Canadiens", "Predators", "Devils", "Islanders", "Rangers",
    "Senators", "Flyers", "Penguins", "Sharks", "Blues", "Lightning",
    "Maple Leafs", "Canucks", "Golden Knights", "Capitals", "Jets"
];
/*DON'T BE SO FUCKING AMBITIOUS NEXT TIME.
IF THE SELECTED TEAM IS FROM THE MLS
CHANGE THE QUESTION TO BE WHAT STATE ARE THEY IN*/

/*ANSWERS*/
const leaguesA = ["Major League Baseball", "Major League Soccer", "National Basketball Association", "National Football League", "National Hockey League"]
const teamsA = [
    // MLB Teams
    "Arizona", "Atlanta", "Baltimore", "Boston", "Chicago",
    "Cincinnati", "Cleveland", "Colorado", "Detroit", "Houston", "Kansas City", "Los Angeles",
    "Los Angeles", "Miami", "Milwaukee", "Minnesota", "New York", "Oakland",
    "Philadelphia", "Pittsburgh", "San Diego", "San Francisco", "Seattle", "St. Louis", "Tampa Bay",
    "Texas", "Toronto", "Washington",
  
    // MLS Teams
    "Atlanta", "Chicago", "Cincinnati", "Colorado",
    "Columbus", "Dallas", "Washington, D.C.", "Houston", "Los Angeles",
    "Los Angeles", "Miami", "Minnesota", "Montreal",
    "Nashville", "New England", "New York City",
    "New York Red Bulls", "Orlando", "Philadelphia", "Portland",
    "Salt Lake City", "San Jose", "Seattle",
    "Kansas City", "Toronto", "Vancouver",
  
    // NBA Teams
    "Atlanta", "Boston", "Brooklyn", "Charlotte", "Chicago", "Cleveland", "Dallas",
    "Denver", "Detroit", "Golden State", "Houston", "Indiana", "Los Angeles",
    "Memphis", "Miami", "Milwaukee", "Minnesota", "New Orleans", "New York", "Oklahoma City",
    "Orlando", "Philadelphia", "Phoenix", "Portland", "Sacramento", "San Antonio", "Toronto", "Utah",
    "Washington",
  
    // NFL Teams
    "Arizona", "Atlanta", "Baltimore", "Buffalo", "Charlotte", "Chicago", "Cincinnati",
    "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis",
    "Jacksonville", "Kansas City", "Las Vegas", "Los Angeles", "Los Angeles", "Miami", "Minnesota",
    "New England", "New Orleans", "New York", "Philadelphia", "Pittsburgh",
    "San Francisco", "Seattle", "Tampa Bay", "Nashville", "Washington",
  
    // NHL Teams
    "Anaheim", "Glendale", "Boston", "Buffalo", "Calgary", "Raleigh", "Chicago",
    "Denver", "Columbus", "Dallas", "Detroit", "Edmonton", "Sunrise",
    "Los Angeles", "Saint Paul", "Montreal", "Nashville", "Newark", "Uniondale", "Manhattan", "Ottawa", "Philadelphia",
    "Pittsburgh", "San Jose", "St. Louis", "Tampa", "Toronto", "Vancouver", "Las Vegas", "Washington", "Winnipeg"
];
const offDefA = [9, 11, 5, 6]
const scoreA = ["runs", "goals", "points", "touchdowns", "field goals"]
const scoresA = [1, 3, 7, 6]
const equipA = ["bat & glove", "cleats & shin guards", "ball and shoes", "helmet & cleats", "helmet, pads, skates"]
const divisionsA = ["yes, 6", "no", "yes, 8", "yes, 4"]
const timeA = ["innings", "halves", "quarters", "periods"]
const lengthA = ["idk", "45m", "12m", "15m", "20m"]
const manyA = [9, 2, 3, 4]
const surfaceA = ["diamond", "pitch", "court", "field", "rink"]