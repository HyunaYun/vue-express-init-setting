import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/** AXIOS */
import axios from "axios";
axios.defaults.timeout = 100000;
Vue.prototype.$axios = axios;

/** VUEX */
import store from "./vuex/store";

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
