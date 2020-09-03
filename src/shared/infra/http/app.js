require('dotenv/config');
const express = require('express');
require('express-async-errors');
const Youch = require('youch');
const AppError = require('../../errors/AppError');

require('../sequelize/index');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    /**
     * Error Handling
     */
  }

  routes() {
    this.server.use(routes);
    this.server.use(async (err, req, res, next) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          status: err.statusCode,
          error: err.error,
          response: err.message,
        });
      }
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      console.error(err);

      return res.status(500).json({
        status: 500,
        message: 'Internal server error',
      });
    });
  }
}

module.exports = new App().server;
