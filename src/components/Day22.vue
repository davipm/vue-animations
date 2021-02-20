<template>
  <section class="section">
    <h3 class="section__title">Day 22</h3>
    <div class="frame frame--fix">
      <div class="center">
        <div
          v-for="(item, index) in Array(10).fill(null)"
          :key="index"
          :class="`line line-${index + 1}`"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day22"
};
</script>

<style scoped lang="scss">
$numberOfLines: 10;

.frame--fix {
  position: relative;
  color: #fff;
  font-family: "Open Sans", Helvetica, sans-serif;
  background: #607d8b;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
}

.line {
  box-sizing: border-box;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
  background-color: #ffffff;
}

@for $i from 1 through $numberOfLines {
  $nullBase: $i - 1;
  $degree: 360 / $numberOfLines;

  .line-#{$i} {
    animation: line-#{$i} 10s ease-in-out infinite;
  }

  @keyframes line-#{$i} {
    0% {
      transform: rotate(0) translate(0, 0) scale(0.01);
    }
    5% {
      transform: rotate(0) translate(0, 0) scale(1);
    }
    15% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, 0) scale(1);
    }
    20% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -100px)
        scale(0.25, 1);
    }
    25% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -100px)
        scale(0.25, 0.25) rotate(179deg);
    }
    30% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -100px)
        scale(1, 0.25) rotate(179deg);
    }
    35% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -60px)
        scale(1, 0.1);
    }
    40% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -60px)
        scale(1, 0.1) translate(-30px, 0);
    }
    45% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -60px)
        scale(1, 0.1) translate(30px, 0);
    }
    50% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -60px)
        scale(0.1, 1);
    }
    55% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -60px)
        scale(0.5, 0.1);
      border-radius: 0;
    }
    60% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -80px)
        scale(0.5, 0.5) rotate(179deg);
      border-radius: 50%;
    }
    65% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, 0)
        scale(0.2, 0.2);
      border-radius: 50%;
    }
    70% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -100px)
        scale(0.25, 1);
      border-radius: 0;
    }
    75% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -100px)
        scale(0.25, 0.25);
    }
    80% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -50px)
        scale(0.5, 0.5);
    }
    85% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -50px)
        scale(0.5, 0.5) rotate(179deg) translate(-50px, 50px);
    }
    90% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -30px)
        scale(0.5, 0.1);
    }
    95% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -10px)
        scale(0.1, 0.5);
    }
    100% {
      transform: rotate(($nullBase * $degree) + deg) translate(0, -300px)
        scale(0.1, 0.5);
    }
  }
}
</style>
