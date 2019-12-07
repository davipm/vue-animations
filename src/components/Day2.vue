<template>
  <section class="section">
    <h3 class="section__title">Day 2</h3>
    <div class="frame frame--fix">
      <div class="center">
        <div class="circle">
          <div class="sky"></div>
          <div class="sun"></div>
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="shadow"></div>
          <div class="ground"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day2"
};
</script>

<style scoped lang="scss">
$cubic-bezier: cubic-bezier(0.4, 0, 0.49, 1);

.frame {
  background-color: #272c34;
}

.circle {
  position: relative;
  overflow: hidden;
  clip-path: circle(90px at 90px 90px);
  width: 180px;
  height: 180px;
  border-radius: 50%;

  .sky {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 124px;
    background-color: #7ddffc;
    animation: sky-turns-black 4s $cubic-bezier infinite;
  }

  .sun {
    position: absolute;
    z-index: 2;
    top: 7px;
    left: 73px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #ffef00;
    transform-origin: 50% 400%;
    animation: sun-goes-down 4s $cubic-bezier infinite;
  }

  .side-left {
    position: absolute;
    top: 67px;
    left: 35px;
    height: 57px;
    width: 116px;
    background-color: #f4f4f4;
    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
    animation: pyramid-shading 4s $cubic-bezier infinite;
  }

  .side-right {
    position: absolute;
    top: 67px;
    left: 93px;
    height: 57px;
    width: 58px;
    background-color: #dddada;
    clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
    animation: pyramid-shading 4s $cubic-bezier infinite reverse;
  }

  .shadow {
    position: absolute;
    z-index: 2;
    top: 124px;
    left: -80px;
    height: 30px;
    width: 360px;
    background-color: rgba(0, 0, 0, 0.2);
    transform-origin: 50% 0;
    clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
    animation: shadow-on-the-floor 4s $cubic-bezier infinite;
  }

  .ground {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    background-color: #f0de75;
    animation: fading-sand 4s $cubic-bezier infinite;
  }
}

@keyframes sun-goes-down {
  0% {
    background-color: #f57209;
    transform: rotate(-70deg);
  }

  30% {
    background-color: #ffef00;
    transform: rotate(-28deg);
  }

  70% {
    background-color: #ffef00;
  }

  100% {
    background-color: #f57209;
    transform: rotate(70deg);
  }
}

@keyframes sky-turns-black {
  0% {
    background-color: #272c34;
  }

  30% {
    background-color: #7ddffc;
  }

  70% {
    background-color: #7ddffc;
  }

  100% {
    background-color: #272c34;
  }
}

@keyframes pyramid-shading {
  0% {
    background-color: #272c34;
  }

  30% {
    background-color: #f4f4f4;
  }

  70% {
    background-color: #dddada;
  }

  100% {
    background-color: #272c34;
  }
}

@keyframes shadow-on-the-floor {
  0% {
    transform: scaleY(0);
    clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
  }

  30% {
    transform: scaleY(1);
    clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
  }

  55% {
    transform: scaleY(0.4);
  }

  75% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
    clip-path: polygon(115px 0%, 231px 0%, 0% 100%);
  }
}

@keyframes fading-sand {
  0% {
    background-color: #272c34;
  }

  30% {
    background-color: #f0de75;
  }

  70% {
    background-color: #f0de75;
  }

  100% {
    background-color: #272c34;
  }
}
</style>
