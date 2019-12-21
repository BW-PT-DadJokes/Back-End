exports.seed = function(knex) {
  return knex("jokes").insert([
    {
      user_id: 1,
      question:
        "A slice of apple pie is $2.50 in Jamaica and $3.00 in the Bahamas.",
      punchline: "These are the pie rates of the Caribbean."
    },
    {
      user_id: 2,
      question:
        'My friend keeps saying "cheer up man it could be worse, you could be stuck underground in a hole full of water."',
      punchline: "I know he means well."
    },
    {
      user_id: 3,
      question: "How do I look?",
      punchline: "With your eyes."
    }
  ]);
};
