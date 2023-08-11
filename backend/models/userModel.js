const express = require("express");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
      minLength: [6, "Password must be greater than 6 letters"],
      // maxLength: [23, "Password must not be greater than 23 letters"],
    },
    phote: {
      type: String,
      // required:[
      default: "",
    },
    number: {
      type: String,
      default: "+91",
    },
    bio: {
      type: String,
      maxLength: [250, "Not more than 250 words"],
      default: "Bio",
    },

    // email: {
    //     type: String,
    //     required: true,
    //     unique: true, // Ensure that each email is unique in the database
    //     validate: {
    //       validator: function (email) {
    //         // Regular expression for email validation
    //         const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    //         return emailRegex.test(email);
    //       },
    //       message: 'Invalid email format',
    //     },
    //   },
  },
  {
    timestamps: true,
  }
);

// before sending to mongo DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});
const User = mongoose.model("User", userSchema);

module.exports = User;
