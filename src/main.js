import Vue from "vue";
import App from "./App.vue";
import "./g-ui";
import "./assets/fonts/font.scss";


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
