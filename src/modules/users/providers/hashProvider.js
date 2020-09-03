const { hash, compare } = require('bcryptjs');

class HashProvider {
  async generateHash(payload) {
    return hash(payload, 8);
  }

  async compare(payload, hashed) {
    return compare(payload, hashed);
  }
}

module.exports = new HashProvider();
