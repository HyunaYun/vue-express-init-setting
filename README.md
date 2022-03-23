# vue-express-init-setting

<hr>

### Env.

1. Node js : v10.16.3
2. Express js : v4.16.1
3. Vue js : v2
4. @vue/cli : v4.5.13
5. vuex : v3.0.0

### backend : express --view=pug backend

1.  npm i nodemon --save
2.  npm i cors --save

```javascript
// app.js
var cors = require("cors");

app.use(cors());
```

### frontend : vue create frontend

1.  npm i axios --save

```javascript
// main.js
import axios from "axios";

Vue.prototype.$axios = axios;
axios.defaults.timeout = 100000;
```

2.  npm i vuex@3.0.0 -- save

```javascript
// npm i vuex --save 로 설치할 경우
// package.json 파일을 보면
// vue 는 2.x version, vuex 는 4.x version 이다.
// 버전 호환의 문제인것 같아 3.0.0 version 으로 설치해준다. => 3.0.0 으로 설치해야 오류 생기지 않음

// main.js
// vuex 의 경우 폴더 따로 지정해두고 store.js 에서 Vuex import 한 후
// main.js 에서 import store from 'vuex/store' 로 사용한다.

import Vuex from "vuex";

Vue.use(Vuex);

// store 에서 vuex import 했을 경우
// main.js

import store from "./vuex/store";

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
```

3.  npm i ant-design-vue --save
    npm i ant-design --save

```javascript
// main.js
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);
```
