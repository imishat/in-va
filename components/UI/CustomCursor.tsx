import { colors, colors2 } from "@utils/index";
import React, { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";

const CustomCursor = () => {
  const { type, setType } = useContext(CustomCursorContext);
  const secondaryCursor: any = useRef(null);
  const mainCursor: any = useRef(null);
  const positionRef: any = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: -60,
    destinationY: -60,
    distanceX: 20,
    distanceY: 20,
    key: -1,
  });

  useEffect(() => {
    let timeout: any;
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY + window.scrollY;
      if (
        secondaryCursor &&
        secondaryCursor.current &&
        mainCursor &&
        mainCursor.current
      ) {
        positionRef.current.mouseX =
          mouseX - (secondaryCursor?.current?.clientWidth || 0) / 2;
        positionRef.current.mouseY =
          mouseY - (secondaryCursor?.current?.clientHeight || 0) / 2;

        mainCursor.current.style.transform = `translate3d(${
          mouseX - mainCursor.current.clientWidth / 2
        }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    });

    document.addEventListener("scroll", () => {
      setType("slider-drag");
      clearTimeout(timeout);
      timeout = setTimeout(() => setType("default"), 1000);
    });

    document.addEventListener("click", () => {
      setType("hamburger");
      clearTimeout(timeout);
      timeout = setTimeout(() => setType("default"), 500);
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor && secondaryCursor.current)
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    if (
      secondaryCursor &&
      secondaryCursor.current &&
      mainCursor &&
      mainCursor.current
    )
      followMouse();
  }, []);

  useEffect(() => {
    var colours = colors2;
    var sparkles = 50;

    var x = 400;
    var ox = 400;

    var y = 300;
    var oy = 300;

    var swide = 800;
    var shigh = 600;
    var sleft = 0;
    var sdown = 0;
    var tiny = new Array();
    var star = new Array();
    var starv = new Array();
    var starx = new Array();
    var stary = new Array();
    var tinyx = new Array();
    var tinyy = new Array();
    var tinyv = new Array();

    window.onload = function () {
      if (document.getElementById as any) {
        var i: number,
          rats: HTMLDivElement,
          rlef: HTMLDivElement,
          rdow: HTMLDivElement;

        for (var i = 0; i < sparkles; i++) {
          var rats = createDiv(3, 3);
          rats.style.visibility = "hidden";
          document.body.appendChild((tiny[i] = rats));
          starv[i] = 0;
          tinyv[i] = 0;
          var rats = createDiv(5, 5);
          rats.style.backgroundColor = "transparent";
          rats.style.visibility = "hidden";
          var rlef = createDiv(1, 5);
          var rdow = createDiv(5, 1);
          rats.appendChild(rlef);
          rats.appendChild(rdow);
          rlef.style.top = "2px";
          rlef.style.left = "0px";
          rdow.style.top = "0px";
          rdow.style.left = "2px";
          document.body.appendChild((star[i] = rats));
        }
        set_width();
        sparkle();
      }
    };

    function sparkle() {
      var c;
      if (x != ox || y != oy) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++)
          if (!starv[c]) {
            star[c].style.left = (starx[c] = x) + "px";
            star[c].style.top = (stary[c] = y) + "px";
            star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
            star[c].style.visibility = "visible";
            starv[c] = 50;
            break;
          }
      }
      for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      setTimeout(() => sparkle(), 40);
    }

    function update_star(i: number) {
      if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        if (stary[i] < shigh + sdown) {
          star[i].style.top = stary[i] + "px";
          starx[i] += ((i % 5) - 2) / 5;
          star[i].style.left = starx[i] + "px";
        } else {
          star[i].style.visibility = "hidden";
          starv[i] = 0;
          return;
        }
      } else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible";
      }
    }

    function update_tiny(i: number) {
      if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
      }
      if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        if (tinyy[i] < shigh + sdown) {
          tiny[i].style.top = tinyy[i] + "px";
          tinyx[i] += ((i % 5) - 2) / 5;
          tiny[i].style.left = tinyx[i] + "px";
        } else {
          tiny[i].style.visibility = "hidden";
          tinyv[i] = 0;
          return;
        }
      } else tiny[i].style.visibility = "hidden";
    }

    document.onmousemove = mouse;
    function mouse(e: { pageY: number; pageX: number }) {
      set_scroll();
      y = e ? e.pageY : 0 + sdown;
      x = e ? e.pageX : 0 + sleft;
    }

    function set_scroll() {
      if (typeof self.pageYOffset == "number") {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
      } else if (document.body.scrollTop || document.body.scrollLeft) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
      } else if (
        document.documentElement &&
        (document.documentElement.scrollTop ||
          document.documentElement.scrollLeft)
      ) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
      } else {
        sdown = 0;
        sleft = 0;
      }
    }

    window.onresize = set_width;

    function set_width() {
      if (typeof self.innerWidth == "number") {
        swide = self.innerWidth;
        shigh = self.innerHeight;
      } else if (
        document.documentElement &&
        document.documentElement.clientWidth
      ) {
        swide = document.documentElement.clientWidth;
        shigh = document.documentElement.clientHeight;
      } else if (document.body.clientWidth) {
        swide = document.body.clientWidth;
        shigh = document.body.clientHeight;
      }
    }

    function createDiv(height: string | number, width: string | number) {
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = height + "px";
      div.style.width = width + "px";
      div.style.overflow = "hidden";
      div.style.backgroundColor =
        colours[Math.floor(Math.random() * colours?.length)];
      return div;
    }
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
