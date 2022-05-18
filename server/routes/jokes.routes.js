const JokeController = require("../contollers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAll);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  app.post("/api/jokes", JokeController.createJoke);
  app.put("/api/jokes/:id", JokeController.updateJoke);
  app.delete("/api/jokes/:id", JokeController.deleteJoke);
};
