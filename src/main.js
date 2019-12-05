import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

new Vue({
  render: h => h(App)
}).$mount("#app");
