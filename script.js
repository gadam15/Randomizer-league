const randomize = document.getElementById("randomize");
const champParagraph = document.getElementById("champParagraph");

const champAllRad = document.getElementById("champAllRad");
const champTopRad = document.getElementById("champTopRad");
const champJungleRad = document.getElementById("champJungleRad");
const champMidRad = document.getElementById("champMidRad");
const champAdcRad = document.getElementById("champAdcRad");
const champSupportRad = document.getElementById("champSupportRad");

let champAll = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia",
    "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth",
    "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia",
    "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise",
    "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank",
    "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei",
    "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx",
    "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn",
    "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "K'Sante", "LeBlanc", "Lee Sin",
    "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar",
    "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser", "Morgana",
    "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne",
    "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke",
    "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc",
    "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna",
    "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir",
    "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench",
    "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
    "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne",
    "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear",
    "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick",
    "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"];

let champTop = ["Aatrox", "Akali", "Aurelion Sol", "Briar", "Camille",
    "Cho'Gath", "Corki", "Darius", "Dr. Mundo", "Fiora", "Gangplank",
    "Garen", "Gnar", "Gragas", "Gwen", "Heimerdinger", "Illaoi", "Irelia", "Jax", "Jayce",
    "Karthus", "Kayle", "Kennen", "Kled", "K'Sante", "Malphite", "Maokai", "Mordekaiser",
    "Naafiri", "Nautilus", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn",
    "Renekton", "Riven", "Rumble", "Ryze", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion",
    "Smolder", "Tahm Kench", "Teemo", "Trundle", "Tryndamere", "Urgot", "Vayne",
    "Vladimir", "Volibear", "Warwick", "Wukong", "Yorick"];

let champJungle = ["Amumu", "Bel'Veth", "Briar", "Diana", "Ekko", "Elise",
    "Evelynn", "Fiddlesticks", "Gragas", "Graves", "Gwen", "Hecarim", "Ivern", "Jarvan IV",
    "Karthus", "Kayn", "Kha'Zix", "Kindred", "Lee Sin", "Lillia",
    "Maokai", "Master Yi", "Morgana", "Nautilus", "Nidalee", "Nocturne",
    "Nunu & Willump", "Olaf", "Poppy", "Qiyana", "Rammus", "Rek'Sai", "Rell", "Rengar",
    "Rumble", "Sejuani", "Shaco", "Shen", "Shyvana", "Skarner",
    "Taliyah", "Talon", "Taric", "Trundle", "Twitch", "Udyr", "Vi", "Volibear",
    "Warwick", "Wukong", "Xin Zhao", "Zac", "Zed"];

let champMid = ["Ahri", "Akali", "Akshan", "Anivia",
    "Annie", "Aurelion Sol", "Azir", "Brand", "Cassiopeia",
    "Cho'Gath", "Corki", "Diana", "Ezreal", "Fizz", "Galio", "Gangplank", 
    "Gragas", "Heimerdinger", "Hwei", "Irelia", "Kassadin", "Katarina",
    "LeBlanc", "Lissandra", "Lux", "Malphite", "Malzahar", "Morgana",
    "Naafiri", "Neeko", "Orianna", "Pantheon", "Pyke", "Ryze",
    "Seraphine", "Shaco", "Swain", "Sylas", "Syndra", "Taliyah", "Talon",
    "Twisted Fate", "Varus", "Veigar", "Vel'Koz", "Vex", "Viktor", "Vladimir",
    "Xerath", "Yasuo", "Yone", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];

let champAdc = ["Akshan", "Aphelios", "Ashe", "Caitlyn", "Draven", "Ezreal",
    "Hwei", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karthus", "Kog'Maw",
    "Lucian", "Miss Fortune", "Nilah"," Samira", "Senna", "Sivir",
    "Smolder", "Syndra", "Tristana", "Twitch", "Varus", "Vayne", "Veigar",
    "Xayah", "Yasuo", "Zeri", "Ziggs"];


let champSupport = ["Alistar", "Amumu", "Annie", "Ashe", "Bard",
    "Blitzcrank", "Brand", "Braum", "Galio", "Gragas", "Heimerdinger", "Janna",
    "Karma", "Leona", "Lulu", "Lux", "Malphite", "Milio", "Miss Fortune", "Morgana",
    "Nami", "Nautilus", "Neeko", "Pantheon", "Pyke", "Rakan", "Rell", "Renata Glasc",
    "Senna", "Seraphine", "Shaco", "Shen", "Sona", "Soraka", "Swain", "Tahm Kench",
    "Taric", "Thresh", "Vel'Koz", "Yuumi", "Zilean", "Zyra"];

function All(){
    let max = 167; 
    let rolledChamps = Math.floor(Math.random()*max);
    champParagraph.textContent = champAll[rolledChamps];
};

function Top(){
    let max = 56;
    let rolledChamps = Math.floor(Math.random()*max);
    champParagraph.textContent = champTop[rolledChamps];
}

function Jungle(){
    let max = 54;
    let rolledChamps = Math.floor(Math.random()*max);
    champParagraph.textContent = champJungle[rolledChamps];
}

function Mid(){
    let max = 55;
    let rolledChamps = Math.floor(Math.random()*max);
    champParagraph.textContent = champMid[rolledChamps];
}

function Adc(){
    let max = 29;
    let rolledChamps = Math.floor(Math.random()*max);
    champParagraph.textContent = champAdc[rolledChamps];
}

function Support(){
    let max = 42;
    let rolledChamps = Math.floor(Math.random()*max);
    champParagraph.textContent = champSupport[rolledChamps];
}

randomizeBtn.onclick = function(){
    if(champAllRad.checked){
        All();
    }else if(champTopRad.checked){
        Top();
    } else if(champJungleRad.checked){
        Jungle();
    } else if(champMidRad.checked){
        Mid();
    } else if(champAdcRad.checked){
        Adc();
    } else if(champSupportRad.checked){
        Support();
    } else {
        window.alert("Select role");
    }
}

// RUNES

const runeMain = document.getElementById("runeMain");
const runeSecondary = document.getElementById("runeSecondary");
const runeShards = document.getElementById("runeShards");
const runeMainType = document.getElementById("runeMainType");
const runeSecondaryType = document.getElementById("runeSecondaryType");
const randomizeRuneBtn = document.getElementById("randomizeRuneBtn");
const mainRuneP = document.getElementById("mainRuneP");
const secondaryRuneP = document.getElementById("secondaryRuneP");



let mainRune = ["Precision", "Domination", "Sorcery", "Resolve", "Inspiration"];

let runePrecision = [
    ["Press the Attack", "Fleet Footwork","Conqueror"],
    ["Absorb Life", "Triumph", "Presence of Mind"],
    ["Legend: Alacrity", "Legend: Haste", "Legend: Bloodline"],
    ["Coup de Grace", "Cut Down", "Last Stand"]
];

let runeDomination = [
    ["Electrocude", "Dark Harvest", "Hail of Blades"],
    ["Cheap Shot", "Taste od Blood", "Sudden Impact"],
    ["Zombie Ward", "Ghost Poro", "Eyeball Collection"],
    ["Treasure Hunter", "Relenthess Hunter", "Ultimate Hunter"]
];

let runeSorcery = [
    ["Summon Aery", "Arcane Comet", "Phase Rush"],
    ["Nullifying Orb", "Manaflow Band", "Nimbus Cloak"],
    ["Transcendence", "Celerity", "Absolute Focus"],
    ["Scorch", "Waterwalking", "Gathering Storm"]
];

let runeResolve = [
    ["Grasp of Undying", "Aftershock", "Guardian"],
    ["Demolish", "Font of Life", "Shield Bash"],
    ["Conditioning", "Second Wind", "Bone Plating"],
    ["Overgrowth", "Revitalize", "Unflinching"]
];

let runeInspiration = [
    ["Glacial Augment", "Unsealed Spellbook", "First Strike"],
    ["Hextech Flashtraption", "Magical Footwear", "Cash Back"],
    ["Triple Tonic", "Time Warp Tonic", "Biscuit Delivery"],
    ["Cosmic Insight", "Approach Velocity", "Jack of All Trades"]
];

let runeShard = [
    ["Adaptive Force", "Attack Speed", "Ability Haste"],
    ["Adaptive Force", "Movement Speed", "Scaling Health"],
    ["Bonus Health", "Tenacity", "Scaling Health"]
];


randomizeRuneBtn.onclick = function(){
    
    let randThree = Math.floor(Math.random()*3);
    let randMainRune = Math.floor(Math.random()*5);
    let randSecondaryRune = Math.floor(Math.random()*4);
    
    let removing;
    let firstSlot;
    let secondSlot;
    
    function removingSlot(){
        firstSlot = Math.floor(Math.random()*3)+1;
        secondSlot = Math.floor(Math.random()*3)+1;
    
        while(firstSlot == secondSlot){
            secondSlot = Math.floor(Math.random()*3)+1;
        }
    }

    if(randMainRune === 0){
        runeMain.innerText = runePrecision[0][randThree] + "\n" + runePrecision[1][randThree] + "\n" + runePrecision[2][randThree] + "\n" + runePrecision[3][randThree];
        runeShards.innerText = runeShard[0][randThree] + "\n" + runeShard[1][randThree] + "\n" + runeShard[2][randThree];
        mainRune.splice(0,1);
        let secondaryRune = mainRune[randSecondaryRune];
        runeMainType.innerText = "Precision";
        runeMainType.style = "color: darkorange";
        
        removingSlot();
    
        if(randSecondaryRune === 0){
            runeSecondary.innerText = runeDomination[firstSlot][randThree] + "\n" + runeDomination[secondSlot][randThree];
            runeSecondaryType.innerText = "Domination";
            runeSecondaryType.style = "color: red";
        }
        else if(randSecondaryRune === 1){
            runeSecondary.innerText = runeSorcery[firstSlot][randThree] + "\n" + runeSorcery[secondSlot][randThree];
            runeSecondaryType.innerText = "Sorcery";
            runeSecondaryType.style = "color: darkmagenta";
        }
        else if(randSecondaryRune === 2){
            runeSecondary.innerText = runeResolve[firstSlot][randThree] + "\n" + runeResolve[secondSlot][randThree];
            runeSecondaryType.innerText = "Resolve";
            runeSecondaryType.style = "color: green";
        }
        else if(randSecondaryRune === 3){
            runeSecondary.innerText = runeInspiration[firstSlot][randThree] + "\n" + runeInspiration[secondSlot][randThree];
            runeSecondaryType.innerText = "Inspiration";
            runeSecondaryType.style = "color: blue";
        }
    }
    else if(randMainRune === 1){
        runeMain.innerText = runeDomination[0][randThree] + "\n" + runeDomination[1][randThree] + "\n" + runeDomination[2][randThree] + "\n" + runeDomination[3][randThree];
        runeShards.innerText = runeShard[0][randThree] + "\n" + runeShard[1][randThree] + "\n" + runeShard[2][randThree];
        mainRune.splice(1,1);
        runeMainType.innerText = "Domination";
        runeMainType.style = "color: red";

        removingSlot();
    
        if(randSecondaryRune === 0){
            runeSecondary.innerText = runePrecision[firstSlot][randThree] + "\n" + runePrecision[secondSlot][randThree];
            runeSecondaryType.innerText = "Precison"; 
            runeSecondaryType.style = "color: darkorange";
        }
        else if(randSecondaryRune === 1){
            runeSecondary.innerText = runeSorcery[firstSlot][randThree] + "\n" + runeSorcery[secondSlot][randThree];
            runeSecondaryType.innerText = "Sorcery";
            runeSecondaryType.style = "color: darkmagenta";
        }
        else if(randSecondaryRune === 2){
            runeSecondary.innerText = runeResolve[firstSlot][randThree] + "\n" + runeResolve[secondSlot][randThree];
            runeSecondaryType.innerText = "Resolve";
            runeSecondaryType.style = "color: green";
        }
        else if(randSecondaryRune === 3){
            runeSecondary.innerText = runeInspiration[firstSlot][randThree] + "\n" + runeInspiration[secondSlot][randThree];
            runeSecondaryType.innerText = "Inspiration";
            runeSecondaryType.style = "color: blue";
        }
    }
    else if(randMainRune === 2){
        runeMain.innerText = runeSorcery[0][randThree] + "\n" + runeSorcery[1][randThree] + "\n" + runeSorcery[2][randThree] + "\n" + runeSorcery[3][randThree];
        runeShards.innerText = runeShard[0][randThree] + "\n" + runeShard[1][randThree] + "\n" + runeShard[2][randThree];
        mainRune.splice(2,1);
        runeMainType.innerText = "Sorcery";
        runeMainType.style = "color: darkmagenta";

        removingSlot();
    
        if(randSecondaryRune === 0){
            runeSecondary.innerText = runePrecision[firstSlot][randThree] + "\n" + runePrecision[secondSlot][randThree];
            runeSecondaryType.innerText = "Precison";
            runeSecondaryType.style = "color: darkorange";
        }
        else if(randSecondaryRune === 1){
            runeSecondary.innerText = runeDomination[firstSlot][randThree] + "\n" + runeDomination[secondSlot][randThree];
            runeSecondaryType.innerText = "Domination";
            runeSecondaryType.style = "color: red";
        }
        else if(randSecondaryRune === 2){
            runeSecondary.innerText = runeResolve[firstSlot][randThree] + "\n" + runeResolve[secondSlot][randThree];
            runeSecondaryType.innerText = "Resolve";
            runeSecondaryType.style = "color: green";
        }
        else if(randSecondaryRune === 3){
            runeSecondary.innerText = runeInspiration[firstSlot][randThree] + "\n" + runeInspiration[secondSlot][randThree];
            runeSecondaryType.innerText = "Inspiration";
            runeSecondaryType.style = "color: blue";
        }
    }
    else if(randMainRune === 3){
        runeMain.innerText = runeResolve[0][randThree] + "\n" + runeResolve[1][randThree] + "\n" + runeResolve[2][randThree] + "\n" + runeResolve[3][randThree];
        runeShards.innerText = runeShard[0][randThree] + "\n" + runeShard[1][randThree] + "\n" + runeShard[2][randThree];
        mainRune.splice(3,1);
        runeMainType.innerText = "Resolve";
        runeMainType.style = "color: green";

        removingSlot();
    
        if(randSecondaryRune === 0){
            runeSecondary.innerText = runePrecision[firstSlot][randThree] + "\n" + runePrecision[secondSlot][randThree];
            runeSecondaryType.innerText = "Precison";
            runeSecondaryType.style = "color: darkorange";
        }
        else if(randSecondaryRune === 1){
            runeSecondary.innerText = runeDomination[firstSlot][randThree] + "\n" + runeDomination[secondSlot][randThree];
            runeSecondaryType.innerText = "Domination";
            runeSecondaryType.style = "color: red";
        }
        else if(randSecondaryRune === 2){
            runeSecondary.innerText = runeSorcery[firstSlot][randThree] + "\n" + runeSorcery[secondSlot][randThree];
            runeSecondaryType.innerText = "Sorcery";
            runeSecondaryType.style = "color: darkmagenta";
        }
        else if(randSecondaryRune === 3){
            runeSecondary.innerText = runeInspiration[firstSlot][randThree] + "\n" + runeInspiration[secondSlot][randThree];
            runeSecondaryType.innerText = "Inspiration";
            runeSecondaryType.style = "color: blue";
        }
    }
    else if(randMainRune === 4){
        runeMain.innerText = runeInspiration[0][randThree] + "\n" + runeInspiration[1][randThree] + "\n" + runeInspiration[2][randThree] + "\n" + runeInspiration[3][randThree];
        runeShards.innerText = runeShard[0][randThree] + "\n" + runeShard[1][randThree] + "\n" + runeShard[2][randThree];
        mainRune.splice(4,1);
        runeMainType.innerText = "Inspiration";
        runeMainType.style = "color: blue";

        removingSlot();
    
        if(randSecondaryRune === 0){
            runeSecondary.innerText = runePrecision[firstSlot][randThree] + "\n" + runePrecision[secondSlot][randThree];
            runeSecondaryType.innerText = "Precison";
            runeSecondaryType.style = "color: darkorange";
        }
        else if(randSecondaryRune === 1){
            runeSecondary.innerText = runeDomination[firstSlot][randThree] + "\n" + runeDomination[secondSlot][randThree];
            runeSecondaryType.innerText = "Domination";
            runeSecondaryType.style = "color: red";
        }
        else if(randSecondaryRune === 2){
            runeSecondary.innerText = runeSorcery[firstSlot][randThree] + "\n" + runeSorcery[secondSlot][randThree];
            runeSecondaryType.innerText = "Sorcery";
            runeSecondaryType.style = "color: darkmagenta";
        }
        else if(randSecondaryRune === 3){
            runeSecondary.innerText = runeResolve[firstSlot][randThree] + "\n" +runeResolve[secondSlot][randThree];
            runeSecondaryType.innerText = "Resolve";
            runeSecondaryType.style = "color: green";
        }
    }
}