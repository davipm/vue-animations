<template>
  <section class="section">
    <h3 class="section__title">Day 15</h3>
    <div class="frame frame--fix">
      <div class="card" onclick="void(0);">
        <div class="flip">
          <div class="front">
            <img
              src="https://100dayscss.com/codepen/bycicle.svg"
              alt="Bycicle"
            />
            <div class="street">
              <div class="stripe-1"></div>
              <div class="stripe-2"></div>
              <div class="stripe-3"></div>
              <div class="stripe-4"></div>
              <div class="stripe-5"></div>
              <div class="stripe-6"></div>
              <div class="stripe-7"></div>
              <div class="stripe-8"></div>
              <div class="stripe-9"></div>
            </div>
          </div>
          <div class="back">
            <img
              src="https://100dayscss.com/codepen/helicopter.svg"
              alt="Helicopter"
            />
            <div class="sky">
              <div class="cloud-1"></div>
              <div class="cloud-2"></div>
              <div class="cloud-3"></div>
              <div class="cloud-4"></div>
              <div class="cloud-5"></div>
              <div class="cloud-6"></div>
              <div class="cloud-7"></div>
              <div class="cloud-8"></div>
              <div class="cloud-9"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day15"
};
</script>

<style scoped lang="scss">
.frame--fix {
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  background: #4b4841;
}

.card {
  position: absolute;
  width: 320px;
  height: 180px;
  top: 110px;
  left: 40px;
  perspective: 800px;

  &:hover .flip {
    transform: rotateX(180deg) translate3d(0, 0, 0);
    box-shadow: 8px -10px 15px 0 rgba(0, 0, 0, 0.5);
  }

  .flip {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
    perspective: 1000px;
    box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.5);
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ffce4e;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    text-align: center;
  }

  .front {
    z-index: 2;
    transform: rotateX(0);

    img {
      position: relative;
      top: 52px;
      animation: bike 0.6s ease-in-out infinite;
      transform-origin: 50% 100%;
    }

    .street {
      position: absolute;
      top: 127px;
      left: 80px;
      width: 160px;
      height: 3px;
      overflow: hidden;

      @for $i from 1 through 9 {
        .stripe-#{$i} {
          position: absolute;
          right: -25px;
          top: 0;
          height: 3px;
          width: (2 + $i * 2) + px;
          background: #4b4841;
          border-radius: 3px;
          animation: street
            (0.8 + random(2) / 10) +
            s
            linear
            (random(10) / 10) +
            s
            infinite;
        }
      }
    }
  }

  .back {
    transform: rotateX(180deg);

    img {
      position: relative;
      z-index: 1;
      top: 57px;
      animation: helicopter 1.5s ease-in-out infinite;
      animation-fill-mode: both;
    }

    .sky {
      position: absolute;
      top: 0;
      left: 80px;
      bottom: 0;
      width: 160px;
      overflow: hidden;

      @for $i from 1 through 9 {
        .cloud-#{$i} {
          position: absolute;
          right: -25px;
          top: (20 + $i * 14) + px;
          height: 3px;
          width: (10 + random(150) / 10) + px;
          background: #4b4841;
          border-radius: 3px;
          animation: cloud
            (0.6 + random(2) / 10) +
            s
            linear
            (random(10) / 10) +
            s
            infinite;
        }
      }
    }
  }
}

@keyframes bike {
  0%,
  100% {
    transform: translateY(1);
  }
  50% {
    transform: scaleY(1.03);
  }
}

@keyframes street {
  0% {
    transform: translate3d(0, 0, 0) scaleX(1);
  }
  100% {
    transform: translate3d(-210px, 0, 0) scaleX(0.8);
  }
}

@keyframes helicopter {
  0%,
  100% {
    transform: translate3d(0, -5px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}

@keyframes cloud {
  0% {
    transform: translate3d(0, 0, 0) scaleX(1);
  }
  100% {
    transform: translate3d(-210px, 0, 0) scaleX(0.8);
  }
}
</style>
