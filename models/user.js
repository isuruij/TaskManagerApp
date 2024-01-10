const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const bcrypt = require("bcryptjs")

// creating a schema to create a model
const Schema = mongoose.Schema;

//creating a schema model
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// creating a model using the schema
const User = mongoose.model("User", userSchema);

// exporting the model to use it in another program files
module.exports = User;
