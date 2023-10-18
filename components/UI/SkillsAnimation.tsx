import { colors2 } from "@utils/index";
import React from "react";
import { useEffect } from "react";
import { transition } from '../../utils/index';

function SkillsAnimation() {
  useEffect(() => {
    let canvas: any = document.getElementsByTagName("canvas")[0];
    if (canvas) {
      // canvas.width = 400;
      // canvas.height = 400;

      var ctx = canvas.getContext("2d");
      var characterList = [
        "c++",
        "c",
        "js",
        "scss",
        "React",
        "css",
        "html",
        "angular",
        "vue",
        "es",
        "ts",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
      ];

      //stocks possible character attributes
      var layers = {
        n: 5, //number of layers
        letters: [50, 30, 20, 10, 3], //letters per layer (starting from the deepest layer)
        coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
        size: [8, 10, 13, 15, 20], //font size of the letters (starting from the deepest layer)
        color: colors2?.reverse(), //color of the letters (starting from the deepest layer)
        font: "Courier", //font family (of every layer)
      };

      /*End of options*/

      var characters: any = [];
      var mouseX = 200;
      var mouseY = 200;

      var rnd = {
        btwn: function (min: number, max: number) {
          return Math.floor(Math.random() * (max - min) + min);
        },
        choose: function (list: string | any[]) {
          return list[rnd.btwn(0, list.length)];
        },
      };

      /*LETTER DRAWING*/
      // @ts-ignore
      function drawLetter(char: {
        size: string;
        font: string;
        color: any;
        posX: number;
        coef: number;
        posY: number;
        char: any;
      }) {
        ctx.font = char.size + "px " + char.font;
        ctx.fillStyle = char.color;

        var x = char.posX + (mouseX - canvas.width / 2) * char.coef;
        var y = char.posY + (mouseY - canvas.height / 2) * char.coef;

        ctx.fillText(char.char, x, y);
      }

      /*ANIMATION*/

      // document.onmousemove = function (ev) {
      //   mouseX = ev.pageX - canvas.offsetLeft;
      //   mouseY = ev.pageY - canvas.offsetTop;

      //   if (window.requestAnimationFrame as any) {
      //     requestAnimationFrame(update);
      //   } else {
      //     update();
      //   }
      // };

      setInterval(() => {
        mouseX = Math.random()*100;
        mouseY = Math.random()*100;

        if (window.requestAnimationFrame as any) {
          requestAnimationFrame(update);
        } else {
          update();
        }
      }, 1000);

      // @ts-ignore
      function update() {
        clear();
        render();
      }
      // @ts-ignore
      function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      // @ts-ignore
      function render() {
        for (var i = 0; i < characters.length; i++) {
          drawLetter(characters[i]);
        }
      }

      /*INITIALIZE*/
      // @ts-ignore
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
              posY: y,
            });
          }
        }
      }

      createLetters();
      update();

      /*REAJUST CANVAS AFTER RESIZE*/

      window.onresize = function () {
        location.reload();
      };

      (document.getElementById("close") as any).onclick = function () {
        this.parentElement.style.visibility = "hidden";
        this.parentElement.style.opacity = "0";
      };
    }
  }, []);
  return (
    <div style={{ height: 400, width: "100%", padding: 50 }} className="mb-6">
      <div id="close" />
      <canvas
        style={{ width: "100%", minHeight: 300, transition:  "all 1s"}}
      ></canvas>
    </div>
  );
}

export default SkillsAnimation;
