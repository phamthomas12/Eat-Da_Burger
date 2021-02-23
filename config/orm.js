const connection = require("./connection.js");



const questionMarks = num => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}



const objToSql = ob => {
    const arr = [];


    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (tableInput, cb) {
        const query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: function (tableInput, colToSearch, valOfCol, cb) {
        let query = "INSERT INTO " + tableInput;

        query += " (";
        query += colToSearch.toString();
        query += ") ";
        query += "VALUES (";
        query += questionMarks(valOfCol.length);
        query += ") ";

        console.log(query);

        connection.query(query, valOfCol, function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },


    updateOne: function (tableInput, objColVals, condition, cb) {
        let query = "UPDATE " + tableInput;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        console.log(query);

        connection.query(query, function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    }
}



module.exports = orm;