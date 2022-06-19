const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const body = document.querySelector("body");
  
  function changeBackground() {
    let randomIndexArray = [];
    for (let i = 0; i < 2; i++) {
      const choosenColors = colors[Math.floor(Math.random() * colors.length)];
      if (randomIndexArray.indexOf(choosenColors) === -1) {
        randomIndexArray.push(choosenColors);
      } else {
        i--;
      }
    }
    const color1 = randomIndexArray[0];
    const color2 = randomIndexArray[1];
    body.style.backgroundImage = `linear-gradient(${color1}, ${color2})`;
  }
  changeBackground();
  setInterval(changeBackground, 5000);