<template>
  <section class="section">
    <h3 class="section__title">Day 5</h3>

    <div class="frame frame--fix">
      <div v-if="error" class="error">
        <h3>Error</h3>
      </div>
      <div v-else class="center">
        <div class="profile">
          <div class="image">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <img
              :src="user.avatar_url"
              width="70"
              height="70"
              :alt="user.name"
            />
          </div>

          <div class="name">{{ user.name }}</div>
          <div class="job">Software Engineer</div>

          <div class="actions">
            <a :href="user.html_url" target="_blank" class="btn">Follow</a>
            <a href="mailto:davi.p.m94@gmail.com" class="btn">Message</a>
          </div>
        </div>

        <div class="stats">
          <div class="box">
            <span class="value">{{ user.public_repos }}</span>
            <span class="parameter">Public Repository's</span>
          </div>
          <div class="box">
            <span class="value">8</span>
            <span class="parameter">Likes</span>
          </div>
          <div class="box">
            <span class="value">{{ user.followers }}</span>
            <span class="parameter">Follower</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day5",
  data() {
    return {
      user: {},
      error: false,
      loading: false
    };
  },

  created() {
    this.getInfoUser();
  },

  methods: {
    async getInfoUser() {
      this.loading = true;
      this.error = false;

      try {
        const response = await fetch("https://api.github.com/users/davi-94");
        this.user = await response.json();
      } catch (error) {
        this.error = true;
      }

      this.loading = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:600,300");

$brown: #786450;

.frame {
  background: #ca7c4e;
  background: -webkit-linear-gradient(bottom left, #eebe6c 0%, #ca7c4e 100%);
  background: -moz-linear-gradient(bottom left, #eebe6c 0%, #ca7c4e 100%);
  background: -o-linear-gradient(bottom left, #eebe6c 0%, #ca7c4e 100%);
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EEBE6C', endColorstr='#CA7C4E',GradientType=1 );
  color: $brown;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50px;
  left: 40px;
  height: 299px;
  width: 320px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  transform: none;
}

.profile {
  float: left;
  width: 200px;
  height: 320px;
  text-align: center;

  .image {
    position: relative;
    width: 70px;
    height: 70px;
    margin: 38px auto 0 auto;

    .circle-1 {
      position: absolute;
      box-sizing: border-box;
      width: 76px;
      height: 76px;
      top: -3px;
      left: -3px;
      border: 1px solid;
      border-color: $brown $brown $brown transparent;
      border-radius: 50%;
      transition: all 1.5s ease-in-out;
    }

    .circle-2 {
      @extend .circle-1;
      width: 82px;
      height: 82px;
      top: -6px;
      left: -6px;
      border-color: $brown transparent $brown $brown;
    }

    img {
      display: block;
      border-radius: 50%;
      background-color: #f5e8df;
    }

    &:hover {
      cursor: pointer;

      .circle-1 {
        transform: rotate(360deg);
      }

      .circle-2 {
        transform: rotate(-360deg);
      }
    }
  }

  .name {
    font-size: 15px;
    font-weight: 600;
    margin-top: 20px;
  }

  .job {
    font-size: 11px;
    line-height: 15px;
  }

  .actions {
    margin-top: 33px;

    .btn {
      display: block;
      width: 120px;
      height: 30px;
      margin: 0 auto 10px auto;
      padding-top: 4px;
      background: none;
      border: 1px solid $brown;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
      vertical-align: middle;
      text-decoration: none;
      box-sizing: border-box;
      transition: all 0.3s ease-in-out;
      color: $brown;
      cursor: pointer;

      &:hover {
        background-color: $brown;
        color: #ffffff;
      }

      &:focus {
        outline: none;
      }
    }
  }
}

.stats {
  float: left;

  .box {
    box-sizing: border-box;
    width: 120px;
    height: 99px;
    background-color: #f5e8df;
    text-align: center;
    padding-top: 28px;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: #e1cfc2;
      cursor: pointer;
    }

    &:nth-child(2) {
      margin: 1px 0;
    }
  }

  span {
    display: block;
  }

  .value {
    font-size: 18px;
    font-weight: 600;
  }

  .parameter {
    font-size: 11px;
  }
}

.error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
