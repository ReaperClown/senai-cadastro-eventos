module.exports = app => {
  const controller = app.controllers.eventos;

  app.route("/api/v1/eventos").get(controller.listEvents);
};
