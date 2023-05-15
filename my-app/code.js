var yearList = getColumn("FIFA Men's World Cup Results", "Year");
var championsList = getColumn("FIFA Men's World Cup Results", "Champions");
var hostsList = getColumn("FIFA Men's World Cup Results", "Hosts");
var finalScoreList = getColumn("FIFA Men's World Cup Results", "Final score");
var runnerupList = getColumn("FIFA Men's World Cup Results", "Runners-up");
var winnerImageList = getColumn("FIFA Men's World Cup Results", "Winner Country Image");

var filteredChampionsList = [];
var filteredHostsList = [];
var filteredFinalScoreList = [];
var filteredRunnerUpList = [];
var filteredWinnerImageList = [];

onEvent("generateButton", "click", function(){
  listSetup();
});

onEvent("goButton", "click", function(){
  setScreen("theworldcupScreen");
  playSound("");
});

onEvent("backButton", "click", function(){
  setScreen("homeScreen");
  playSound("");
});

onEvent("resultspageButton", "click", function(){
  setScreen("resultsGeneratorScreen");
  playSound("");
});

onEvent("backButton2", "click", function(){
  setScreen("theworldcupScreen");
  playSound("");
});

onEvent("homeButton", "click", function(){
  setScreen("homeScreen");
  playSound("");
});



function filter(){
  filteredChampionsList = [];
  filteredHostsList = [];
  filteredFinalScoreList = [];
  filteredRunnerUpList = [];
  filteredWinnerImageList = [];
  for(var i = 0; i<yearList.length; i++){
    if(yearList[i] == getNumber("yearDropdown")){
    appendItem(filteredChampionsList, championsList[i]);
    appendItem(filteredHostsList, hostsList[i]);
    appendItem(filteredFinalScoreList, finalScoreList[i]);
    appendItem(filteredRunnerUpList, runnerupList[i]);
    appendItem(filteredWinnerImageList, winnerImageList[i]);
    }
  }
}

function updateScreen(){
  var randomIndex = randomNumber(0, filteredChampionsList.length-1);
  setText("championLabel", filteredChampionsList[randomIndex]);
  setText("finalScoreLabel", filteredFinalScoreList[randomIndex]);
  setText("runnerupLabel", filteredRunnerUpList[randomIndex]);
  setText("hostsLabel", filteredHostsList[randomIndex]);
  setImageURL("winnerCountryImage", filteredWinnerImageList[randomIndex]);
}

function listSetup(){
  filter();
  updateScreen();
}
