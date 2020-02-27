<template>
  <section class="section">
    <h3 class="section__title">Day 19</h3>
    <div class="frame frame--fix">
      <div class="map">
        <Map />
      </div>
      <div class="marker">
        <svg width="48px" height="72px" viewBox="0 0 48 72">
          <path
            d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"
          />
        </svg>
        <div class="shadow"></div>
      </div>
      <div class="card">
        <img
          src="https://100dayscss.com/codepen/surfshop.jpg"
          class="banner"
          width="240"
          height="60"
          alt
        />
        <p class="name">Phil's Surfshop</p>
        <p>
          High Street 19
          <br />8579 Arkney
        </p>

        <div class="actions">
          <a href="#" title>Save</a>
          <span class="divide"></span>
          <a href="#">Route</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Map from "../assets/icons/Map";
import Marker from "../assets/icons/Marker";

export default {
  name: "Day20",
  components: {
    Map,
    Marker
  }
};
</script>

<style scoped lang="scss">
.frame--fix {
  color: #497081;
  background: #fda231;
  background: -webkit-linear-gradient(bottom left, #fda231 0%, #fdca31 100%);
  background: -moz-linear-gradient(bottom left, #fda231 0%, #fdca31 100%);
  background: -o-linear-gradient(bottom left, #fda231 0%, #fdca31 100%);
  background: linear-gradient(to top right, #fda231 0%, #fdca31 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FDA231', endColorstr='#FDCA31',GradientType=1 );
}

.map {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #2196f3;

  svg {
    fill: #1f8de4;
  }
}

.marker {
  position: absolute;
  z-index: 5;
  top: 151px;
  left: 176px;
  font-size: 0;
  cursor: pointer;
  transform: perspective(600px) rotateY(0deg);
  opacity: 1;
  transition: all 0.5s ease 0.4s;

  &.inactive {
    transform: perspective(600px) rotateY(-90deg);
    opacity: 0;
    transition: all 0.5s ease;
  }

  svg {
    fill: #ffcc30;
    animation: hovering 1s ease-in-out infinite alternate;
  }

  .shadow {
    width: 18px;
    height: 4px;
    background: #1b7ac7;
    border-radius: 50%;
    margin: 5px auto 0 auto;
    animation: shadow 1s ease-in-out infinite alternate;
  }
}
</style>
