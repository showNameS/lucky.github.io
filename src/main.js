import Vue from "vue";
import App from "./App.vue";
import Axios from 'axios';

import "@/assets/css/resize.css";
import "@/assets/js/rem";

import { Swipe, SwipeItem, Lazyload, Dialog } from "vant";
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Dialog);


Vue.prototype.axios = Axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
