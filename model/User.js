import mongoose from "mongoose";

const schema = mongoose.schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});



module.exports = mongoose.model("User", userSchema);
