/**
 * DB
 * Mysql / Mariadb Connection
 * @module backend/db
 * @namespace MysqlConnection
 * @method a_sendQuery
 * @method isEmpty
 * @method createJsonResponse
 */
const MysqlConnection = {};

var mysqldb = require("mysql");

/**
 * To connection to db and send query, get data back
 * @async
 * @method a_sendQuery()
 * @param { String } query
 * @param { Array } bindParams
 * @param { Object } options
 * @return { Promise<string> } result = [{meta}, {rows}]
 */
MysqlConnection.a_sendQuery = async function (query, bindParams, options) {
    if (query === "" || query === null || query === undefined) {
        console.log("------------------------------------");
        console.log("----- E : a_sendQuery(*query*) is INVALID -----");
        console.log("------------------------------------");
    }

    try {
        return new Promise(async function (resolve, reject) {
            let result = [];
            let conn = null;

            try {
                conn = await mysqldb.getConnection({}); //  여기에 pool 내용 넣을 수 있는가?

                console.log("DB OPENED");

                conn.query("SCHEMA NAME");

                result = conn.query(query, bindParams);
                resolve(result);
            } catch (e) {
                console.log(" ---- E: a_sendQuery ----");
                console.error(e);
                console.log(" ---- E: a_sendQuery ----");

                reject(e);
            } finally {
                if (conn) {
                    try {
                        await conn.end();
                        console.log("DB END");
                    } catch (e) {
                        console.log(" ---- E: a_sendQuery: FINALLY ----");
                        console.error(e);
                        console.log(" ---- E: a_sendQuery: FINALLY ----");
                    }
                }
            }
        });
    } catch (e) {
        console.log(" ---- E: a_sendQuery ----");
        console.error(e);
        console.log(" ---- E: a_sendQuery ----");
    }
};

/**
 * To check if returning data from db is empty
 * @method isEmpty()
 * @param { Any } value
 * @function isEmpty()
 * @return Boolean
 */
OracleConnection.isEmpty = function (value) {
    return value === "" || value === null || value === undefined || (value !== null && typeof value === "object" && !Object.keys(value).length) ? true : false;
};

/**
 * To create json Response to send the db data to frontend
 * @method createJsonResponse()
 * @param { String } result
 * @param { String } message
 * @param { Array } data
 * @return { Object } response
 */
OracleConnection.createJsonResponse = function (result, message, data) {
    let response = {
        result,
        message,
        data,
    };

    return response;
};

module.exports = MysqlConnection;
