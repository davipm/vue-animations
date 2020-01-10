<template>
  <section class="section">
    <h3 class="section__title">Day 8</h3>
    <div class="frame frame--fix">
      <div class="moon">
        <div class="main-content">
          <p class="text text--center">
            <span>Time is short</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Day8"
};
</script>

<style scoped lang="scss">
.main-content {
  display: block;
  position: absolute;
  width: 100%;
  height: auto;
  padding: 20px 0;
}

.text {
  display: inline-block;
  position: relative;
  padding: 20px;
  font-size: 1rem;

  &--center {
    text-align: center;
  }
}
</style>
