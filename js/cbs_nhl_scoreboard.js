const team1Score = document.querySelector('#team1Score');
const team2Score = document.querySelector('#team2Score');
const team1Select = document.querySelector('#team1Select');
const team1 = document.querySelector('#team1');
const team1Name = document.querySelector('#team1Name');
const team1SVG = document.querySelector('#team1SVG');
const team2Select = document.querySelector('#team2Select');
const team2 = document.querySelector('#team2');
const team2Name = document.querySelector('#team2Name');
const team2SVG = document.querySelector('#team2SVG');

function swapTeams() {
    var tempTeamValue = team1Select.value;
    team1Select.value = team2Select.value;
    team2Select.value = tempTeamValue;
    
    var tempSeedValue = team1SeedValue.value;
    team1SeedValue.value = team2SeedValue.value;
    team2SeedValue.value = tempSeedValue;

    var tempSVG = team1SVG.src;
    var tempName = team1Name.innerHTML;
    var tempColor = team1.style.backgroundColor;
    var tempColorDarkened = team1Score.style.backgroundColor;
    var tempSeed = team1Seed.innerHTML;
    var tempMargins = team1Seed.style.marginLeft;
    team1SVG.src = team2SVG.src;
    team1Name.innerHTML = team2Name.innerHTML;
    team1.style.backgroundColor = team2.style.backgroundColor;
    team1Score.style.backgroundColor = team2Score.style.backgroundColor;
    team1Seed.innerHTML = team2Seed.innerHTML;
    team1Seed.style.marginLeft = team2Seed.style.marginLeft;
    team2SVG.src = tempSVG;
    team2Name.innerHTML = tempName;
    team2.style.backgroundColor = tempColor;
    team2Score.style.backgroundColor = tempColorDarkened;
    team2Seed.innerHTML = tempSeed;
    team2Seed.style.marginLeft = tempMargins;
}

function team1Pick() {
    switch(team1Select.value) {
        case 'none':
            team1SVG.src = "img/nhl.svg";
            team1Name.innerHTML = 'N/A';
            team1.style.backgroundColor = 'black';
            team1Score.style.backgroundColor = 'black';
            break;
        case 'ana':
            team1SVG.src = "img/ducks.svg";
            team1Name.innerHTML = 'ANA';
            team1.style.backgroundColor = '#000000';
            team1Score.style.backgroundColor = '#000000';
            break;
        case 'ari':
            team1SVG.src = "img/coyotes.svg";
            team1Name.innerHTML = 'ARI';
            team1.style.backgroundColor = '#000000';
            team1Score.style.backgroundColor = '#000000';
            break;
        case 'bos':
            team1SVG.src = "img/bruins.svg";
            team1Name.innerHTML = 'BOS';
            team1.style.backgroundColor = '#000000';
            team1Score.style.backgroundColor = '#000000';
            break;
        case 'buf':
            team1SVG.src = "img/sabres.svg";
            team1Name.innerHTML = 'BUF';
            team1.style.backgroundColor = '#003087';
            team1Score.style.backgroundColor = '#002d80';
            break;
        case 'cgy':
            team1SVG.src = "img/flames.svg";
            team1Name.innerHTML = 'CGY';
            team1.style.backgroundColor = '#C8102E';
            team1Score.style.backgroundColor = '#be0f2b';
            break;
        case 'car':
            team1SVG.src = "img/hurricanes.svg";
            team1Name.innerHTML = 'CAR';
            team1.style.backgroundColor = '#C8102E';
            team1Score.style.backgroundColor = '#be0f2b';
            break;
        case 'chi':
            team1SVG.src = "img/blackhawks.svg";
            team1Name.innerHTML = 'CHI';
            team1.style.backgroundColor = '#C8102E';
            team1Score.style.backgroundColor = '#be0f2b';
            break;
        case 'col':
            team1SVG.src = "img/avalanche.svg";
            team1Name.innerHTML = 'COL';
            team1.style.backgroundColor = '#6F263D';
            team1Score.style.backgroundColor = '#692439';
            break;
        case 'cbj':
            team1SVG.src = "img/blue_jackets.svg";
            team1Name.innerHTML = 'CBJ';
            team1.style.backgroundColor = '#041E42';
            team1Score.style.backgroundColor = '#031c3e';
            break;
        case 'dal':
            team1SVG.src = "img/stars.svg";
            team1Name.innerHTML = 'DAL';
            team1.style.backgroundColor = '#00843D';
            team1Score.style.backgroundColor = '#007d39';
            break;
        case 'det':
            team1SVG.src = "img/red_wings.svg";
            team1Name.innerHTML = 'DET';
            team1.style.backgroundColor = '#C8102E';
            team1Score.style.backgroundColor = '#be0f2b';
            break;
        case 'edm':
            team1SVG.src = "img/oilers.svg";
            team1Name.innerHTML = 'EDM';
            team1.style.backgroundColor = '#00205B';
            team1Score.style.backgroundColor = '#001e56';
            break;
        case 'fla':
            team1SVG.src = "img/panthers.svg";
            team1Name.innerHTML = 'FLA';
            team1.style.backgroundColor = '#C8102E';
            team1Score.style.backgroundColor = '#be0f2b';
            break;
        case 'la':
            team1SVG.src = "img/kings.svg";
            team1Name.innerHTML = 'LA';
            team1.style.backgroundColor = '#000000';
            team1Score.style.backgroundColor = '#000000';
            break;
        case 'min':
            team1SVG.src = "img/wild.svg";
            team1Name.innerHTML = 'MIN';
            team1.style.backgroundColor = '#154734';
            team1Score.style.backgroundColor = '#134331';
            break;
        case 'mtl':
            team1SVG.src = "img/canadiens.svg";
            team1Name.innerHTML = 'MTL';
            team1.style.backgroundColor = '#A6192E';
            team1Score.style.backgroundColor = '#9d172b';
            break;
        case 'nsh':
            team1SVG.src = "img/predators.svg";
            team1Name.innerHTML = 'NSH';
            team1.style.backgroundColor = '#FFB81C';
            team1Score.style.backgroundColor = '#ffb30d';
            break;
        case 'nj':
            team1SVG.src = "img/devils.svg";
            team1Name.innerHTML = 'NJ';
            team1.style.backgroundColor = '#C8102E';
            team1Score.style.backgroundColor = '#be0f2b';
            break;
        case 'nyi':
            team1SVG.src = "img/islanders.svg";
            team1Name.innerHTML = 'NYI';
            team1.style.backgroundColor = '#003087';
            team1Score.style.backgroundColor = '#002d80';
            break;
        case 'nyr':
            team1SVG.src = "img/rangers.svg";
            team1Name.innerHTML = 'NYR';
            team1.style.backgroundColor = '#0033A0';
            team1Score.style.backgroundColor = '#003098';
            break;
        case 'ott':
            team1SVG.src = "img/senators.svg";
            team1Name.innerHTML = 'OTT';
            team1.style.backgroundColor = '#000000';
            team1Score.style.backgroundColor = '#000000';
            break;
        case 'phi':
            team1SVG.src = "img/flyers.svg";
            team1Name.innerHTML = 'PHI';
            team1.style.backgroundColor = '#FA4616';
            team1Score.style.backgroundColor = '#f93b08';
            break;
        case 'pit':
            team1SVG.src = "img/penguins.svg";
            team1Name.innerHTML = 'PIT';
            team1.style.backgroundColor = '#000000';
            team1Score.style.backgroundColor = '#000000';
            break;
        case 'sj':
            team1SVG.src = "img/sharks.svg";
            team1Name.innerHTML = 'SJ';
            team1.style.backgroundColor = '#006272';
            team1Score.style.backgroundColor = '#005d6c';
            break;
        case 'sea':
            team1SVG.src = "img/kraken.svg";
            team1Name.innerHTML = 'SEA';
            team1.style.backgroundColor = '#051C2C';
            team1Score.style.backgroundColor = '#041a29';
            break;
        case 'stl':
            team1SVG.src = "img/blues.svg";
            team1Name.innerHTML = 'STL';
            team1.style.backgroundColor = '#003087';
            team1Score.style.backgroundColor = '#002d80';
            break;
        case 'tb':
            team1SVG.src = "img/lightning.svg";
            team1Name.innerHTML = 'TB';
            team1.style.backgroundColor = '#00205B';
            team1Score.style.backgroundColor = '#001e56';
            break;
        case 'tor':
            team1SVG.src = "img/maple_leafs.svg";
            team1Name.innerHTML = 'TOR';
            team1.style.backgroundColor = '#00205B';
            team1Score.style.backgroundColor = '#001e56';
            break;
        case 'van':
            team1SVG.src = "img/canucks.svg";
            team1Name.innerHTML = 'VAN';
            team1.style.backgroundColor = '#00205B';
            team1Score.style.backgroundColor = '#001e56';
            break;
        case 'vgk':
            team1SVG.src = "img/golden_knights.svg";
            team1Name.innerHTML = 'VGK';
            team1.style.backgroundColor = '#333F48';
            team1Score.style.backgroundColor = '#303b44';
            break;
        case 'wsh':
            team1SVG.src = "img/capitals.svg";
            team1Name.innerHTML = 'WSH';
            team1.style.backgroundColor = '#C8102E';
            team1Score.style.backgroundColor = '#be0f2b';
            break;
        case 'wpg':
            team1SVG.src = "img/jets.svg";
            team1Name.innerHTML = 'WPG';
            team1.style.backgroundColor = '#041E42';
            team1Score.style.backgroundColor = '#031c3e';
            break;
        default:
            team1SVG.src = "img/nhl.svg";
            team1Name.innerHTML = 'N/A';
            team1.style.backgroundColor = 'black';
            team1Score.style.backgroundColor = 'black';
    }
}

function team2Pick() {
    switch(team2Select.value) {
        case 'none':
            team2SVG.src = "img/nhl.svg";
            team2Name.innerHTML = 'N/A';
            team2.style.backgroundColor = 'black';
            team2Score.style.backgroundColor = 'black';
            break;
        case 'ana':
            team2SVG.src = "img/ducks.svg";
            team2Name.innerHTML = 'ANA';
            team2.style.backgroundColor = '#000000';
            team2Score.style.backgroundColor = '#000000';
            break;
        case 'ari':
            team2SVG.src = "img/coyotes.svg";
            team2Name.innerHTML = 'ARI';
            team2.style.backgroundColor = '#000000';
            team2Score.style.backgroundColor = '#000000';
            break;
        case 'bos':
            team2SVG.src = "img/bruins.svg";
            team2Name.innerHTML = 'BOS';
            team2.style.backgroundColor = '#000000';
            team2Score.style.backgroundColor = '#000000';
            break;
        case 'buf':
            team2SVG.src = "img/sabres.svg";
            team2Name.innerHTML = 'BUF';
            team2.style.backgroundColor = '#003087';
            team2Score.style.backgroundColor = '#002d80';
            break;
        case 'cgy':
            team2SVG.src = "img/flames.svg";
            team2Name.innerHTML = 'CGY';
            team2.style.backgroundColor = '#C8102E';
            team2Score.style.backgroundColor = '#be0f2b';
            break;
        case 'car':
            team2SVG.src = "img/hurricanes.svg";
            team2Name.innerHTML = 'CAR';
            team2.style.backgroundColor = '#C8102E';
            team2Score.style.backgroundColor = '#be0f2b';
            break;
        case 'chi':
            team2SVG.src = "img/blackhawks.svg";
            team2Name.innerHTML = 'CHI';
            team2.style.backgroundColor = '#C8102E';
            team2Score.style.backgroundColor = '#be0f2b';
            break;
        case 'col':
            team2SVG.src = "img/avalanche.svg";
            team2Name.innerHTML = 'COL';
            team2.style.backgroundColor = '#6F263D';
            team2Score.style.backgroundColor = '#692439';
            break;
        case 'cbj':
            team2SVG.src = "img/blue_jackets.svg";
            team2Name.innerHTML = 'CBJ';
            team2.style.backgroundColor = '#041E42';
            team2Score.style.backgroundColor = '#031c3e';
            break;
        case 'dal':
            team2SVG.src = "img/stars.svg";
            team2Name.innerHTML = 'DAL';
            team2.style.backgroundColor = '#00843D';
            team2Score.style.backgroundColor = '#007d39';
            break;
        case 'det':
            team2SVG.src = "img/red_wings.svg";
            team2Name.innerHTML = 'DET';
            team2.style.backgroundColor = '#C8102E';
            team2Score.style.backgroundColor = '#be0f2b';
            break;
        case 'edm':
            team2SVG.src = "img/oilers.svg";
            team2Name.innerHTML = 'EDM';
            team2.style.backgroundColor = '#00205B';
            team2Score.style.backgroundColor = '#001e56';
            break;
        case 'fla':
            team2SVG.src = "img/panthers.svg";
            team2Name.innerHTML = 'FLA';
            team2.style.backgroundColor = '#C8102E';
            team2Score.style.backgroundColor = '#be0f2b';
            break;
        case 'la':
            team2SVG.src = "img/kings.svg";
            team2Name.innerHTML = 'LA';
            team2.style.backgroundColor = '#000000';
            team2Score.style.backgroundColor = '#000000';
            break;
        case 'min':
            team2SVG.src = "img/wild.svg";
            team2Name.innerHTML = 'MIN';
            team2.style.backgroundColor = '#154734';
            team2Score.style.backgroundColor = '#134331';
            break;
        case 'mtl':
            team2SVG.src = "img/canadiens.svg";
            team2Name.innerHTML = 'MTL';
            team2.style.backgroundColor = '#A6192E';
            team2Score.style.backgroundColor = '#9d172b';
            break;
        case 'nsh':
            team2SVG.src = "img/predators.svg";
            team2Name.innerHTML = 'NSH';
            team2.style.backgroundColor = '#FFB81C';
            team2Score.style.backgroundColor = '#ffb30d';
            break;
        case 'nj':
            team2SVG.src = "img/devils.svg";
            team2Name.innerHTML = 'NJ';
            team2.style.backgroundColor = '#C8102E';
            team2Score.style.backgroundColor = '#be0f2b';
            break;
        case 'nyi':
            team2SVG.src = "img/islanders.svg";
            team2Name.innerHTML = 'NYI';
            team2.style.backgroundColor = '#003087';
            team2Score.style.backgroundColor = '#002d80';
            break;
        case 'nyr':
            team2SVG.src = "img/rangers.svg";
            team2Name.innerHTML = 'NYR';
            team2.style.backgroundColor = '#0033A0';
            team2Score.style.backgroundColor = '#003098';
            break;
        case 'ott':
            team2SVG.src = "img/senators.svg";
            team2Name.innerHTML = 'OTT';
            team2.style.backgroundColor = '#000000';
            team2Score.style.backgroundColor = '#000000';
            break;
        case 'phi':
            team2SVG.src = "img/flyers.svg";
            team2Name.innerHTML = 'PHI';
            team2.style.backgroundColor = '#FA4616';
            team2Score.style.backgroundColor = '#f93b08';
            break;
        case 'pit':
            team2SVG.src = "img/penguins.svg";
            team2Name.innerHTML = 'PIT';
            team2.style.backgroundColor = '#000000';
            team2Score.style.backgroundColor = '#000000';
            break;
        case 'sj':
            team2SVG.src = "img/sharks.svg";
            team2Name.innerHTML = 'SJ';
            team2.style.backgroundColor = '#006272';
            team2Score.style.backgroundColor = '#005d6c';
            break;
        case 'sea':
            team2SVG.src = "img/kraken.svg";
            team2Name.innerHTML = 'SEA';
            team2.style.backgroundColor = '#051C2C';
            team2Score.style.backgroundColor = '#041a29';
            break;
        case 'stl':
            team2SVG.src = "img/blues.svg";
            team2Name.innerHTML = 'STL';
            team2.style.backgroundColor = '#003087';
            team2Score.style.backgroundColor = '#002d80';
            break;
        case 'tb':
            team2SVG.src = "img/lightning.svg";
            team2Name.innerHTML = 'TB';
            team2.style.backgroundColor = '#00205B';
            team2Score.style.backgroundColor = '#001e56';
            break;
        case 'tor':
            team2SVG.src = "img/maple_leafs.svg";
            team2Name.innerHTML = 'TOR';
            team2.style.backgroundColor = '#00205B';
            team2Score.style.backgroundColor = '#001e56';
            break;
        case 'van':
            team2SVG.src = "img/canucks.svg";
            team2Name.innerHTML = 'VAN';
            team2.style.backgroundColor = '#00205B';
            team2Score.style.backgroundColor = '#001e56';
            break;
        case 'vgk':
            team2SVG.src = "img/golden_knights.svg";
            team2Name.innerHTML = 'VGK';
            team2.style.backgroundColor = '#333F48';
            team2Score.style.backgroundColor = '#303b44';
            break;
        case 'wsh':
            team2SVG.src = "img/capitals.svg";
            team2Name.innerHTML = 'WSH';
            team2.style.backgroundColor = '#C8102E';
            team2Score.style.backgroundColor = '#be0f2b';
            break;
        case 'wpg':
            team2SVG.src = "img/jets.svg";
            team2Name.innerHTML = 'WPG';
            team2.style.backgroundColor = '#041E42';
            team2Score.style.backgroundColor = '#031c3e';
            break;
        default:
            team2SVG.src = "img/nhl.svg";
            team2Name.innerHTML = 'N/A';
            team2.style.backgroundColor = 'black';
            team2Score.style.backgroundColor = 'black';
    }
}

function team1ScoreInput() {
    const team1ScoreValue = document.querySelector('#team1ScoreValue').value;
    if (team1ScoreValue < 0 || team1ScoreValue == '') {
        team1Score.innerHTML = '0';
    } else {
        team1Score.innerHTML = team1ScoreValue;
    }
}

function team2ScoreInput() {
    const team2ScoreValue = document.querySelector('#team2ScoreValue').value;
    if (team2ScoreValue < 0 || team2ScoreValue == '') {
        team2Score.innerHTML = '0';
    } else {
        team2Score.innerHTML = team2ScoreValue;
    }
}

const result = document.querySelector('#result');
const overtimeLabel = document.querySelector('#overtimeLabel');
const overtimeCheck = document.querySelector('#overtimeCheck');
const shootoutLabel = document.querySelector('#shootoutLabel');
const shootoutCheck = document.querySelector('#shootoutCheck');

function overtimeReg() {
    if (overtimeCheck.checked) {
        result.innerHTML = 'F/OT';
        shootoutCheck.checked = false;
    } else {
        result.innerHTML = 'FINAL';
    }
}

function shootout() {
    if (shootoutCheck.checked) {
        result.innerHTML = 'F/SO';
        overtimeCheck.checked = false;
    } else {
        result.innerHTML = 'FINAL';
    }
}

function overtimePost() {
    const overtimePostValue = document.querySelector('#overtimePostValue').value;
    if (overtimePostValue < 1) {
        result.innerHTML = 'FINAL';
    } else if (overtimePostValue == 1) {
        result.innerHTML = 'F/OT';
    } else {
        result.innerHTML = 'F/' + overtimePostValue + 'OT';
    }
}

const round = document.querySelector('#round');
const roundText = document.querySelector('#roundText');
const playoffsCheck = document.querySelector('#playoffsCheck');
const playoffsBreak = document.querySelector('#playoffsBreak');
const roundLabel = document.querySelector('#roundLabel');
const roundBreak = document.querySelector('#roundBreak');
const roundValue = document.querySelector('#roundValue');
const awayLabel = document.querySelector('#awayLabel');
const awayBreak = document.querySelector('#awayBreak');
const homeLabel = document.querySelector('#homeLabel');
const homeBreak = document.querySelector('#homeBreak');
const team1SeedValue = document.querySelector('#team1SeedValue');
const team2SeedValue = document.querySelector('#team2SeedValue');
const overtimePostLabel = document.querySelector('#overtimePostLabel');
const overtimePostValue = document.querySelector('#overtimePostValue');
const overtimeBreak = document.querySelector('#overtimeBreak');
const team1Seed = document.querySelector('#team1Seed');
const team2Seed = document.querySelector('#team2Seed');

function showPlayoffs() {
    if (playoffsCheck.checked) {
        playoffsBreak.style.display = 'block';
        round.style.display = 'block';
        roundLabel.style.display = 'inline-block';
        roundBreak.style.display = 'block';
        roundValue.style.display = 'inline-block';
        awayLabel.style.display = 'inline-block';
        awayBreak.style.display = 'block';
        homeLabel.style.display = 'inline-block';
        homeBreak.style.display = 'block';
        team1SeedValue.style.display = 'inline-block';
        team2SeedValue.style.display = 'inline-block';
        overtimeLabel.style.display = 'none';
        overtimeCheck.style.display = 'none';
        overtimeCheck.checked = false;
        shootoutLabel.style.display = 'none';
        shootoutCheck.style.display = 'none';
        shootoutCheck.checked = false;
        overtimePostLabel.style.display = 'inline-block';
        overtimePostValue.style.display = 'inline-block';
        overtimeBreak.style.display = 'none';
        result.innerHTML = 'FINAL';
    } else {
        round.style.display = 'none';
        roundLabel.style.display = 'none';
        roundBreak.style.display = 'none';
        roundValue.style.display = 'none';
        roundValue.value = '';
        awayLabel.style.display = 'none';
        awayBreak.style.display = 'none';
        homeLabel.style.display = 'none';
        homeBreak.style.display = 'none';
        team1SeedValue.style.display = 'none';
        team1SeedValue.value = '';
        team2SeedValue.style.display = 'none';
        team2SeedValue.value = '';
        team1Name.style.left = '250px';
        team2Name.style.left = '250px';
        team1Seed.innerHTML = '';
        team2Seed.innerHTML = '';
        overtimeLabel.style.display = 'inline-block';
        overtimeCheck.style.display = 'inline-block';
        shootoutLabel.style.display = 'inline-block';
        shootoutCheck.style.display = 'inline-block';
        overtimePostLabel.style.display = 'none';
        overtimePostValue.style.display = 'none';
        overtimePostValue.value = '';
        overtimeBreak.style.display = 'block';
        result.innerHTML = 'FINAL';
        roundText.innerHTML = 'N/A';
    }
}

function roundInput() {
    roundText.innerHTML = roundValue.value;
}

function teamPositioning() {
    if (team1SeedValue.value != '' || team2SeedValue.value != '') {
        team1Name.style.left = '280px';
        team2Name.style.left = '280px';
    } else if (team1SeedValue.value == '' && team2SeedValue.value == '') {
        team1Name.style.left = '250px';
        team2Name.style.left = '250px';
    } else {
        team1Name.style.left = '250px';
    }
    if (team1SeedValue.value.length >= 2) {
        team1Seed.style.marginLeft = '3px';
    } else {
        team1Seed.style.marginLeft = '10px';
    }
    if (team2SeedValue.value.length >= 2) {
        team2Seed.style.marginLeft = '3px';
    } else {
        team2Seed.style.marginLeft = '10px';
    }
}

function team1SeedInput() {
    team1Seed.innerHTML = team1SeedValue.value;
    teamPositioning();
}

function team2SeedInput() {
    team2Seed.innerHTML = team2SeedValue.value;
    teamPositioning();
}