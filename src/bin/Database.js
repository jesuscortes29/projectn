var mongoose = require("mongoose");
class Database {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://genangdei:ProgramWeb123*@cluster0-hmtkv.mongodb.net/MyApp?retryWrites=true",
        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();
