export const canvasFunction = () => {

  let canvas = document.getElementsByTagName("canvas")[0];

  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  var ctx = canvas.getContext("2d");

  /*Modify options here*/

  //possible characters that will appear
  var characterList = [ "{ }", "< >"];

  //stocks possible character attributes
  var layers = {
    n: 5, //number of layers
    letters: [500,200, 100, 50], //letters per layer (starting from the deepest layer)
    coef: [0.1, 0.1, 0.1, 0.1], //how much the letters move from the mouse (starting from the deepest layer)
    size: [6, 9, 16, 20, 36], //font size of the letters (starting from the deepest layer)
    color: ["#ffffff35", "#eeeeee35", "#cccccc35", "#bbbbbb35", "#aaaaaa35"], //color of the letters (starting from the deepest layer)
    font: "Grabenbach-regular" //font family (of every layer)
  };

  /*End of options*/

  var characters = [];
  var mouseX = document.body.clientWidth / 2;
  var mouseY = document.body.clientHeight / 2;

  var rnd = {
    btwn: function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function(list) {
      return list[rnd.btwn(0, list.length)];
    }
  };

  /*LETTER DRAWING*/

  function drawLetter(char) {

    ctx.font = char.size + "px " + char.font;
    ctx.fillStyle = char.color;

    var x = char.posX + (mouseX - canvas.width / 2) * char.coef;
    var y = char.posY + (mouseY - canvas.height / 2) * char.coef;

    ctx.fillText(char.char, x, y);
  }

  /*ANIMATION*/

  document.onmousemove = function(ev) {

    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;

    if (window.requestAnimationFrame) {
      requestAnimationFrame(update);
    } else {
      update();
    }
  };

  function update() {
    clear();
    render();
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function render() {
    for (var i = 0; i < characters.length; i++) {
      drawLetter(characters[i]);
    }
  }

  /*INITIALIZE*/

  function createLetters() {
    for (var i = 0; i < layers.n; i++) {
      for (var j = 0; j < layers.letters[i]; j++) {
        var character = rnd.choose(characterList);
        var x = rnd.btwn(0, canvas.width);
        var y = rnd.btwn(0, canvas.height);

        characters.push({
          char: character,
          font: layers.font,
          size: layers.size[i],
          color: layers.color[i],
          layer: i,
          coef: layers.coef[i],
          posX: x,
          posY: y
        });
      }
    }
  }

  createLetters();
  update();

  /*REAJUST CANVAS AFTER RESIZE*/

  window.onresize = function() {
    resize();
  };

//   document.getElementById("close").onclick = function() {
//     this.parentElement.style.visibility = "hidden";
//     this.parentElement.style.opacity = "0";
//   };
};


