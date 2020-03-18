'use strict'

// Global variable holding all of the survey images created from the constructor
var surveyImageList = [];

// Variable setting the amount of times survey can be clicked before it ends - will increment and stop at set number in loop
var maxVoteRounds = 25;

// Chart for presenting visual data from survey
var ctx = document.getElementById('myChart').getContext('2d');
var surveyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
                'hsla(360, 100%, 50%, 0.3)',
            ],
            borderColor: [
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
                'hsla(360, 100%, 50%, 0.7)',
            ],
            borderWidth: 1
        },{
          label: '# of Views',
          data: [],
          backgroundColor: [
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
            'hsla(239, 100%, 50%, 0.3)',
          ],
          borderColor: [
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
            'hsla(239, 100%, 50%, 0.7)',
          ],
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Constructor function that will generate new images for the survey
function SurveyImage(name , imagePath) {

  this.name = name;
  this.imagePath = imagePath;
  this.totalVotes = 0;
  this.timesRendered = 0;

  surveyImageList.push(this);
}

// Function to populate data into chart
function renderChart() {

  for(var i = 0; i < surveyImageList.length; i++) {

    surveyChart.data.labels.push(surveyImageList[i].name);
    surveyChart.data.datasets[0].data.push(surveyImageList[i].totalVotes);
    surveyChart.data.datasets[1].data.push(surveyImageList[i].timesRendered);
  }
};

// New instances of objects created holding each a name and a file path
new SurveyImage('R2-D2 suitcase' , 'resources/bag.jpg');
new SurveyImage('Banana slicer' , 'resources/banana.jpg');
new SurveyImage('Bathroom iPad stand' , 'resources/bathroom.jpg');
new SurveyImage('Rain sandals' , 'resources/boots.jpg');
new SurveyImage('Breakfast factory' , 'resources/breakfast.jpg');
new SurveyImage('Tasty meat gum!' , 'resources/bubblegum.jpg');
new SurveyImage('Abstract chair' , 'resources/chair.jpg');
new SurveyImage('Cthulhu, the Elder God' , 'resources/cthulhu.jpg');
new SurveyImage('Doggy duck lips' , 'resources/dog-duck.jpg');
new SurveyImage('Dragon meat' , 'resources/dragon.jpg');
new SurveyImage('Utensil pens' , 'resources/pen.jpg');
new SurveyImage('Pet sweep booties' , 'resources/pet-sweep.jpg');
new SurveyImage('Pizza scissors' , 'resources/scissors.jpg');
new SurveyImage('Shark snuggie' , 'resources/shark.jpg');
new SurveyImage('Crawl-n-sweep' , 'resources/sweep.png');
new SurveyImage('Hoth survival bag' , 'resources/tauntaun.jpg');
new SurveyImage('Unicorn meat' , 'resources/unicorn.jpg');
new SurveyImage('Cthulhu USB drive' , 'resources/usb.gif');
new SurveyImage('Self watering can' , 'resources/water-can.jpg');
new SurveyImage('Full nose wine glass' , 'resources/wine-glass.jpg');

// Variables grabbing and storing the html location for 3 survey images
var surveyImage1 = document.getElementById('survey1');
var surveyImage2 = document.getElementById('survey2');
var surveyImage3 = document.getElementById('survey3');

// Function that will generate a random image from array 
function generateRandomImage() {

  var i = Math.floor(Math.random() * surveyImageList.length);

  // While loops checks condition against array of images and randomizes if they are the same as the current rendered image
  while (
    surveyImageList[i].name === surveyImage1.name ||
    surveyImageList[i].name === surveyImage2.name ||
    surveyImageList[i].name === surveyImage3.name
  ) {
    i = Math.floor(Math.random() * surveyImageList.length)
  }
  return surveyImageList[i];
}

// Function that will render survey images onto html page
function renderSurveyImages() {

  // Replaces value of existing image variables with new random images
  var newSurveyImage1 = generateRandomImage();
  surveyImage1.src = newSurveyImage1.imagePath;
  surveyImage1.name = newSurveyImage1.name;
  newSurveyImage1.timesRendered++;

  var newSurveyImage2 = generateRandomImage();
  surveyImage2.src = newSurveyImage2.imagePath;
  surveyImage2.name = newSurveyImage2.name;
  newSurveyImage2.timesRendered++;

  var newSurveyImage3 = generateRandomImage();
  surveyImage3.src = newSurveyImage3.imagePath;
  surveyImage3.name = newSurveyImage3.name;
  newSurveyImage3.timesRendered++;

}

renderSurveyImages();

function renderSurveyResults() {

  // Variable to grab html list location
  var surveyList = document.getElementById('results-list');

  // Loops through and appends results of survey to a list
  for (var i = 0; i < surveyImageList.length; i++) {

    var listEl = document.createElement('li');
    var results = (surveyImageList[i].name + ': ' + surveyImageList[i].totalVotes + ' votes, ' + surveyImageList[i].timesRendered + ': views');
    listEl.textContent = results;
    surveyList.appendChild(listEl);

  }
}

// Function for handling the event listener
function clickHandler(event) {

  // Variable to grab html list location
  var surveyResults = document.getElementById('results-list');
  surveyResults.innerHTML = '';

  maxVoteRounds--;

  for (var i = 0; i < surveyImageList.length; i++) {

    if (surveyImageList[i].name === event.target.name) {
      surveyImageList[i].totalVotes++;
      // renderSurveyImages();

    } if (maxVoteRounds < 0) {
      event = false;
      surveyImage1.removeEventListener('click' , clickHandler);
      surveyImage2.removeEventListener('click' , clickHandler);
      surveyImage3.removeEventListener('click' , clickHandler);
      alert('Thanks for participating in our survey! Checkout what the most popular items are!');

      renderSurveyResults();
      renderChart();
      surveyChart.update();

      break;
    }

  }
  renderSurveyImages();
}

surveyImage1.addEventListener('click' , clickHandler);
surveyImage2.addEventListener('click' , clickHandler);
surveyImage3.addEventListener('click' , clickHandler);