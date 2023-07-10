const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }
}

module.exports = PostManager;
