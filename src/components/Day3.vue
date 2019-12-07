<template>
  <section class="section">
    <h3 class="section__title">Day 3</h3>
    <div class="frame frame--fix">
      <div class="center">
        <div class="dot-1"></div>
        <div class="dot-2"></div>
        <div class="dot-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day3"
};
</script>

<style scoped lang="scss">
$bezier: cubic-bezier(0.21, 0.98, 0.6, 0.99);

.frame {
  background-color: #e56262;
}

.center {
  width: 220px;
  height: 220px;
  top: 90px;
  left: 90px;
  transform: none;
}

.dot-1 {
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  top: 95px;
  left: 95px;
  background-color: #ffffff;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: jump-jump-1 2s $bezier infinite alternate;
}

.dot-2 {
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 60px;
  top: 80px;
  left: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: jump-jump-2 2s $bezier infinite alternate;
}

.dot-3 {
  position: absolute;
  z-index: 1;
  width: 90px;
  height: 90px;
  top: 65px;
  left: 65px;
  background-color: #ffffff;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: jump-jump-3 2s $bezier infinite alternate;
}

@keyframes jump-jump-1 {
  0%,
  70% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }

  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
}

@keyframes jump-jump-2 {
  0%,
  40% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }

  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
}

@keyframes jump-jump-3 {
  0%,
  10% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }

  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
}
</style>
