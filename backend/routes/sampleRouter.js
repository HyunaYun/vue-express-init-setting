var express = require("express");
var router = express.Router();

const Constants = require("../modules/Constants");

/**
 * @module ~/router/sampleRouter
 * @basePath ~/sample
 * @path @basePath + /sample
 * @function getSampleData()
 * @param {}
 */
let sampleDataApi = require("../api/sample-api");
router.get("/sample", function (req, res, next) {
    res.set(Constants.ROUTER_HEADER);
    sampleDataApi.getSampleData().then((ret) => {
        res.send(JSON.stringify(ret));
    });
});

module.exports = router;
