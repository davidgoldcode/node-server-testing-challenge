const db = require("../data/connection.js");

module.exports = {
  find,
  findById,
  insert,
  remove,
};

function find() {
  return db("shia");
}

async function insert(details) {
  try {
    const [id] = await db("shia").insert(details, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("shia").where({ id }).first();
}

function remove(id) {
  return findById(id).del();
}
