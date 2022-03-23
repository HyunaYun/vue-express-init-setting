/**
 * DB Connection
 * @module backend/db
 * @namespace MysqlConnection
 * @method a_sendQuery() : Connect to DB and send Query, get Data Back
 * @method isEmpty() : Check if Returning data from db is empty
 * @method createJsonResponse() : create json response to send the db data to Frontend
 */

const MysqlConnection = {};
const mysqldb = require("mariadb");

const pool = mysqldb.createPool({
    host: "localhost",
    port: "port number",
    user: "root",
    password: "password",
    connectionLimit: 10,
});

/**
 * To connection to db and send query, get data back
 * @async
 * @method a_sendQuery()
 * @param { String } query
 * @param { Array } bindParams
 * @param { Object } options //db 세팅 옵션들, 주로 오라클계열에서 사용한다.
 * @return { Promise<string> } result = [{meta}, {rows}]
 */
MysqlConnection.a_sendQuery = async function (query, bindParams, options) {
    if (query === "" || query === undefined || query === null) {
        console.log("------------------------------");
        console.log(" ---- E: a_sendQuery(*query*) is INVALID---- ");
        console.log("------------------------------");
    }

    try {
        return new Promise(async function (resolve, reject) {
            let result = [];
            let conn = null;

            try {
                conn = await pool.getConnection();
                console.log("------- DB OPENED");

                conn.query("USE schema name");

                result = await conn.query(query, bindParams);
                resolve(result);
            } catch (e) {
                console.log("--------------------! ERROR ::: DB Connection Failed.");
                console.error("--------------------! ERROR ::: a_sendQuery() - DB Connection");
                console.log("--------------------! ERROR ::: DB Connection Failed.");

                reject(e);
            } finally {
                if (conn) {
                    try {
                        await conn.end();
                    } catch (e) {
                        console.log("--------------------! ERROR ::: a_sendQuery(*query*) in INVALID");
                        console.error("--------------------! ERROR ::: a_sendQuery() - closing DB");
                        console.log("--------------------! ERROR ::: a_sendQuery(*query*) in INVALID");
                    }
                }
            }
        });
    } catch (e) {
        console.log("--------------------! ERROR ::: a_sendQuery()");
        console.error("--------------------! ERROR ::: a_sendQuery()");
        console.log("--------------------! ERROR ::: a_sendQuery()");
    }
};

/**
 * To check if returning data from db is empty
 * @method isEmpty()
 * @param { Any } value
 * @function isEmpty()
 * @return Boolean
 */
MysqlConnection.isEmpty = function (value) {
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
MysqlConnection.createJsonResponse = function (result, message, data) {
    let response = {
        result: result,
        message: message,
        data: data,
    };

    return response;
};

module.exports = MysqlConnection;
