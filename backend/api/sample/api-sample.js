/**
 * @API
 * @desc sample api
 * @path sample/api-sample
 * @module backend/api/sample/api-sample
 * @method getSampleData()
 * @param -
 * @return array : jsonResult
 */

const OracleConnection = require("../../db/OracleConnection");
// const MysqlConnection = require("../../db/MysqlConnection");
const Constants = require("../../modules/Constants");

exports.getSampleData = () => {
    return getSampleDataLocal();
};

async function getSampleDataLocal() {
    let jsonResult = [];

    try {
        const query = ``;
        const bindParams = [];

        const result = await OracleConnection.a_sendQuery(query, bindParams);

        if (OracleConnection.isEmpty(result)) {
            return OracleConnection.createJsonResponse(false, Constants.MESSAGE_FAILED, jsonResult);
        } else {
            for (let i = 0; i < result.rows.length; i++) {
                jsonResult.push(result.rows[i]);
            }
            return OracleConnection.createJsonResponse(true, result.rows.length + Constants.MESSAGE_SUCCESS, jsonResult);
        }
    } catch (e) {
        console.log(" ---- E: getSampleData ----");
        console.error(e);
        console.log(" ---- E: getSampleData ----");
    }
}
