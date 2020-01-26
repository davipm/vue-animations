<template>
  <section class="section">
    <h3 class="section__title">Day 12 | in progress</h3>
    <div class="frame frame--fix">
      <div class="profile" id="profile-1">
        <img src="https://100dayscss.com/codepen/13-1.jpg" alt="User Profile" />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="profile" id="profile-2">
        <img src="https://100dayscss.com/codepen/13-1.jpg" alt="User Profile" />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="profile" id="profile-3">
        <img src="https://100dayscss.com/codepen/13-1.jpg" alt="User Profile" />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="profile" id="profile-4">
        <img src="https://100dayscss.com/codepen/13-1.jpg" alt="User Profile" />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="details" id="details-1">
        <div class="close"></div>
        <img
          src="https://100dayscss.com/codepen/13-1-header.jpg"
          alt=""
          class="header"
        />
        <div class="image">
          <img src="https://100dayscss.com/codepen/13-1.jpg" alt="" />
        </div>
        <div class="infos">
          <div class="name">
            Davi Pereira
          </div>
          <div class="action">
            <div class="btn"></div>
            <div class="btn"></div>
            <div class="btn"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day12"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:600");

$red: #ec6565;

.frame--fix {
  background: #fff;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.profile {
  position: relative;
  float: left;
  width: 194px;
  height: 194px;
  margin: 4px 0 0 4px;
  cursor: pointer;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000;
    opacity: 0;
    transition: all 0.6s ease-in-out;
  }

  .plus {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    background: $red;
    border-radius: 50%;
    box-shadow: 2px 4px 10px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease-in-out;
    opacity: 0;
    transform: scale(2);
    pointer-events: none;
  }

  &:hover {
    .plus {
      opacity: 1;
      transform: scale(1) translate3d(0, 0, 0);
    }

    .overlay {
      opacity: 0.4;
    }
  }
}

.details {
  display: none;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  font-size: 0;

  &.active {
    pointer-events: all;

    .header {
      transform: translate3d(0, 0, 0);
      transition: all 0.8s ease-out;
    }

    .image {
      transform: translate3d(0, 0, 0);
      transition: all 0.8s ease-out 0.3s;
    }

    .infos {
      transform: translate3d(0, 0, 0);
      transition: all 0.8s ease-out;
    }

    .close {
      transform: rotate(45deg) translate3d(0, 0, 0);
      transition: background 0.3s ease-in-out, transform 0.8s ease-out 0.6s;
    }
  }

  .close {
  }
}

#details-1 {
  display: block;
}
</style>
