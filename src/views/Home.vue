<template>
  <main id="container">
    <div class="container">
    <div class="glitch" data-text="HUNTERS.HOST">HUNTERS.HOST</div>
    <!-- <p class="subtitle">Engineer﹒Gamer﹒Shenaniganizer</p> -->
    <!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In  -->
    <svg class="subtitle" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32.58px"
      height="31.77px" viewBox="0 0 32.58 31.77" style="enable-background:new 0 0 32.58 31.77;" xml:space="preserve">
      <svg id="link">
        <a xlink:href="https://github.com/oh" target="_blank" rel="noopener noreferrer">
          <path class="st0" d="M16.29,0C7.29,0,0,7.29,0,16.29c0,7.2,4.67,13.3,11.14,15.46c0.81,0.15,1.11-0.35,1.11-0.79
            c0-0.39-0.01-1.41-0.02-2.77c-4.53,0.98-5.49-2.18-5.49-2.18C6,24.13,4.93,23.62,4.93,23.62c-1.48-1.01,0.11-0.99,0.11-0.99
            c1.63,0.12,2.5,1.68,2.5,1.68c1.45,2.49,3.81,1.77,4.74,1.35c0.15-1.05,0.57-1.77,1.03-2.18C9.7,23.08,5.9,21.68,5.9,15.44
            c0-1.78,0.63-3.23,1.68-4.37C7.41,10.65,6.85,9,7.73,6.76c0,0,1.37-0.44,4.48,1.67c1.3-0.36,2.69-0.54,4.08-0.55
            c1.38,0.01,2.78,0.19,4.08,0.55c3.11-2.11,4.48-1.67,4.48-1.67c0.89,2.24,0.33,3.9,0.16,4.31c1.04,1.14,1.67,2.59,1.67,4.37
            c0,6.26-3.81,7.63-7.44,8.04c0.58,0.5,1.11,1.5,1.11,3.02c0,2.18-0.02,3.93-0.02,4.47c0,0.44,0.29,0.94,1.12,0.78
            c6.47-2.16,11.13-8.26,11.13-15.45C32.58,7.29,25.29,0,16.29,0z"/>
        </a>
      </svg>
      <use xlink:href="#link"></use>
    </svg>
    </div>
    <div class="scanlines"></div>
  </main>
</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap');

  #cursor {
    position  : absolute;
    z-index   : 10000;
    width     : 40px;
    height    : 40px;
    background: transparent url('/src/Glitch Cursor.gif') 0 0 no-repeat;
  }

  body {
    background: black;
    font-family: 'Libre Barcode 39 Text', cursive;
  }
  #link {
    z-index: -1;
    animation: glitch-2 5s 5.02s 1;
  }
  svg:hover {
    cursor: pointer;
  }
  .st0 {
    fill-rule:evenodd;
    clip-rule:evenodd;
    fill:#FFFFFF;
  }
  .container {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  .glitch {
    color: #fff;
    position: relative;
    font-size: 9rem;
    animation: glitch 5s 5s infinite;
  }
  .glitch:before {
    content: attr(data-text);
    position: absolute;
    left: -0.05em;
    text-shadow: -0.025em 0 rgba(255, 0, 0, .75);
    background: black;
    overflow: hidden;
    top: 0;
   animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
  }
  .glitch:after {
    content: attr(data-text);
    position: absolute;
    left: 0.025em;
    text-shadow: 0.05em 0 rgba(0, 0, 255, .75);
    background: black;
    overflow: hidden;
    top: 0;
   animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
  }
  .scanlines {
    pointer-events: none;
    overflow: hidden;
    mix-blend-mode: difference;
  }
  .scanlines:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: repeating-linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.05) 0.5%, transparent 1%);
    animation: fudge 7s ease-in-out alternate infinite;
  }
  @keyframes glitch {
    1% {
      transform: rotateX(10deg) skewX(90deg);
    }
    2% {
      transform: rotateX(0deg) skewX(0deg);
    }
  }
  @keyframes noise-1 {
    0% {
        clip: rect(31px, 9999px, 94px, 0)
    }
    10% {
        clip: rect(112px, 9999px, 76px, 0)
    }
    20% {
        clip: rect(85px, 9999px, 77px, 0)
    }
    30% {
        clip: rect(27px, 9999px, 97px, 0)
    }
    40% {
        clip: rect(64px, 9999px, 98px, 0)
    }
    50% {
        clip: rect(61px, 9999px, 85px, 0)
    }
    60% {
        clip: rect(99px, 9999px, 114px, 0)
    }
    70% {
        clip: rect(34px, 9999px, 115px, 0)
    }
    80% {
        clip: rect(98px, 9999px, 129px, 0)
    }
    90% {
        clip: rect(43px, 9999px, 96px, 0)
    }
    100% {
        clip: rect(82px, 9999px, 64px, 0)
    }
  }
  @keyframes noise-2 {
    0% {
        clip: rect(66px, 9999px, 12px, 0)
    }
    10% {
        clip: rect(144px, 9999px, 76px, 0)
    }
    20% {
        clip: rect(92px, 9999px, 18px, 0)
    }
    30% {
        clip: rect(20px, 9999px, 27px, 0)
    }
    40% {
        clip: rect(64px, 9999px, 98px, 0)
    }
    50% {
        clip: rect(61px, 9999px, 91px, 0)
    }
    60% {
        clip: rect(29px, 9999px, 41px, 0)
    }
    70% {
        clip: rect(182px, 9999px, 122px, 0)
    }
    80% {
        clip: rect(46px, 9999px, 175px, 0)
    }
    90% {
        clip: rect(155px, 9999px, 66px, 0)
    }
    100% {
        clip: rect(96px, 9999px, 28px, 0)
    }
  }
  @keyframes fudge {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -2em);
    }
  }
  @keyframes glitch-2 {
    1% {
      transform: rotateX(10deg) rotateY(-10deg) skewX(60deg);
    }
    2% {
      transform: rotateX(0deg) rotateY(0deg) skewX(0deg);
    }
  }
</style>