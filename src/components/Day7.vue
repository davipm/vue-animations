<template>
  <section class="section">
    <h3 class="section__title">Day 7</h3>

    <div class="frame frame--fix">
      <div class="center">
        <div class="ball"></div>
        <div
          v-for="(item, index) in blubb"
          :key="index"
          :class="`blubb-${item}`"
        ></div>
        <div
          v-for="(item, index) in sparkle"
          :key="index"
          :class="`sparkle-${item}`"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day7",
  data() {
    return {
      blubb: [1, 2, 3, 4, 5, 6, 7],
      sparkle: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>

<style scoped lang="scss">
.frame {
  background-color: #000;
  filter: contrast(25);
}

.ball {
  position: relative;
  width: 90px;
  height: 90px;
  background-color: #ffffff;
  border-radius: 50%;
  filter: blur(15px);
}

@for $i from 1 through 8 {
  .blubb-#{$i} {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    transform: rotate((random(300)) + deg);

    &::after {
      position: absolute;
      display: block;
      content: "";
      width: 50px;
      height: 50px;
      background-color: #ffffff;
      border-radius: 50%;
      animation: rotateIn (2.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
      transform-origin: (40 - $i * 3) + px (40 - $i * 3) + px;
      filter: blur(5px);
    }
  }
}

@for $i from 1 through 10 {
  .sparkle-#{$i} {
    position: absolute;
    top: 38px;
    left: 38px;
    width: (7px + $i) + px;
    height: (7px + $i) + px;
    transform: rotate((random(300)) + deg);

    &::after {
      position: absolute;
      display: block;
      content: "";
      width: (7 + $i) + px;
      height: (7 + $i) + px;
      background: #fff;
      border-radius: 50%;
      transform-origin: (60 - $i * 2) + px (60 - $i * 2) + px;
      animation: rotate (3.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
      filter: blur(3px);
    }
  }
}

@keyframes rotateIn {
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
}
</style>
