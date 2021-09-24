module.exports = app => {
  const eventosDB = app.data.eventos;
  const controller = {};

  controller.listEvents = (req, res) =>
    res.status(200).json(eventosDB);

  return controller;
};
