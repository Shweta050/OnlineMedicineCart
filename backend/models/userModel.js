// import mongoose from 'mongoose'
// import bcrypt from 'bcryptjs'

const mongoose = require('mongoose');
const bcrpt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
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
    },
    phone: {
      type: Number,
      required: true,
      unique: true
  },
  role: {
      type: String,
      enum: ["user", "admin", "seller"],
      default: "user",
    }
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// const User = mongoose.model('User', userSchema)

// export default User

module.exports = mongoose.model('User', userSchema, 'User');