import React, { useEffect, useRef } from "react";

const StarsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const background = canvasRef.current;
    const bgCtx = background.getContext("2d");
    const getScreenHeight = window.innerHeight;
    const getScreenWidth = window.innerWidth;
    const age = 31;
    const cycles = 3;
    let shootingCycles = 0;
    let theEnd = false;

    background.width = getScreenWidth;
    background.height = getScreenHeight;

    // Define Star and ShootingStar classes here (same as in your original script)

    // const entities = [];
    // const starArray = [];
    function Star(options) {
      this.minSize = Math.random() * 0.1;
      this.maxSize = Math.random() * 3;
      this.size = Math.random() * 1;
      this.speed = Math.random() * 0.02;
      this.x = options.x; // position is added during initialization
      this.y = options.y; // position is added during initialization
    }

    Star.prototype.reset = function () {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.02;
      this.x = getScreenWidth;
      this.y = Math.random() * getScreenHeight;
    };

    Star.prototype.update = function () {
      // set x coordinate of star
      this.x -= this.speed;
      if (this.x < 0) {
        // reset star position to the right end
        this.reset();
      } else {
        this.glow();
        // moves star to the left when updated
        bgCtx.fillRect(this.x, this.y, this.size, this.size);
      }
    };

    Star.prototype.glow = function () {
      const size = Math.random() * 6;
      this.size =
        size >= this.maxSize
          ? this.maxSize / 2
          : size <= this.minSize
          ? this.minSize
          : size;
    };

    /**
     * Shooting star class
     */
    function ShootingStar() {
      this.reset();
    }

    ShootingStar.prototype.reset = function () {
      shootingCycles++;
      if (shootingCycles <= age * cycles) {
        this.x = Math.random() * getScreenWidth * 2;
        this.y = 0;
        this.len = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 1 + 0.1;
        // this is used so the shooting stars arent constant
        this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
      }
      this.active = false;
    };

    ShootingStar.prototype.update = function () {
      if (this.active) {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= getScreenHeight) {
          // this.active = false;  // enable 1 cycle
          this.reset(); // use for infinite cycles
        } else {
          bgCtx.lineWidth = this.size;
          bgCtx.beginPath();
          bgCtx.moveTo(this.x, this.y);
          bgCtx.lineTo(this.x + this.len, this.y - this.len);
          bgCtx.stroke();
        }
      } else {
        if (this.waitTime < new Date().getTime()) {
          this.active = true;
        }
      }
    };

    const entities = [];
    const starArray = [];

    // Initialize stars and shooting stars
    for (let i = 0; i < getScreenHeight; i++) {
      const randX = Math.random();
      const randY = Math.random();
      starArray.push(
        new Star({ x: randX * getScreenWidth, y: randY * getScreenHeight })
      );
    }

    for (let i = 0; i < age; i++) {
      entities.push(new ShootingStar());
    }

    // Animate stars
    const animate = () => {
      if (!theEnd) {
        bgCtx.fillStyle = "#000000";
        bgCtx.fillRect(0, 0, getScreenWidth, getScreenHeight);
        bgCtx.fillStyle = "#ffffff";
        bgCtx.strokeStyle = "#ffffff";

        let starLen = starArray.length;
        while (starLen--) {
          starArray[starLen].update();
        }
        requestAnimationFrame(animate);
      }
    };

    // Animate shooting stars
    const animateShootingStars = () => {
      if (!theEnd) {
        let entLen = entities.length;
        while (entLen--) {
          entities[entLen].update();
        }
        requestAnimationFrame(animateShootingStars);
      }
    };

    animate();
    animateShootingStars();
    return () => {
      // Remove any event listeners or intervals set up in this effect
      theEnd = true;
    };
  }, []);

  return <canvas ref={canvasRef} id="starCanvas"></canvas>;
};

export default StarsCanvas;
