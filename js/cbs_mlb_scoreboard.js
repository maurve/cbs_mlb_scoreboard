const team1Score = document.querySelector('#team1Score');
const team2Score = document.querySelector('#team2Score');
const team1Select = document.querySelector('#team1Select');
const team1 = document.querySelector('#team1');
const team1Name = document.querySelector('#team1Name');
const team2Select = document.querySelector('#team2Select');
const team2 = document.querySelector('#team2');
const team2Name = document.querySelector('#team2Name');

function swapTeams() {
    var tempTeamValue = team1Select.value;
    team1Select.value = team2Select.value;
    team2Select.value = tempTeamValue;
    
    var tempSeedValue = team1SeedValue.value;
    team1SeedValue.value = team2SeedValue.value;
    team2SeedValue.value = tempSeedValue;

    var tempName = team1Name.innerHTML;
    var tempColor = team1.style.backgroundColor;
    var tempColorDarkened = team1Score.style.backgroundColor;
    var tempSeed = team1Seed.innerHTML;
    var tempMargins = team1Seed.style.marginLeft;
    team1Name.innerHTML = team2Name.innerHTML;
    team1.style.backgroundColor = team2.style.backgroundColor;
    team1Score.style.backgroundColor = team2Score.style.backgroundColor;
    team1Seed.innerHTML = team2Seed.innerHTML;
    team1Seed.style.marginLeft = team2Seed.style.marginLeft;
    team2Name.innerHTML = tempName;
    team2.style.backgroundColor = tempColor;
    team2Score.style.backgroundColor = tempColorDarkened;
    team2Seed.innerHTML = tempSeed;
    team2Seed.style.marginLeft = tempMargins;
}

function team1Pick() {
    switch(team1Select.value) {
        case 'none':
            team1Name.innerHTML = 'N/A';
            team1.style.backgroundColor = '#191919';
            team1Score.style.backgroundColor = '#171717';
            break;
        case 'ari':
            team1Name.innerHTML = 'ARI';
            team1.style.backgroundColor = '#a71930';
            team1Score.style.backgroundColor = '#9e172d';
            break;
        case 'atl':
            team1Name.innerHTML = 'ATL';
            team1.style.backgroundColor = '#13274f';
            team1Score.style.backgroundColor = '#12254b';
            break;
        case 'bal':
            team1Name.innerHTML = 'BAL';
            team1.style.backgroundColor = '#df4601';
            team1Score.style.backgroundColor = '#d34200';
            break;
        case 'bos':
            team1Name.innerHTML = 'BOS';
            team1.style.backgroundColor = '#bd3039';
            team1Score.style.backgroundColor = '#b32d36';
            break;
        case 'chc':
            team1Name.innerHTML = 'CHC';
            team1.style.backgroundColor = '#0e3386';
            team1Score.style.backgroundColor = '#0d307f';
            break;
        case 'chw':
            team1Name.innerHTML = 'CHW';
            team1.style.backgroundColor = '#191919';
            team1Score.style.backgroundColor = '#171717';
            break;
        case 'cin':
            team1Name.innerHTML = 'CIN';
            team1.style.backgroundColor = '#c6011f';
            team1Score.style.backgroundColor = '#bc001d';
            break;
        case 'cle':
            team1Name.innerHTML = 'CLE';
            team1.style.backgroundColor = '#e31937';
            team1Score.style.backgroundColor = '#d71734';
            break;
        case 'col':
            team1Name.innerHTML = 'COL';
            team1.style.backgroundColor = '#33006f';
            team1Score.style.backgroundColor = '#300069';
            break;
        case 'det':
            team1Name.innerHTML = 'DET';
            team1.style.backgroundColor = '#0c2c56';
            team1Score.style.backgroundColor = '#0b2951';
            break;
        case 'hou':
            team1Name.innerHTML = 'HOU';
            team1.style.backgroundColor = '#eb6e1f';
            team1Score.style.backgroundColor = '#e76614';
            break;
        case 'kc':
            team1Name.innerHTML = 'KC';
            team1.style.backgroundColor = '#004687';
            team1Score.style.backgroundColor = '#004280';
            break;
        case 'laa':
            team1Name.innerHTML = 'LAA';
            team1.style.backgroundColor = '#ba0021';
            team1Score.style.backgroundColor = '#b0001f';
            break;
        case 'lad':
            team1Name.innerHTML = 'LAD';
            team1.style.backgroundColor = '#005a9c';
            team1Score.style.backgroundColor = '#005594';
            break;
        case 'mia':
            team1Name.innerHTML = 'MIA';
            team1.style.backgroundColor = '#191919';
            team1Score.style.backgroundColor = '#171717';
            break;
        case 'mil':
            team1Name.innerHTML = 'MIL';
            team1.style.backgroundColor = '#12284b';
            team1Score.style.backgroundColor = '#112647';
            break;
        case 'min':
            team1Name.innerHTML = 'MIN';
            team1.style.backgroundColor = '#091f40';
            team1Score.style.backgroundColor = '#081d3c';
            break;
        case 'nym':
            team1Name.innerHTML = 'NYM';
            team1.style.backgroundColor = '#002d72';
            team1Score.style.backgroundColor = '#002a6c';
            break;
        case 'nyy':
            team1Name.innerHTML = 'NYY';
            team1.style.backgroundColor = '#132448';
            team1Score.style.backgroundColor = '#122244';
            break;
        case 'oak':
            team1Name.innerHTML = 'OAK';
            team1.style.backgroundColor = '#003831';
            team1Score.style.backgroundColor = '#00352e';
            break;
        case 'phi':
            team1Name.innerHTML = 'PHI';
            team1.style.backgroundColor = '#e81828';
            team1Score.style.backgroundColor = '#dd1625';
            break;
        case 'pit':
            team1Name.innerHTML = 'PIT';
            team1.style.backgroundColor = '#191919';
            team1Score.style.backgroundColor = '#171717';
            break;
        case 'sd':
            team1Name.innerHTML = 'SD';
            team1.style.backgroundColor = '#2f241c';
            team1Score.style.backgroundColor = '#2c221a';
            break;
        case 'sf':
            team1Name.innerHTML = 'SF';
            team1.style.backgroundColor = '#fd5a1e';
            team1Score.style.backgroundColor = '#fc4f0f';
            break;
        case 'sea':
            team1Name.innerHTML = 'SEA';
            team1.style.backgroundColor = '#0c2c56';
            team1Score.style.backgroundColor = '#0b2951';
            break;
        case 'stl':
            team1Name.innerHTML = 'STL';
            team1.style.backgroundColor = '#be0a14';
            team1Score.style.backgroundColor = '#b40912';
            break;
        case 'tb':
            team1Name.innerHTML = 'TB';
            team1.style.backgroundColor = '#092c5c';
            team1Score.style.backgroundColor = '#082957';
            break;
        case 'tex':
            team1Name.innerHTML = 'TEX';
            team1.style.backgroundColor = '#003278';
            team1Score.style.backgroundColor = '#002f71';
            break;
        case 'tor':
            team1Name.innerHTML = 'TOR';
            team1.style.backgroundColor = '#134a8e';
            team1Score.style.backgroundColor = '#124686';
            break;
        case 'wsh':
            team1Name.innerHTML = 'WSH';
            team1.style.backgroundColor = '#ab0003';
            team1Score.style.backgroundColor = '#a20002';
            break;
        default:
            team1Name.innerHTML = 'N/A';
            team1.style.backgroundColor = '#191919';
            team1Score.style.backgroundColor = '#171717';
    }
}

function team2Pick() {
    switch(team2Select.value) {
        case 'none':
            team2Name.innerHTML = 'N/A';
            team2.style.backgroundColor = '#191919';
            team2Score.style.backgroundColor = '#171717';
            break;
        case 'ari':
            team2Name.innerHTML = 'ARI';
            team2.style.backgroundColor = '#a71930';
            team2Score.style.backgroundColor = '#9e172d';
            break;
        case 'atl':
            team2Name.innerHTML = 'ATL';
            team2.style.backgroundColor = '#13274f';
            team2Score.style.backgroundColor = '#12254b';
            break;
        case 'bal':
            team2Name.innerHTML = 'BAL';
            team2.style.backgroundColor = '#df4601';
            team2Score.style.backgroundColor = '#d34200';
            break;
        case 'bos':
            team2Name.innerHTML = 'BOS';
            team2.style.backgroundColor = '#bd3039';
            team2Score.style.backgroundColor = '#b32d36';
            break;
        case 'chc':
            team2Name.innerHTML = 'CHC';
            team2.style.backgroundColor = '#0e3386';
            team2Score.style.backgroundColor = '#0d307f';
            break;
        case 'chw':
            team2Name.innerHTML = 'CHW';
            team2.style.backgroundColor = '#191919';
            team2Score.style.backgroundColor = '#171717';
            break;
        case 'cin':
            team2Name.innerHTML = 'CIN';
            team2.style.backgroundColor = '#c6011f';
            team2Score.style.backgroundColor = '#bc001d';
            break;
        case 'cle':
            team2Name.innerHTML = 'CLE';
            team2.style.backgroundColor = '#e31937';
            team2Score.style.backgroundColor = '#d71734';
            break;
        case 'col':
            team2Name.innerHTML = 'COL';
            team2.style.backgroundColor = '#33006f';
            team2Score.style.backgroundColor = '#300069';
            break;
        case 'det':
            team2Name.innerHTML = 'DET';
            team2.style.backgroundColor = '#0c2c56';
            team2Score.style.backgroundColor = '#0b2951';
            break;
        case 'hou':
            team2Name.innerHTML = 'HOU';
            team2.style.backgroundColor = '#eb6e1f';
            team2Score.style.backgroundColor = '#e76614';
            break;
        case 'kc':
            team2Name.innerHTML = 'KC';
            team2.style.backgroundColor = '#004687';
            team2Score.style.backgroundColor = '#004280';
            break;
        case 'laa':
            team2Name.innerHTML = 'LAA';
            team2.style.backgroundColor = '#ba0021';
            team2Score.style.backgroundColor = '#b0001f';
            break;
        case 'lad':
            team2Name.innerHTML = 'LAD';
            team2.style.backgroundColor = '#005a9c';
            team2Score.style.backgroundColor = '#005594';
            break;
        case 'mia':
            team2Name.innerHTML = 'MIA';
            team2.style.backgroundColor = '#191919';
            team2Score.style.backgroundColor = '#171717';
            break;
        case 'mil':
            team2Name.innerHTML = 'MIL';
            team2.style.backgroundColor = '#12284b';
            team2Score.style.backgroundColor = '#112647';
            break;
        case 'min':
            team2Name.innerHTML = 'MIN';
            team2.style.backgroundColor = '#091f40';
            team2Score.style.backgroundColor = '#081d3c';
            break;
        case 'nym':
            team2Name.innerHTML = 'NYM';
            team2.style.backgroundColor = '#002d72';
            team2Score.style.backgroundColor = '#002a6c';
            break;
        case 'nyy':
            team2Name.innerHTML = 'NYY';
            team2.style.backgroundColor = '#132448';
            team2Score.style.backgroundColor = '#122244';
            break;
        case 'oak':
            team2Name.innerHTML = 'OAK';
            team2.style.backgroundColor = '#003831';
            team2Score.style.backgroundColor = '#00352e';
            break;
        case 'phi':
            team2Name.innerHTML = 'PHI';
            team2.style.backgroundColor = '#e81828';
            team2Score.style.backgroundColor = '#dd1625';
            break;
        case 'pit':
            team2Name.innerHTML = 'PIT';
            team2.style.backgroundColor = '#191919';
            team2Score.style.backgroundColor = '#171717';
            break;
        case 'sd':
            team2Name.innerHTML = 'SD';
            team2.style.backgroundColor = '#2f241c';
            team2Score.style.backgroundColor = '#2c221a';
            break;
        case 'sf':
            team2Name.innerHTML = 'SF';
            team2.style.backgroundColor = '#fd5a1e';
            team2Score.style.backgroundColor = '#fc4f0f';
            break;
        case 'sea':
            team2Name.innerHTML = 'SEA';
            team2.style.backgroundColor = '#0c2c56';
            team2Score.style.backgroundColor = '#0b2951';
            break;
        case 'stl':
            team2Name.innerHTML = 'STL';
            team2.style.backgroundColor = '#be0a14';
            team2Score.style.backgroundColor = '#b40912';
            break;
        case 'tb':
            team2Name.innerHTML = 'TB';
            team2.style.backgroundColor = '#092c5c';
            team2Score.style.backgroundColor = '#082957';
            break;
        case 'tex':
            team2Name.innerHTML = 'TEX';
            team2.style.backgroundColor = '#003278';
            team2Score.style.backgroundColor = '#002f71';
            break;
        case 'tor':
            team2Name.innerHTML = 'TOR';
            team2.style.backgroundColor = '#134a8e';
            team2Score.style.backgroundColor = '#124686';
            break;
        case 'wsh':
            team2Name.innerHTML = 'WSH';
            team2.style.backgroundColor = '#ab0003';
            team2Score.style.backgroundColor = '#a20002';
            break;
        default:
            team2Name.innerHTML = 'N/A';
            team2.style.backgroundColor = '#191919';
            team2Score.style.backgroundColor = '#171717';
    }
}

function team1ScoreInput() {
    const team1ScoreValue = document.querySelector('#team1ScoreValue').value;
    if (team1ScoreValue < 0 || team1ScoreValue == '' || team1ScoreValue > 99) {
        team1Score.innerHTML = '0';
    } else {
        team1Score.innerHTML = team1ScoreValue;
    }
}

function team2ScoreInput() {
    const team2ScoreValue = document.querySelector('#team2ScoreValue').value;
    if (team2ScoreValue < 0 || team2ScoreValue == '' || team2ScoreValue > 99) {
        team2Score.innerHTML = '0';
    } else {
        team2Score.innerHTML = team2ScoreValue;
    }
}

const result = document.querySelector('#result');

function inningsInput() {
    const inningsValue = document.querySelector('#inningsValue').value;
    if (inningsValue > 9) {
        result.innerHTML = 'F/' + inningsValue;
    } else {
        result.innerHTML = 'FINAL';
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
        team1Name.style.left = '160px';
        team2Name.style.left = '160px';
        team1Seed.innerHTML = '';
        team2Seed.innerHTML = '';
        roundText.innerHTML = 'N/A';
    }
}

function roundInput() {
    roundText.innerHTML = roundValue.value;
    if (roundValue.value == '') {
        roundText.innerHTML = 'N/A';
    } else {
        
    }
}

function teamPositioning() {
    if (team1SeedValue.value != '' || team2SeedValue.value != '') {
        team1Name.style.left = '180px';
        team2Name.style.left = '180px';
    } else if (team1SeedValue.value == '' && team2SeedValue.value == '') {
        team1Name.style.left = '160px';
        team2Name.style.left = '160px';
    } else {
        team1Name.style.left = '160px';
    }
    if (team1SeedValue.value.length >= 2) {
        team1Seed.style.marginLeft = '10px';
    } else {
        team1Seed.style.marginLeft = '20px';
    }
    if (team2SeedValue.value.length >= 2) {
        team2Seed.style.marginLeft = '10px';
    } else {
        team2Seed.style.marginLeft = '20px';
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