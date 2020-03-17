'use strict'

// Global variable holding all of the survey images created from the constructor
var surveyImageList = [];

// Variable setting the amount of times survey can be clicked before it ends - will increment and stop at set number in loop
var maxVoteRounds = 0;

// Constructor function that will generate new images for the survey
function SurveyImage(name , imagePath) {

  this.name = name;
  this.imagePath = imagePath;
  this.totalVotes = 0;
  this.timesRendered = 0;

  surveyImageList.push(this);
}

// New instances of objects created holding each a name and a file path
new SurveyImage('bag' , 'resources/bag.jpg');
new SurveyImage('banana' , 'resources/banana.jpg');
new SurveyImage('bathroom' , 'resources/bathroom.jpg');
new SurveyImage('boots' , 'resources/boots.jpg');
new SurveyImage('breakfast' , 'resources/breakfast.jpg');
new SurveyImage('bubblegum' , 'resources/bubblegum.jpg');
new SurveyImage('chair' , 'resources/chair.jpg');
new SurveyImage('cthulhu' , 'resources/cthulhu.jpg');
new SurveyImage('dog-duck' , 'resources/dog-duck.jpg');
new SurveyImage('dragon' , 'resources/dragon.jpg');
new SurveyImage('pen' , 'resources/pen.jpg');
new SurveyImage('pet-sweep' , 'resources/pet-sweep.jpg');
new SurveyImage('scissors' , 'resources/scissors.jpg');
new SurveyImage('shark' , 'resources/shark.jpg');
new SurveyImage('sweep' , 'resources/sweep.png');
new SurveyImage('tauntaun' , 'resources/tauntaun.jpg');
new SurveyImage('unicorn' , 'resources/unicorn.jpg');
new SurveyImage('usb' , 'resources/usb.gif');
new SurveyImage('water-can' , 'resources/water-can.jpg');
new SurveyImage('wine-glass' , 'resources/wine-glass.jpg');

// Variables grabbing and storing the html location for 3 survey images
var surveyImage1 = document.getElementById('survey1');
var surveyImage2 = document.getElementById('survey2');
var surveyImage3 = document.getElementById('survey3');

// Function that will generate a random image from array 
function generateRandomImage() {

  var i = Math.floor(Math.random() * surveyImageList[i]);

  // While loops checks condition against array of images and randomizes if they are the same as the current rendered image
  while (
    surveyImageList[1].name === surveyImage1 ||
    surveyImageList[i].name === surveyImage2 ||
    surveyImageList[i].name === surveyImage3
  ) {
    i = Math.floor(Math.random() * surveyImageList[i])
  }
  return surveyImageList[i];
}

// Function that will render survey images onto html page
function renderSurveyImages() {

  // Variables containing new randomly generated images
  var newSurveyImage1 = generateRandomImage();

  // Replaces value of existing image variables with new random images
  surveyImage1.src = newSurveyImage1.imagePath;
  surveyImage1.name = newSurveyImage1.name;
  newSurveyImage1.timesRendered++;
  maxVoteRounds = maxVoteRounds++;

  var newSurveyImage2 = generateRandomImage();
  surveyImage2.src = newSurveyImage2.imagePath;
  surveyImage2.name = newSurveyImage2.name;
  newSurveyImage2.timesRendered++;
  maxVoteRounds = maxVoteRounds++;

  var newSurveyImage3 = generateRandomImage();
  surveyImage3.src = newSurveyImage3.imagePath;
  surveyImage3.name = newSurveyImage3.name;
  newSurveyImage3.timesRendered++;
  maxVoteRounds = maxVoteRounds++;  

}

renderSurveyImages();

function renderSurveyResults() {

  // Variable to grab html list location
  var surveyList = document.getElementById('results-list');

  for (var i = 0; i < surveyImageList.length; i++) {

    var listEl = document.createElement('li');
    var results = (surveyImageList[i].name + ': ' + surveyImageList[i].totalVotes + '; ' + surveyImageList[i].timesRendered + ': appearances');
    results.textContent = results;
    surveyList

  }

}