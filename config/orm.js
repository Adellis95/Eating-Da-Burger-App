const connection = require("./connection");

function dbQuery(sql, inputs) {
    return new Promise((resolve, reject) => {
        const query = connection.query(sql, inputs, (err, res) => {
            if (err) reject (err, res);
            resolve(res);
        });

        console.log(query.sql);
    });
}

const orm = {
    selectAll: table => {
        return dbQuery("SELECT * FROM ??;", [table]);
    },
    insertOne: (table, column, value) => {
        return dbQuery("INSERT INTO ?? (??) VALUES (?);", [table, column, value]);
    },
    updateOne: (table, updateObject, id) => {
        return dbQuery("UPDATE ?? SET ? WHERE id=? limit 1;", [table, updateObject, id]);
    }
};

module.exports = orm;