let os = require("os");
let hostname = os.hostname();

const API_URLS = {
    /** base url */
    BASE_URL: `http://${hostname}.3000/`,
};

export default API_URLS;
