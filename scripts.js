//version 1
/* function onBackgroundChange() {
    //  --------- --   0  ,   1  ,   2
    const colors = ["red", "blue", "green"];
    let elementBG = document.getElementById("demo").style.background;

    if (colors.indexOf(elementBG) === 2) {
        document.getElementById("demo").style.background = colors[0];
    }

    if (colors.indexOf(elementBG) === 0) {
        document.getElementById("demo").style.background = colors[1];
    }

    if (colors.indexOf(elementBG) === 1) {
        document.getElementById("demo").style.background = colors[2];
    } */



// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// document.getElementById("demo").style.background = colors[getRandomInt(3)];
//}




//Another version

function onBackgroundChange() {
    //  --------- --   0  ,   1  ,   2
    const colors = ["red", "blue", "green", "grey", "black", "white"];
    let elementBG = document.getElementById("demo").style.background;
    const currentIndex = colors.indexOf(elementBG);

    if (currentIndex === 5) {
        document.getElementById("demo").style.background = colors[0];
    } else {
        document.getElementById("demo").style.background = colors[currentIndex + 1];
    }
}

/*
//and another version
function onBackgroundChange() {
    //  --------- --   0  ,   1  ,   2
    const colors = ["red", "blue", "green", "grey", "black", "white"];
    const elementBG = document.getElementById("demo").style.background; // "red"
    const currentIndex = colors.indexOf(elementBG); // 0

    if (currentIndex === 5) {
      document.getElementById("demo").style.background = colors[0];
    } else {
      document.getElementById("demo").style.background = colors[currentIndex + 1]; // 0 + 1 -> colors[1]
      // document.getElementById("demo").style.background = "blue"
    }
  } */
