var level = 0;
var sublevel = 0;
var firsttime = true;
var sequence = [];
var userSequence = [];

$(document).keypress(function () {
  if (firsttime) {
    $("h1").text("Level " + level + 1);
    highlightButton();
    firsttime = false;
  }
  //  }
});

$(".b").click(function () {
    console.log(this.id)
  playSound(this.id);
  var currentButton = "bttn" + this.id;
  $("." + currentButton).addClass("pressed");
  setTimeout(function () {
    $("." + currentButton).removeClass("pressed");
  }, 200);
  userSequence.push(currentButton);
  if (userSequence[sublevel] === sequence[sublevel]) {
    sublevel++;
    if (userSequence.length === sequence.length) {
      setTimeout(() => {
        highlightButton();
      }, 500);
    }
  } else {
    var sound = new Audio("Sounds/Wrong.mp3")
    sound.play();
    $("h1").text(" Whoops ! Wrong tile . Press any key to start again .");
    sequence = [];
    userSequence = [];
    firsttime = true;
    level = 0;
  }
});

function highlightButton() {
  userSequence = [];
  sublevel = 0;
  level++;
  $("h1").text("Level " + level);
  var randomButtonNumber = Math.floor(Math.random() * 4 + 1);
  var randomButton = "bttn" + randomButtonNumber;
  sequence.push(randomButton);
  $("." + randomButton)
    .fadeIn(200)
    .fadeOut(200)
    .fadeIn(200);
  playSound(""+randomButtonNumber);
}

function playSound(key) {
  var sound;
  switch (key) {
    case '1':
      sound = new Audio("Sounds/Drum-1.mp3");
      sound.play();
      break;
    case '2':
      sound = new Audio("Sounds/Drum-2.mp3");
      sound.play();
      break;
    case '3':
      sound = new Audio("Sounds/Drum-3.mp3");
      sound.play();
      break;
    case '4':
      sound = new Audio("Sounds/Drum-4.mp3");
      sound.play();
      break;
    default:
      console.log("Something Wrong!");
  }
}
