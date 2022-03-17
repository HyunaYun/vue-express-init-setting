import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/** AXIOS */
import axios from "axios";
Vue.prototype.$axios = axios;

/** VUEX */
import Vuex from "vuex";
Vue.use(Vuex);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
