exports.up = function (knex) {
  return knex.schema.createTable("shia", (tbl) => {
    tbl.increments();

    tbl.string("description", 128).notNullable().unique();
    tbl.string("img_url", 256).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("shia");
};
