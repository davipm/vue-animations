<template>
  <section class="section">
    <h3 class="section__title">Day 4</h3>

    <div class="frame frame--fix">
      <div class="card">
        <div class="header">
          <span class="title big">Weekly report</span>
          <span class="date small">01. Feb - 07. Feb</span>
          <span class="type small">Revenue</span>
          <span class="value big">$ 3621.79</span>
        </div>
        <div class="clearfix"></div>
        <div class="parameter">
          <span class="red">Views</span>
          <span class="blue">Purchases</span>
        </div>
        <div class="statistic">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
          <div class="data red">
            <svg>
              <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19" />
            </svg>
            <div class="points">
              <div class="point-1">
                <div class="tooltip">458</div>
              </div>
              <div class="point-2">
                <div class="tooltip">458</div>
              </div>
              <div class="point-3">
                <div class="tooltip">458</div>
              </div>
              <div class="point-4">
                <div class="tooltip">458</div>
              </div>
              <div class="point-5">
                <div class="tooltip">458</div>
              </div>
              <div class="point-6">
                <div class="tooltip">458</div>
              </div>
              <div class="point-7">
                <div class="tooltip">458</div>
              </div>
            </div>
          </div>
          <div class="data blue">
            <svg>
              <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"></polyline>
            </svg>
            <div class="points">
              <div class="point-1">
                <div class="tooltip">458</div>
              </div>
              <div class="point-2">
                <div class="tooltip">458</div>
              </div>
              <div class="point-3">
                <div class="tooltip">458</div>
              </div>
              <div class="point-4">
                <div class="tooltip">458</div>
              </div>
              <div class="point-5">
                <div class="tooltip">458</div>
              </div>
              <div class="point-6">
                <div class="tooltip">458</div>
              </div>
              <div class="point-7">
                <div class="tooltip">458</div>
              </div>
            </div>
          </div>
        </div>
        <div class="days">
          <span class="day">Mon</span>
          <span class="day">Tue</span>
          <span class="day">Wed</span>
          <span class="day">Thu</span>
          <span class="day">Fri</span>
          <span class="day">Sat</span>
          <span class="day">Sun</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Day4'
  }
</script>

<style scoped lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:600,400);

  $red: #FA7373;
  $blue: #7BA2FF;

  .frame {
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #42A7A1;
  }

  .card {
    position: absolute;
    top: 90px;
    left: 60px;
    width: 280px;
    height: 220px;
    background-color: #FFFFFF;
    border-radius: 3px;
    box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
    overflow: hidden;

    .header {
      position: relative;
      height: 60px;
      width: 100%;
      background-color: #F1BA64;
      color: #FFFFFF;

      .big {
        position: absolute;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
      }

      .small {
        position: absolute;
        font-weight: 400;
        font-size: 11px;
      }

      .title {
        top: 12px;
        left: 15px;
      }

      .date {
        top: 30px;
        left: 15px;
      }

      .type {
        top: 14px;
        right: 15px;
      }

      .value {
        top: 28px;
        right: 15px;
      }
    }

    .parameter {
      text-align: right;
      padding: 10px 0 14px 0;

      span {
        position: relative;
        font-size: 9px;
        color: #606060;
        line-height: 13px;
        padding: 0 10px 0 25px;

        &::before {
          position: absolute;
          left: 6px;
          top: 6px;
          display: block;
          content: '';
          width: 11px;
          height: 3px;
          border-radius: 3px;
        }
      }

      .red::before {
        background-color: $red;
      }

      .blue::before {
        background-color: $blue;
      }
    }

    .statistic {
      position: relative;
      height: 81px;
      width: 260px;
      margin: 0 auto;

      .line-1 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #F2F2F2;
      }

      .line-2 {
        @extend .line-1;
        top: 40px;
      }

      .line-3 {
        @extend .line-1;
        top: inherit;
        bottom: 0;
      }

      .data {
        svg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        polyline {
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
        }

        &.red polyline {
          stroke: $red;
        }

        &.blue polyline {
          stroke: $blue;
        }

        .tooltip {
          position: absolute;
          bottom: 13px;
          left: 50%;
          transform: translate3d(-50%, 10px, 0);
          font-weight: 600;
          font-size: 11px;
          line-height: 11px;
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: 3px;
          visibility: hidden;
          opacity: 0;
          transition: transform 0.4s ease-out 0s, opacity 0.4s ease-out 0s;

          &::after {
            position: absolute;
            display: block;
            content: '';
            width: 6px;
            height: 6px;
            left: 50%;
            margin-left: -3px;
            bottom: -3px;
            transform: rotate(45deg);
          }
        }

        [class^='point-'] {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          cursor: pointer;
          z-index: 10;

          &:hover .tooltip {
            visibility: visible;
            opacity: 1;
            transform: translate3d(-50%, 0, 0);
          }
        }

        &.red {
          [class^='point-'], .tooltip, .tooltip::after {
            background-color: $red;
          }

          .point-1 {
            top: 43px;
            left: 7px;
          }

          .point-2 {
            top: 9px;
            left: 48px;
          }

          .point-3 {
            top: 20px;
            left: 88px;
          }

          .point-4 {
            top: 8px;
            left: 128px;
          }

          .point-5 {
            top: 35px;
            left: 169px;
          }

          .point-6 {
            top: 45px;
            left: 209px;
          }

          .point-7 {
            top: 16px;
            left: 249px;
          }
        }

        &.blue {
          [class^='point-'], .tooltip, .tooltip::after {
            background-color: $blue;
          }

          .point-1 { left: 7px; top: 58px; }
          .point-2 { left: 48px; top: 47px; }
          .point-3 { left: 88px; top: 62px; }
          .point-4 { left: 128px; top: 52px; }
          .point-5 { left: 169px; top: 58px; }
          .point-6 { left: 209px; top: 71px; }
          .point-7 { left: 249px; top: 61px; }
        }
      }
    }

    .days {
      width: 280px;
      margin: 0 auto;

      .day {
        display: flex;
        float: left;
        width: (100% / 7);
        font-size: 9px;
        color: #949494;
        line-height: 30px;
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
</style>
