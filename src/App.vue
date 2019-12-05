<template>
  <div id="app">
    <h1 class="app__title">CSS 100 days Challenger by Davi Pereira</h1>
    <Day1 />
    <Day2 />
    <Day3 />
    <Day4 />
    <Day5 />
  </div>
</template>

<script>
  import Day1 from "./components/Day1";
  import Day2 from "./components/Day2";
  import Day3 from "./components/Day3";
  import Day4 from "./components/Day4";
  import Day5 from "./components/Day5";

  export default {
    name: 'app',
    components: {
      Day1,
      Day2,
      Day3,
      Day4,
      Day5,
    },

    metaInfo: {
      title: 'CSS 100 days Challenger by Davi Pereira',
      //titleTemplate: '%s - Yay!',
      htmlAttrs: {
        lang: 'pt-BR',
        amp: true
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'title', content: 'CSS 100 days Challenger by Davi Pereira 2019' },
        { name: 'description', content: 'CSS 100 days Challenger by Davi Pereira 2019' },

        // facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://davi100daycsschallenger.surge.sh/' },
        { property: 'og:title', content: 'CSS 100 days Challenger by Davi Pereira 2019' },
        { property: 'og:description', content: 'CSS 100 days Challenger by Davi Pereira 2019' },
        { property: 'og:image', content: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4' },

        // twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://davi100daycsschallenger.surge.sh/' },
        { property: 'twitter:title', content: 'CSS 100 days Challenger by Davi Pereira 2019' },
        { property: 'twitter:description', content: 'CSS 100 days Challenger by Davi Pereira 2019' },
        { property: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4' },
      ]
    }
  }
</script>

<style lang="scss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: normal;
    font-style: normal;
    text-align: left;
    line-height: 1.5;
    color: black;
    background-color: #ffffff;
  }

  .app__title {
    text-align: center;
  }

  .section {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2rem;
    padding-right: 15px;
    padding-left: 15px;

    &__title {
      text-align: center;
      font-size: 2rem;
    }
  }

  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
    background-color: #3FAF82;
    color: #ffffff;
    transform: translate(-50%, -50%);

    &--fix {
      position: relative;
      margin: auto;
      top: auto;
      left: auto;
      transform: none;
    }
  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
