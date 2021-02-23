const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (colToSearch, valOfCol, cb) {
        orm.insertOne("burgers", colToSearch, valOfCol, function (res) {
            cb(res);

        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

};

module.exports = burger;