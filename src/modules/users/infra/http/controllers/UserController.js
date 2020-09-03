const CreateUserService = require('../../../services/CreateUserService');

class UserController {
  async index(req, res) {
    const user = await CreateUserService.execute(req.body);

    const { id, email, createdAt, updatedAt } = user;

    return res.status(200).json({
      status: 200,
      error: false,
      response: {
        id,
        email,
        createdAt,
        updatedAt,
      },
    });
  }
}

module.exports = new UserController();
