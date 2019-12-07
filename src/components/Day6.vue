<template>
  <section class="section">
    <h3 class="section__title">Day 6</h3>

    <div class="frame frame--fix">
      <div class="panel" :class="{ 'show-menu': menuActive }">
        <div class="header">
          <div class="menu-icon" v-on:click="handleMenuIcon">
            <div class="dash-top"></div>
            <div class="dash-bottom"></div>
            <div class="circle"></div>
          </div>
          <span class="title">Notification</span>
          <input
            type="text"
            class="search-input"
            :class="{ active: searchActive }"
            placeholder="Search"
          />
          <div class="fa fa-search search-icon" @click="handleSearchIcon"></div>
        </div>

        <div class="notifications clearfix">
          <div class="line"></div>
          <div class="notification">
            <div class="circle"></div>
            <time class="time">9:24 AM</time>
            <p><strong>Davi Pereira</strong> posted a photo on your wall.</p>
          </div>
          <div class="notification">
            <div class="circle"></div>
            <time class="time">9:24 AM</time>
            <p><strong>Davi Pereira</strong> posted a photo on your wall.</p>
          </div>
          <div class="notification">
            <div class="circle"></div>
            <time class="time">9:24 AM</time>
            <p><strong>Davi Pereira</strong> posted a photo on your wall.</p>
          </div>
        </div>
      </div>

      <nav class="menu" :class="{ active: menuActive }">
        <ul>
          <li><span class="fa fa-dashboard"></span>Dashboard</li>
          <li><span class="fa fa-user"></span>Profile</li>
          <li><span class="fa fa-bell"></span>Notifications</li>
          <li><span class="fa fa-comments"></span>Messages</li>
          <li><span class="fa fa-gear"></span>Settings</li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day6",
  data() {
    return {
      searchActive: false,
      menuActive: false
    };
  },
  methods: {
    handleSearchIcon() {
      this.searchActive = !this.searchActive;
    },
    handleMenuIcon() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:600,400");

$blue: #5f98cd;
$blue-dark: #264057;
$blue-light: #b2daff;

.frame {
  background-color: $blue-dark;
  color: #666666;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.panel {
  position: absolute;
  z-index: 2;
  width: 300px;
  height: 300px;
  top: 50px;
  left: 50px;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;

  &.show-menu {
    transform: translate3d(150px, 0, 0);
  }

  .header {
    width: 100%;
    height: 60px;
    background-color: $blue;

    .menu-icon {
      position: absolute;
      width: 29px;
      height: 15px;
      top: 23px;
      left: 20px;
      cursor: pointer;

      &:hover {
        .dash-top,
        .dash-bottom,
        .circle {
          background-color: #ffffff;
        }
      }

      .dash-top {
        position: absolute;
        width: 20px;
        height: 3px;
        top: 0;
        left: 0;
        background-color: $blue-light;
        border-radius: 3px;
        transition: all 0.2s ease-in-out;
      }

      .dash-bottom {
        @extend .dash-top;
        width: 29px;
        top: auto;
        bottom: 0;
      }

      .circle {
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 4px;
        top: -2px;
        right: 0;
        background-color: $blue-light;
        transition: all 0.2s ease-in-out;
      }
    }

    .title {
      display: block;
      text-align: center;
      line-height: 60px;
      color: #ffffff;
      font-weight: 600;
      font-size: 15px;
    }

    .search-input {
      box-sizing: border-box;
      position: absolute;
      top: 13px;
      right: 55px;
      width: 230px;
      height: 34px;
      border-radius: 17px;
      border: 0;
      background-color: #ffffff;
      padding: 0 17px;
      font-size: 13px;
      color: #666666;
      transition: all 0.3s ease-in-out;
      transform: translateX(15px);
      opacity: 0;
      pointer-events: none;

      &:focus {
        outline: none;
      }

      &.active {
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
      }
    }

    .search-icon {
      position: absolute;
      z-index: 2;
      font-size: 21px;
      color: $blue-light;
      top: 18px;
      right: 20px;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }

  .notifications {
    position: relative;
    height: 100%;
    overflow: hidden;

    .line {
      position: absolute;
      top: 0;
      left: 27px;
      bottom: 0;
      width: 3px;
      background: #ebebeb;
    }

    .notification {
      position: relative;
      z-index: 2;
      margin: 25px 20px 25px 43px;

      @for $i from 2 through 4 {
        &:nth-child(#{$i}) {
          animation: here-am-i 0.5s ease-out ($i/5 + s);
          animation-fill-mode: both;
        }
      }

      &:hover {
        color: $blue;
        cursor: pointer;
      }

      .circle {
        box-sizing: border-box;
        position: absolute;
        height: 11px;
        width: 11px;
        background: #fff;
        border: 2px solid $blue;
        box-shadow: 0 0 0 3px #fff;
        border-radius: 6px;
        top: 0;
        left: -20px;
      }

      .time {
        display: block;
        font-size: 11px;
        line-height: 11px;
        margin-bottom: 2px;
      }

      p {
        font-size: 15px;
        line-height: 20px;
        margin: 0;

        b {
          font-weight: 600;
        }
      }
    }
  }
}

.menu {
  position: absolute;
  width: 170px;
  height: 270px;
  top: 65px;
  left: 50px;
  background: #43627d;
  border-radius: 3px;
  transition: all 0.5s ease-in-out;
  transform: translate3d(20px, 0, 0);

  &.active {
    box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(0, 0, 0);
  }

  ul {
    margin: 0;
    padding: 10px 0;
  }

  li {
    color: #93b2cd;
    margin: 0;
    padding: 18px 17px;
    list-style: none;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #fff;
      background: #385269;
    }

    span {
      display: block;
      float: left;
      margin-right: 8px;
      margin-top: -1px;
    }

    .fa-gear,
    .fa-user,
    .fa-bell {
      margin-top: 0;
    }
  }
}

@keyframes here-am-i {
  from {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
