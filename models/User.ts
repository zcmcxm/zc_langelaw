import mongoose, { Schema } from "mongoose";
import { z } from "zod";

// const config = require("config");
// const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  isAdmin: Boolean,
});

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
//   return token;
// };

// userSchema.methods.generateAdminAuthToken = function () {
//   const token = jwt.sign(
//     { _id: this._id, isAdmin: this.isAdmin },
//     config.get("jwtPrivateKey")
//   );
//   return token;
// };

const User = mongoose.models.User || mongoose.model("User", userSchema);

export const validateUserSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().min(5).max(255).email(),
  isAdmin: z.boolean(),
});

export default User;
