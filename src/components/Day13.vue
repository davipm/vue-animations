<template>
  <section class="section">
    <h3 class="section__title">Day 13</h3>
    <div class="frame frame--fix">
      <input type="checkbox" id="cb" />
      <label for="cb" class="button">Send mail</label>
      <label for="cb" class="button reset">Reset</label>
      <div class="circle"></div>
      <div class="circle-outer"></div>
      <svg class="icon mail">
        <polyline points="119,1 119,69 1,69 1,1"></polyline>
        <polyline points="119,1 60,45 1,1 119,1"></polyline>
      </svg>
      <svg class="icon plane">
        <polyline points="119,1 1,59 106,80 119,1"></polyline>
        <polyline points="119,1 40,67 43,105 69,73"></polyline>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day13"
};
</script>

<style scoped lang="scss">
.frame--fix {
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  background: #2c3e50;
}

.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 65px;
  left: 100px;
  background: #354a5f;
  border-radius: 50%;
}

.circle-outer {
  @extend .circle;
  box-sizing: border-box;
  background: none;
  border: 1px solid #354a5f;
}

.icon {
  position: absolute;
  z-index: 2;
  top: 130px;
  left: 140px;
  transform: translate3d(0, 0, 0);
  fill: none;
  stroke-width: 2px;
  stroke: #ecf0f1;
  stroke-linecap: square;
  stroke-dasharray: 325 325;

  &.mail {
    width: 120px;
    height: 78px;
    stroke-dashoffset: 0;
  }

  &.plane {
    width: 120px;
    height: 110px;
    stroke-dashoffset: 325;
  }
}

#cb {
  display: none;
}

.button {
  position: absolute;
  z-index: 10;
  width: 200px;
  height: 40px;
  top: 290px;
  left: 100px;
  background: #ecf0f1;
  color: #2c3e50;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &.reset {
    opacity: 0;
    z-index: 5;
  }

  &:hover {
    background: #1abc9c;
    color: #fff;
  }
}

#cb:checked ~ .button {
  animation: button 1.5s ease-in-out 1.7s;
  animation-fill-mode: both;
}
#cb:checked ~ .reset {
  animation: reset 1s ease-in-out 3.7s;
  animation-fill-mode: both;
}

#cb:checked ~ .circle {
  animation: circle 1s ease-in-out;
  animation-fill-mode: both;
}

#cb:checked ~ .circle-outer {
  animation: circle 0.8s ease-in-out 0.2s;
  animation-fill-mode: both;
}

#cb:checked ~ .mail {
  stroke-dashoffset: 326;
  transition: stroke-dashoffset 1s ease-in-out;
}

#cb:checked ~ .plane {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease-in-out 0.6s;
  animation: fly 2.4s ease-in-out;
  animation-fill-mode: both;
}

@keyframes fly {
  0%,
  50% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  60% {
    transform: translate3d(-10px, 5px, 0) scale(1.05);
  }
  70% {
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  100% {
    transform: translate3d(300px, -150px, 0) scale(0.4);
    opacity: 0;
  }
}

@keyframes circle {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes button {
  0% {
    transform: scale(1);
  }
  30% {
    background: #1abc9c;
    color: transparent;
    width: 200px;
    left: 100px;
  }
  50%,
  60% {
    width: 40px;
    left: 180px;
    transform: scale(1);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    width: 40px;
    left: 180px;
    background: #1abc9c;
    color: transparent;
    transform: scale(0);
  }
}

@keyframes reset {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
