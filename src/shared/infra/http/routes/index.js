const { Router } = require('express');

const usersRoutes = require('../../../../modules/users/infra/http/routes/users.routes');

const routes = new Router();

routes.get('/health', (req, res) => {
  return res.status(200).json({
    status: 200,
    error: false,
    response: 'API sucessfull started',
  });
});

routes.use('/users', usersRoutes);

module.exports = routes;
