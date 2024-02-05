// globals
let state = "init";
/* 
types of state:
init:
pickFourth
fourthCompleted
pickThird
thirdCompleted
pickSecond
secondCompleted
pickFirst
firstCompleted
*/
let nameList = [];
let fourthCounter = 0;
let thirdCounter = 0;
let secondCounter = 0;
let firstCounter = 0;

let fourthPeople = [];
let thirdPeople = [];
let secondPeople = [];
let firstPeople = [];

let backgroundImg;

// distance contants
let canvasWidth = 1456;
let canvasHeight = 816;



function setup() {
  // this has to match the size of the background image
  createCanvas(canvasWidth, canvasHeight); 
  frameRate(30);
  //draw button
  let buttonWidth = 190
  let col = color(234, 204, 144, 100);
  let whiteCol = color(255,255,255);
  let transparentCol = color(255,255,255,0)
  Button1 = createButton("Draw Fourth Prize");
  Button1.style('background-color', transparentCol);
  Button1.position(canvasWidth/2-buttonWidth/2, 185);
  Button1.style('border', '2px solid white');
  Button1.style('font-size', '16px');
  Button1.style('color', 'white');
  Button1.style('border-radius', '10px');
  Button1.size(buttonWidth,45)
  Button1.mousePressed(pickOne);
  
  
  // Initialize globals
  nameList = [
      "  蔡馨仪",
      "  Alexa Zhang",
      "  孙卓雅",
      "  尹玥",
      "  Paul Carrington",
      "  Hannah Chang",
      "  Wang Yi",
      "  Brian Gagan",
      "  Neil Purdy",
      "  夏云鹏",
      "  孙佳慧",
      "  李丽阳",
      "  宗衍行",
      "  王爽",
      "  王荀",
      "  冯昱鹏",
      "  鹿洛",
      "  Robert Yan",
      "  李朝江",
      "  Ophelia Kung",
      "  梁萌",
    ]
  
  noLoop();
}

// to preload image before the first draw command
function preload(){
  backgroundImg = loadImage('assets/bg_1x.png'); 
}



function pickOne() {
  // Init
  if (state == "init") {
    Button1.html("Select")
    state = "pickFourth";
    loop()
    return
    }
  // Fourth
  if (state == "pickFourth") {
    let peopleLeft = nameList.length;
    let num = getRndInteger(0, peopleLeft);
    let selectedPerson = nameList[num];
    fourthPeople.push(selectedPerson);
    nameList = removeArrayIndex(nameList, num);
    fourthCounter += 1;
  }
  if (fourthCounter == 8 && state == "pickFourth") {
    state = "fourthCompleted";
    Button1.html("Draw Third Prize")
    noLoop()
    return 
  }
  // Third
  if (state == "fourthCompleted") {
    Button1.html("Select")
    state = "pickThird";
    loop();
    return;
  }
  if (state == "pickThird") {
    let peopleLeft = nameList.length;
    let num = getRndInteger(0, peopleLeft);
    let selectedPerson = nameList[num];
    thirdPeople.push(selectedPerson);
    nameList = removeArrayIndex(nameList, num);
    thirdCounter += 1;
  }
  if (thirdCounter == 8 && state == "pickThird") {
    state = "thirdCompleted";
    Button1.html("Draw Second Prize")
    noLoop()
    return 
  }
  // Second
  if (state == "thirdCompleted") {
    Button1.html("Select")
    state = "pickSecond";
    loop();
    return;
  }
  if (state == "pickSecond") {
    let peopleLeft = nameList.length;
    let num = getRndInteger(0, peopleLeft);
    let selectedPerson = nameList[num];
    secondPeople.push(selectedPerson);
    nameList = removeArrayIndex(nameList, num);
    secondCounter += 1;
  }
  if (secondCounter == 4 && state == "pickSecond") {
    state = "secondCompleted";
    Button1.html("Draw First Prize")
    noLoop()
    return 
  }
  // First
  if (state == "secondCompleted") {
    Button1.html("Select")
    state = "pickFirst";
    loop();
    return;
  }
  if (state == "pickFirst") {
    let peopleLeft = nameList.length;
    let num = getRndInteger(0, peopleLeft);
    let selectedPerson = nameList[num];
    firstPeople.push(selectedPerson);
    nameList = removeArrayIndex(nameList, num);
    firstCounter += 1;
  }
  if (firstCounter == 1 && state == "pickFirst") {
    state = "firstCompleted";
    Button1.html("Congratulations!")
    console.log("First Prize: ", firstPeople)
    console.log("Second Prize: ", secondPeople)
    console.log("Third Prize: ", thirdPeople)
    console.log("Fourth Prize: ", fourthPeople)
    noLoop()
    return 
  }
}

function draw() {
  background(backgroundImg);
  if (state != "init") {
   drawFlashing();
  }
  drawText(); 
}

function drawText(){
  let upperMargin = 351;
  let lineHeight = 40;
  let paragraphHeight = 75;
  let centerX = canvasWidth/2; // this is the x distance of the center line
  let prizeTextSize = 28;
  let peopleTextSize = 20;
  let lineLength = 266
  let lineShapeHeight = 8
  textSize(20);
  textAlign(CENTER);
  textFont('Times New Roman');
  textStyle(BOLD);
  fill('white');

  // draw prize text
  textSize(prizeTextSize);
  text('First Prize $1000', centerX, upperMargin);
  text('Second Prize: $500', centerX, upperMargin+paragraphHeight + lineHeight*1);
  text('Third Prize: $200', centerX, upperMargin+paragraphHeight*2 + lineHeight*2);
  text('Fourth Prize: $100', centerX, upperMargin+paragraphHeight*3 + lineHeight*3);

  // draw people text
  textSize(peopleTextSize);
  textStyle(BOLD);
  text(firstPeople, centerX, upperMargin+lineHeight*1)
  textStyle(NORMAL);
  text(secondPeople, centerX, upperMargin+paragraphHeight + lineHeight*2)
  text(thirdPeople, centerX, upperMargin+paragraphHeight*2 + lineHeight*3)
  text(fourthPeople, centerX, upperMargin+paragraphHeight*3 + lineHeight*4)

  //draw line
  stroke(255);
  strokeWeight(1.5);
  let lineLeft = centerX-lineLength/2; 
  let lineRight = centerX+lineLength/2;
  line(lineLeft, upperMargin+lineShapeHeight, lineRight, upperMargin+lineShapeHeight);
  line(lineLeft, upperMargin+lineShapeHeight+paragraphHeight+lineHeight, lineRight, upperMargin+lineShapeHeight+paragraphHeight+lineHeight);
  line(lineLeft, upperMargin+lineShapeHeight+paragraphHeight*2+lineHeight*2, lineRight, upperMargin+lineShapeHeight+paragraphHeight*2+lineHeight*2);
  line(lineLeft, upperMargin+lineShapeHeight+paragraphHeight*3+lineHeight*3, lineRight, upperMargin+lineShapeHeight+paragraphHeight*3+lineHeight*3);
  strokeWeight(0);
}

// the old draw text function from 2023
/*
function drawText(){
  let upperMargin = 300;
  let lineHeight = 25;
  let paragraphHeight = 50;
  let centerX = canvasWidth/2; // this is the x distance of the center line
  textSize(20);
  textAlign(CENTER);
  fill('white');
  text('First Prize $1000', centerX, upperMargin);
  text('Number of Prizes: 1', centerX, upperMargin+lineHeight);
  text('Winner: ', centerX, upperMargin+lineHeight*2)
  text(firstPeople, 110, upperMargin+lineHeight*2)
  
  text('Second Prize: $500', centerX, upperMargin+paragraphHeight + lineHeight*2);
  text('Number of Prizes: 4', centerX, upperMargin+paragraphHeight + lineHeight*3);
  text('Winner: ', centerX, upperMargin+paragraphHeight + lineHeight*4)
  text(secondPeople, 110, upperMargin+paragraphHeight + lineHeight*4)
  
  text('Third Prize: $200', centerX, upperMargin+paragraphHeight*2 + lineHeight*4);
  text('Number of Prizes: 8', centerX, upperMargin+paragraphHeight*2 + lineHeight*5);
  text('Winner: ', centerX, upperMargin+paragraphHeight*2 + lineHeight*6)
  text(thirdPeople, 110, upperMargin+paragraphHeight*2 + lineHeight*6)
  
  text('Fourth Prize: $100', centerX, upperMargin+paragraphHeight*3 + lineHeight*6);
  text('Number of Prizes: 8', centerX, upperMargin+paragraphHeight*3 + lineHeight*7);
  text('Winner: ', centerX, upperMargin+paragraphHeight*3 + lineHeight*8)
  text(fourthPeople, 110, upperMargin+paragraphHeight*3 + lineHeight*8)
}
*/


function drawFlashing(){
  let peopleLeft = nameList.length;
  let num = getRndInteger(0, peopleLeft)
  let nameDisplayed = nameList[num]
  textSize(60);
  textStyle(BOLD);
  textFont('Times New Roman');
  if (state == "fourthCompleted") {
    nameDisplayed = fourthPeople[7];
  }
  if (state == "thirdCompleted") {
    nameDisplayed = thirdPeople[7];
  }
  if (state == "secondCompleted") {
    nameDisplayed = secondPeople[3];
  }
  if (state == "firstCompleted") {
    nameDisplayed = firstPeople[0];
  }
  if (state == "pickFirst"){
    nameDisplayed = "";
  }
  text(nameDisplayed, canvasWidth/2-15, 135);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
  
function removeArrayIndex(original_arr, i){
  const halfBeforeTheUnwantedElement = original_arr.slice(0, i)
  const halfAfterTheUnwantedElement = original_arr.slice(i+1);
  const copyWithoutThirdElement = halfBeforeTheUnwantedElement.concat(halfAfterTheUnwantedElement);
  return copyWithoutThirdElement
}
    
    
