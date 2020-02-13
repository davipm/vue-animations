<template>
  <section class="section">
    <h3 class="section__title">Day 18</h3>
    <div class="frame frame--fix">
      <input type="checkbox" id="button" class="hidden" />
      <label for="button" class="button"
        >Finish
        <img src="https://100dayscss.com/codepen/checkmark-green.svg" alt=""
      /></label>
      <svg class="circle">
        <circle cx="30" cy="30" r="29" />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day18"
};
</script>

<style scoped lang="scss">
.frame--fix {
  color: #fff;
  background: #57d895;
}

.hidden {
  display: none;
}

.button {
  box-sizing: border-box;
  position: absolute;
  display: block;
  width: 260px;
  height: 60px;
  top: 170px;
  left: 70px;
  padding-top: 13px;
  border: 2px solid #fff;
  border-radius: 30px;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #37be77;
  }

  img {
    position: absolute;
    z-index: 2;
    top: 16px;
    left: 15px;
    opacity: 0;
  }
}

.circle {
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 2;
  top: 170px;
  left: 170px;
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-dasharray: 183 183;
  stroke-dashoffset: 183;
  pointer-events: none;
  transform: rotate(-90deg);
}

input:checked {
  & ~ .button {
    animation: button 0.5s ease both, fill 0.5s ease-out 1.5s forwards;

    img {
      animation: check 0.5s ease-out 1.5s both;
    }
  }

  & ~ .circle {
    animation: circle 2s ease-out 0.5s both;
  }
}

@keyframes button {
  0% {
    width: 260px;
    left: 70px;
    border-color: #fff;
    color: #fff;
  }
  50% {
    color: transparent;
  }
  100% {
    width: 60px;
    left: 170px;
    background: transparent;
    color: transparent;
  }
}

@keyframes circle {
  0% {
    stroke-dashoffset: 183;
  }
  50% {
    stroke-dashoffset: 0;
    stroke-dasharray: 183;
    transform: rotate(-90deg) scale(1);
    opacity: 1;
  }
  90%,
  100% {
    stroke-dasharray: 500 500;
    transform: rotate(-90deg) scale(2);
    opacity: 0;
  }
}

@keyframes fill {
  0% {
    background: transparent;
    border-color: #fff;
  }
  100% {
    background: #fff;
  }
}

@keyframes check {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
