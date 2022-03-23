import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// axios
import axios from "axios";
Vue.prototype.$axios = axios;

// vuex
import store from "./vuex/store";

// ant-design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
