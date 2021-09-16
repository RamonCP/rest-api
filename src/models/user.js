const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String
})

module.exports = mongoose.model('User', UserSchema)
