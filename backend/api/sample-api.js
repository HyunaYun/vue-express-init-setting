/**
 * Sample Api
 * @path sample-api
 * @module backend/api
 * @method getSampleData()
 * @param -
 * @return array : jsonResult
 */
const OracleConnection = require("../db/OracleConnection");
//const MysqlConnection = require('../db/MysqlConnection')
const Constants = require("../modules/Constants");

exports.getSampleData = () => {
    return getSampleDataLocal();
};

async function getSampleDataLocal() {
    let jsonResult = [];

    try {
        let query = ``;
        let bindParams = [];

        let result = await OracleConnection.a_sendQuery(query, bindParams);

        if (OracleConnection.isEmpty(result)) {
            return OracleConnection.createJsonResponse(false, Constants.MESSAGE_FAILED, jsonResult);
        } else {
            jsonResult.push(result);
            return OracleConnection.createJsonResponse(true, Constants.MESSAGE_SUCCESS, jsonResult);
        }
    } catch (e) {
        console.log(" ------------ E : getSampleData ----------");
        console.log(e);
        console.log(" ------------ E : getSampleData ----------");
    }
}
