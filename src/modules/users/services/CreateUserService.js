const AppError = require('../../../shared/errors/AppError');
const HashProvider = require('../providers/hashProvider');

const UserRepository = require('../infra/repositories/UserRepository');

class CreateUserService {
  async execute(user) {
    const { email, password } = user;
    const userRepository = new UserRepository();
    const checkUserExists = await userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('User already exists');
    }
    const hashedPassword = await HashProvider.generateHash(password);

    const newUser = await userRepository.create({
      email,
      password: hashedPassword,
    });

    return newUser;
  }
}

module.exports = new CreateUserService();
