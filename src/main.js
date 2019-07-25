import Vue from "vue";
import App from "./App.vue";

import "@/assets/css/resize.css";
import "@/assets/js/rem";

import { Swipe, SwipeItem, Lazyload, Dialog } from "vant";
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Dialog);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
