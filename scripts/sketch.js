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



function setup() {
  createCanvas(1456, 816); 
  frameRate(30);
  //Draw background
  //backgroundImg = loadImage('https://github.com/ChrisFeng6/platanus.io/blob/main/asset/bg_1x.png'); 
  backgroundImg = loadImage('assets/bg_1x.png'); 
  //draw button
  let col = color(234, 204, 144, 100);
  let whiteCol = color(255,255,255);
  Button1 = createButton("Draw Fourth Prize");
  Button1.style('background-color', col);
  Button1.position(40, 210);
  Button1.style('border', whiteCol);
  Button1.style('border-radius', 50);
  Button1.style('font-size', 50);
  Button1.size(140,40)
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
  console.log('no');
  if (state != "init") {
   drawFlashing();
  }
  drawText(); 
}

function drawText(){
  let upperMargin = 300;
  let lineHeight = 25;
  let paragraphHeight = 50
  textSize(20);
  text('First Prize: USD 1000', 40, upperMargin);
  text('Number of Prizes: 1', 40, upperMargin+lineHeight);
  text('Winner: ', 40, upperMargin+lineHeight*2)
  text(firstPeople, 110, upperMargin+lineHeight*2)
  
  text('Second Prize: USD 500', 40, upperMargin+paragraphHeight + lineHeight*2);
  text('Number of Prizes: 4', 40, upperMargin+paragraphHeight + lineHeight*3);
  text('Winner: ', 40, upperMargin+paragraphHeight + lineHeight*4)
  text(secondPeople, 110, upperMargin+paragraphHeight + lineHeight*4)
  
  text('Third Prize: USD 200', 40, upperMargin+paragraphHeight*2 + lineHeight*4);
  text('Number of Prizes: 8', 40, upperMargin+paragraphHeight*2 + lineHeight*5);
  text('Winner: ', 40, upperMargin+paragraphHeight*2 + lineHeight*6)
  text(thirdPeople, 110, upperMargin+paragraphHeight*2 + lineHeight*6)
  
  text('Fourth Prize: USD 100', 40, upperMargin+paragraphHeight*3 + lineHeight*6);
  text('Number of Prizes: 8', 40, upperMargin+paragraphHeight*3 + lineHeight*7);
  text('Winner: ', 40, upperMargin+paragraphHeight*3 + lineHeight*8)
  text(fourthPeople, 110, upperMargin+paragraphHeight*3 + lineHeight*8)
}

function drawFlashing(){
  let peopleLeft = nameList.length;
  let num = getRndInteger(0, peopleLeft)
  let nameDisplayed = nameList[num]
  textSize(60);
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
  text(nameDisplayed, 20, 120);
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
    
    
