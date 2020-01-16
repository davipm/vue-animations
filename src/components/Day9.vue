<template>
  <section class="section">
    <h3 class="section__title">Day 9</h3>
    <div class="frame frame--fix">
      <div class="center">
        <div class="point-set-1">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-2">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-3">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-4">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-5">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-6">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-7">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-8">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-9">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-10">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-11">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-12">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-13">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-14">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="point-set-15">
          <div class="point-1"></div>
          <div class="point-2"></div>
          <div class="point-3"></div>
          <div class="point-4"></div>
        </div>
        <div class="ring">
          <div class="mark-1">
            <div class="spin"></div>
          </div>
          <div class="mark-2">
            <div class="spin"></div>
          </div>
        </div>
        <svg
          class="spinner"
          viewbox="0 0 202 202"
          xlmns="http://www.w3.org/2000/svg"
        >
          <circle cx="101" cy="101" r="99.5"></circle>
        </svg>
        <div class="date">Mon 15 Jan 2015</div>
        <div class="time">11:42</div>
        <div class="beat"><span class="fa fa-heart"></span>81</div>
        <div class="energy">1248 kcal</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day9"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:700,400");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:700,400");

$speed: 5s; // 60s for realtime

.frame--fix {
  background: #4c4c4c;
  color: #ffffff;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  width: 212px;
  height: 212px;
  background: #242424;
  border: 1px solid #3a3a3a;
  border-radius: 50%;
  text-align: center;
}

.date {
  position: absolute;
  top: 60px;
  width: 100%;
}

.time {
  position: absolute;
  top: 80px;
  width: 100%;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  margin: 4px 0;
}

.beat {
  position: absolute;
  top: 129px;
  left: 57px;

  span {
    color: #f85b5b;
    font-size: 10px;
    float: left;
    margin-top: 1px;
    margin-left: 4px;
    animation: beet 0.9s ease-in-out infinite;
  }
}

.energy {
  position: absolute;
  top: 129px;
  right: 55px;
}

@for $i from 1 through 15 {
  .point-set-#{$i} {
    position: absolute;
    width: 188px;
    height: 188px;
    top: 12px;
    left: 12px;
    transform: rotate((($i - 1) * 6) + deg);

    .point-1 {
      position: absolute;
      width: 2px;
      height: 2px;
      top: 0;
      left: 93px;
      background: #d3d3d3;
      border-radius: 50%;
    }

    .point-2 {
      @extend .point-1;
      top: 93px;
      left: auto;
      right: 0;
    }

    .point-3 {
      @extend .point-1;
      top: auto;
      bottom: 0;
    }

    .point-4 {
      @extend .point-1;
      top: 93px;
      left: 0;
    }
  }
}

.spinner {
  position: absolute;
  width: 202px;
  height: 202px;
  border-radius: 50%;
  top: 5px;
  left: 5px;

  circle {
    stroke: #f85b5b;
    stroke-width: 3;
    fill: none;
    stroke-dasharray: 625;
    animation: spinner $speed linear infinite;
    transform-origin: center center;
    transform: rotate(-90deg);
  }
}

// animations
@keyframes spinner {
  from {
    stroke-dashoffset: 625;
    transform: rotate(-90deg) scaleY(1);
  }
  50% {
    stroke-dashoffset: 0;
    transform: rotate(-90deg) scaleY(1);
  }
  50.001% {
    stroke-dashoffset: 0;
    transform: rotate(-90deg) scaleY(1);
  }
  to {
    stroke-dashoffset: 625;
    transform: rotate(-90deg) scaleY(1);
  }
}

@keyframes beet {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.2);
  }
}
</style>
