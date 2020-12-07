const { updateOne } = require("../config/orm");
const orm = require("../config/orm");

let burger = {
    selectAll: () => {
        return orm.selectAll("burgers");
    },
    insertOne: burgerName => {
        return orm.insertOne("burgers", "burger_name", burgerName);
    },
    updateOne: (updateObject, id) => {
        return orm.updateOne("burgers", updateObject, id);
    }
};

module.exports = burger;