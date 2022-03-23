import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// axios
import axios from "axios";
Vue.prototype.$axios = axios;

// vuex
import store from "./vuex/store";

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
