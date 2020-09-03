const User = require('../../../../shared/infra/sequelize/models/User');

class UserRepository {
  async findById(id) {
    const user = await User.findByPk(id);

    return user;
  }

  async findByEmail(email) {
    const user = await User.findOne({ where: { email } });

    return user;
  }

  async create(user) {
    const newUser = await User.create(user);

    return newUser;
  }
}

module.exports = UserRepository;
