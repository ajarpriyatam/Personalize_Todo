const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  done:{
    type:Boolean,
    required:true,
    default:0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);