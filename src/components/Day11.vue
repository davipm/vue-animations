<template>
  <section class="section">
    <h3 class="section__title">Day 11</h3>
    <div class="frame frame--fix">
      <div class="quote">
        <p>
          I know quite certainly that I myself have no special talent;
          curiosity,
          <span onclick="void(0);" class="tooltip"
            >obsession
            <span class="info">
              <span class="pronounce"
                >[əbˈseʃ(ə)n]<span class="fa fa-volume-up"></span
              ></span>
              <span class="text"
                ><strong>Obsession</strong>, a persistent disturbing
                preoccupation with an often unreasonable idea or feeling.</span
              >
            </span>
          </span>
          and dogged endurance, combined with self-criticism have brought me to
          my ideas.
        </p>
        <p class="author">Albert Einstein</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day10"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:600,400,300,300italic");

.frame--fix {
  color: #ffffff;
  background: #4cb6de;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.quote {
  position: relative;
  margin-top: 90px;
  padding: 0 30px;

  &::before {
    display: block;
    position: absolute;
    z-index: 0;
    content: "„";
    font-family: Arial, sans-serif;
    font-size: 250px;
    color: #6ac2e3;
    line-height: 35px;
    top: -100px;
    left: -7px;
  }

  p {
    position: relative;
    z-index: 1;
    font-size: 24px;
    line-height: 35px;
    margin: 20px 0;
  }

  .author {
    font-weight: 300;
    font-style: italic;
    font-size: 20px;
    line-height: 28px;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    background: #286f8a;
    padding: 0 8px 5px 8px;
    margin: -10px 0;
    cursor: pointer;

    &:hover .info,
    &:focus .info {
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    .info {
      box-sizing: border-box;
      position: absolute;
      bottom: 53px;
      left: -85px;
      display: block;
      background: #286f8a;
      width: 300px;
      font-size: 16px;
      line-height: 24px;
      cursor: text;
      visibility: hidden;
      opacity: 0;
      transform: translate3d(0, -20px, 0);
      transition: all 0.5s ease-out;

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 14px;
        bottom: -14px;
        left: 0;
      }

      &::after {
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        bottom: -5px;
        left: 50%;
        margin-left: -5px;
        background: #286f8a;
      }

      .pronounce {
        display: block;
        background: #fff;
        color: #286f8a;
        padding: 8px 17px 10px 17px;
        line-height: 16px;

        .fa {
          position: relative;
          margin-left: 10px;
          top: 1px;
          cursor: pointer;
          transition: all 0.2s ease-out;

          &:hover {
            transform: scale(1.15) translate3d(0, 0, 0);
            backface-visibility: unset;
          }
        }
      }

      .text {
        display: block;
        padding: 13px 17px;
      }
    }
  }
}
</style>
