exports.seed = function (knex) {
  const data = [
    { id: 1, description: "Cool photo", img_url: "shia.jpeg" },
    { id: 2, description: "Looking swaggy", img_url: "shia2.jpeg" },
    { id: 3, description: "Very cool looks", img_url: "shia3.jpeg" },
  ];

  return knex("shia").insert(data);
};
