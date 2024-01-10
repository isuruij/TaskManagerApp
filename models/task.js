const mongoose = require("mongoose");
// creating a schema to create a model
const Schema = mongoose.Schema;

//creating a schema model
const taskSchema = new Schema({
  discription: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: false,
    unique: false,
  },
});

// creating a model using the schema
const Task = mongoose.model("Task", taskSchema);

// exporting the model to use it in another program files
module.exports = Task;
