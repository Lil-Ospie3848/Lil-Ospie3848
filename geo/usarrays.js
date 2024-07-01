const statename = ["- Select",
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Inidana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

/*wood*/
const nn = ["nickname",/*used on license plates or first previously used*/
    "Heart of Dixie", "The Last Frontier", "Grand Canyon State", "The Natural State", "The Golden State", "Centennial State", "Constitution State", "The First State", "Sunshine State", "Peach State", 
    "Aloha State", "Gem State", "Prairie State", "Hoosier State", "Hawkeye State", "Sunflower State", "Bluegrass State", "Pelican State", "Vacationland, Pine Tree State", "Free State", 
    "The Bay State", "The Great Lakes State", "Land of 10,000 Lakes", "Magnolia State", "Show-Me State", "Treasrue State", "Cornhusker State", "Silver State", "Granite State", "Garden State", 
    "Land of Enchantment", "Empire State", "Tar Heel State", "Peace Garden State", "Buckeye State", "Sooner State", "Beaver State", "Keystone State", "Ocean State", "Palmetto State", 
    "The Mount Rushmore State", "Volunteer State", "Lone Star State", "Beehive State", "Green Mountain State", "The Old Dominion", "Evergreen State", "Mountain State", "Badger State", "Equality State", 
]
const estab = ["",
    "Dec 14, 1819", "Jan 3, 1959", "Feb 14, 1912", "June 15, 1836", "Sept 9, 1850", "Aug 1, 1876", "Jan 9, 1788", "Dec 7, 1787", "Mar 3, 1845", "Jan 2, 1788", 
    "Aug 21, 1959", "July 3, 1890", "Dec 3, 1818", "Dec 11, 1816", "Dec 28, 1846", "Jan 29, 1861", "June 1, 1792", "Apr 30, 1812", "Mar 15, 1820", "Apr 28, 1788", 
    "Feb 6, 1788", "Jan 26, 1837", "May 11, 1858", "Dec 10, 1817", "Aug 10, 1821", "Nov 8, 1889", "Mar 1, 1867", "Oct 31, 1864", "June 21, 1788", "Dec 18, 1787", 
    "Jan 6, 1912", "July 26, 1788", "Nov 21, 1789", "Nov 2, 1889", "Mar 1, 1803", "Nov 16, 1907", "Feb 14, 1859", "Dec 12, 1787", "May 29, 1790", "May 23, 1788", 
    "Nov 2, 1889", "June 1, 1796", "Dec 29, 1845", "Jan 4, 1896", "Mar 4, 1791", "June 25, 1788", "Nov 11, 1889", "June 20, 1863", "May 29, 1848", "July 10, 1890"
]
const mott = ["motto",
    "We dare to defend our rights", "North to the Future", "God enriches", "The people rule", "Eureka", "Nothing without providence", "He who transplanted sustains", "Liberty and independence", "In God we trust", "Wisdom, justice, moderation", 
    "The life of the land is perpetuated in righteousness", "Let it be perpetual", "State soverighnty, national union", "The crossroads of America", "Our liberties we prize and our rights we will maintain", "To the stars through difficulties", "United we stand, divded we fall", "Union, justice, and confidence", "I direct", "Strong deeds, gentle words", 
    "By the sword we seek peace, but peace only under liberty", "If you seek a pleasnt peninsula, look about you", "I long to see what is beyond", "By valor and arms", "The welfare of the people is the highest law", "Gold and silver", "Equality before the law", "All for our country", "Live free or die", "Liberty and prosperity", 
    "It goes by growing", "Ever upward", "To be, rather than to seem", "Strength from the soil", "With God, all things are possible", "Hard work conquers all things", "She flies with her own wings", "Virtue, liberty and independence", "Hope", "While I breathe, I hope", 
    "Under God the people rule", "Agriculture and commerce", "Friendship", "Industry", "May the 14th star shine bright", "Thus always to tryants", "By and by", "Mountaineers are always free", "Forward", "Let weapons yield the toga", 
]

/*city*/
const dem = ["demonym",
    "Alabamian, Alabaman", "Alaskan", "Arizonan, Arizonian", "Arkanan, Arkie", "Californian", "Coloradan", "Connecticuter, Connecticotian", "Delawarean", "Floridan", "Georgian", 
    "Hawaii Resident Islander", "Idahoan", "Illinoisan, Illinoisian", "Hoosier", "Iowan", "Kansan", "Kentuckian, Kentuckyan", "Louisianian Louisianan", "Mainer", "Marylander", 
    "Massachusettsan", "Michiganian, Michigander", "Minnesotan", "Mississippian", "Missourian, Missouran", "Montanan", "Nebraskan", "Nevadan", "New Hampshirite, New Hampshire(wo)man", "New Jerseyan, New Jerseyite", 
    "New Mexican", "New Yorker", "North Carolinian", "North Dakotan", "Ohioan", "Oklahoman", "Oregonian", "Pennsylvanian", "Rhode Islander", "South Carolinian",
    "South Dakotan", "Tennessean", "Texan", "Utahn, Utahian", "Vermonter", "Virginian", "Washingtonian", "West Virginian", "Wisconsinite, Wisconsonian", "Wyomingite, Wyomingan", 
]
const captiAl = ["",
    "Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", 
    "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", 
    "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", 
    "Santa Fe", "Albany", "Raleigh", "Bismark", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", 
    "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne", 
]
const large = ["",/*by population*/
    "Huntsville", "Anchorage", "Phoenix", "Little Rock", "Los Angeles", "Denver", "Bridgeport", "Wilmington", "Jacksonville", "Atlanta",
    "Honolulu", "Boise", "Chicago", "Indianapolis", "Des Moines", "Wichita", "Louisville", "New Orleans", "Portland", "Baltimore", 
    "Boston", "Detroit", "Minneapolis", "Jackson", "Kansas City", "Billings", "Omaha", "Las Vegas", "Manchester", "Newark", 
    "Albuquerque", "New York City", "Charlotte", "Fargo", "Columbus", "Oklahoma City", "Portland", "Philadelphia", "Providence", "Charleston", 
    "Sioux Falls", "Nashville", "Houston", "Salt Lake City", "Burlingon", "Virginia Beach", "Seattle", "Charleston", "Milwaukee", "Cheyenne", 
]

/*"orange"*/
const countiesCount = ["counties",
    "67", "30", "15", "75", "58", "64", "17", "3", "67", "159", 
    "5", "44", "102", "92", "99", "105", "120", "64", "16", "24", 
    "14", "83", "87", "82", "115", "56", "93", "17", "10", "21", 
    "33", "62", "100", "53", "88", "77", "36", "67", "5", "46", 
    "66", "95", "254", "29", "14", "133", "39", "55", "72", "23", 
]
const postalAbbr = ["post",
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "FA", 
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
    "MA", "MI", "MN", "MS", "MO", "MO", "NE", "NV", "NH", "NJ", 
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
]
const tradAbbr = ["traditional",
    "Ala.", "AK.", "Ariz.", "Ark.", "Cal. Calif.", "Colo", "Conn.", "Del.", "Fla.", "Ga. Geo.", 
    "Hi. Haw.>", "Ida.", "Ill.", "Ind.", "Ioa.", "Ka. Kan. Kans.", "Ky. Ken. Kent.", "La.", "Maine", "Md. Mar. Mary.", 
    "Mass.", "Mich.", "Minn.", "Miss.", "Mo.", "Mont.", "Neb. Nebr.", "Nev.", "N.H.", "N.J. N. Jersey", 
    "N.M. New Mex.", "N.. N. York", "N.C. N. Car.", "N.D. N. Dak.", "O. Oh. Ohio", "Okla.", "Ore. Oreg.", "Pa. Penn. Penna.", "R.I.", "S.C. S. Car.",
    "S.D. S. Dak. SoDak", "Tenn.", "Tex. Texas", "Ut. Utah", "Vt. Verm.", "Wn. Wash.", "Va. Virg.", "W.V. W. Virg.", "Wis. Wisc.", "Wyo.", 
]

/*nature*/
const treEs = ["tree",
    "Longleaf pine", "Sitka spruce", "Blue palo verde", "Loblolly pine", "Coast redwood, Giant sequoia", "Colorado blue spruce", "White Oak", "American holly", "Sabal palm", "Southern live oak", 
    "Candlenut tree", "Western white pine", "White oak", "Tulip tree", "Oak", "Eastern cottonwood", "Tulip tree", "Bald cypress", "Eastern white pine", "White oak", 
    "American elm", "Eastern white pine", "Red pine", "Southern magnolia", "Flowering dogwood", "Ponderosa pine", "Eastern cottonwood", "Single leaf pinyon, Great Basin bristlecone pine", "American white birch", "Northern red oak", 
    "Pinon pine", "Sugar maple", "Pine", "American elm", "Ohio buckeye", "Eastern redbud", "Douglas fir", "Eastern hemlock", "Red maple", "Sabal palm",
    "Black hills spruce", "Tulip tree", "Pecan", "Quaking aspen", "Sugar maple", "Flowering dogwood", "Western hemlock", "Sugar maple", "Sugar maple", "Plains cottonwood", 
]
const burd = ["bird",
    "Yellowhammer", "Willow ptarmigan", "Cactus wren", "Northern mockingbird", "California quail", "Lark bunting", "American robin", "Delaware blue hen", "Northern mockingbird", "Brown thrasher", 
    "Hawaiian goose", "Mountain bluebird", "Northern cardinal", "Northern cardinal", "Eastern goldfinch", "Western meadowlark", "Northern cardinal", "Brown pelican", "Chickadee", "Baltimore oriole", 
    "Black capped chickadee", "American robin", "Common loon", "Northern mockingbird", "Eastern bluebird", "Western meadowlark", "Western meadowlark", "Mountain bluebird", "Purple finch", "Eastern goldfinch", 
    "Greater roadrunner", "Eastern bluebird", "Northern cardinal", "Western meadowlark", "Northern cardinal", "Scissor-tailed flycatcher", "Western meadowlark", "Ruffed grouse", "Rhode Island red", "Carolina wren", 
    "Ring-necked pheasant", "Northern mockingbird", "Northern mockingbird", "California gull", "Hermit thrush", "Northern cardinal", "Willow goldfinch", "Northern cardinal", "American robin", "Western meadowlark", 
]
const flower = ["flower",
    "Camelia", "Forget-me-not", "Saguaro cactus blossom", "Apple blossom", "California poppy", "Colorado blue columbine", "Mountain laurel", "Peach blossom", "Orange blossom", "Cherokee rose", 
    "Hawaiian hibiscus", "Syrina", "Violet", "Peony", "Wild rose", "Sunflower", "Goldenrod", "Magnolia", "White pine cone and tassel", "Black-eyed susan", 
    "Mayflower", "Apple blossom", "Pink and white lady's slipper", "Magnolia", "Hawthorn", "Bitterroot", "Goldenrod", "Sagebrush", "Purple lilac", "Violet", 
    "Yucca", "Rose", "Flowering dogwood", "Wild prairie rose", "Scarlet carnation", "Oklahoma rose", "Oregon grape", "Mountain laurel", "Violet", "Yellow jessamine",
    "Pasque flower", "Iris", "Bluebonnet", "Sego lily", "Red clover", "American dogwood", "Coast rhododendron", "Rhododendron", "Wood violet", "Indian paintbrush"
]