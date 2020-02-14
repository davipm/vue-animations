<template>
  <section class="section">
    <h3 class="section__title">Day 19</h3>
    <div class="frame frame--fix">
      <div class="list">
        <div class="head">
          <div class="title">{{ days[d.getDay()] }}</div>
          <div class="subtitle">
            {{ days[d.getMonth()] }} {{ d.getDate() }}, {{ d.getFullYear() }}
          </div>
        </div>
        <ul>
          <li>
            <input type="checkbox" id="item-1" name="item-1" />
            <label for="item-1" class="text">Create a list</label>
            <label for="item-1" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
          <li>
            <input type="checkbox" id="item-2" name="item-2" />
            <label for="item-2" class="text">Create a list</label>
            <label for="item-2" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
          <li>
            <input type="checkbox" id="item-3" name="item-3" />
            <label for="item-3" class="text">Create a list</label>
            <label for="item-3" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
          <li>
            <input type="checkbox" id="item-4" name="item-4" />
            <label for="item-4" class="text">Create a list</label>
            <label for="item-4" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day19",
  data() {
    return {
      d: new Date(),
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
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

.list {
  position: absolute;
  width: 240px;
  height: 280px;
  top: 60px;
  left: 80px;
  background: #fff;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  .head {
    padding: 20px 0;
    margin: 0 30px;
    border-bottom: 1px solid #d4dce0;
  }

  .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  .subtitle {
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 4px 0;
    margin: 0 30px;

    li {
      position: relative;
      display: block;
      margin: 24px 0;
      height: 14px;
    }

    .text {
      float: left;
      font-size: 13px;
      line-height: 14px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    .button {
      position: relative;
      z-index: 2;
      box-sizing: border-box;
      float: right;
      width: 14px;
      height: 14px;
      border: 1px solid #497081;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.4s ease-out 0.5s;
    }

    .checkmark {
      position: absolute;
      top: 2px;
      right: 0;
      stroke: #c8d4d9;
      fill: none;
      stroke-width: 1.5;
      stroke-dasharray: 30 30;
      stroke-dashoffset: 30;
      transition: all 0.5s ease-out;
    }

    input {
      display: none;

      &:checked ~ .text {
        color: #c8d4d9;
      }

      &:checked ~ .button {
        transition: all 0.4s ease-in;
        transform: scale(1.5);
        opacity: 0;
      }

      &:checked ~ .checkmark {
        stroke-dashoffset: 0;
        transition: all 0.5s ease-out 0.4s;
      }
    }
  }

  @media (max-width: 768px) {
    left: 55px;
  }
}
</style>
