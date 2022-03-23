var express = require("express");
var router = express.Router();

const Constants = require("../modules/Constants");

/**
 * @module ~/router/routerSample
 * @basePath ~/sample
 * @path @basePath + /api-sample
 * @function getSampleData()
 */

let apiSample = require("../api/sample/api-sample");
router.get("/api-sample", function (req, res, next) {
    res.set(Constants.ROUTER_HEADER);
    apiSample.getSampleData().then((ret) => {
        res.send(JSON.stringify(ret));
    });
});

module.exports = router;
