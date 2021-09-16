const axios = require('axios')
const User = require('../models/user.js')

async function fetchUserData(github_username) {
  try {
    const githubResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    )

    return githubResponse
  } catch (err) {
    console.error(err)
    return null
  }
}

module.exports = {
  async index(req, res) {
    const users = await User.find()

    return res.json(users)
  },

  async store(req, res) {
    const { github_username } = req.body

    let user = await User.findOne({ github_username })

    if (!user) {
      const githubResponse = await fetchUserData(github_username)
      console.log('[githubResponse]: ', githubResponse)

      if (!githubResponse) {
        return response.json({ message: 'User not found' })
      }

      const { name = login, avatar_url, bio } = githubResponse.data

      user = await User.create({
        github_username,
        name,
        avatar_url,
        bio
      })
    }

    return res.json(user)
  },

  async update(req, res) {
    const user = User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(user)
  },

  async delete(req, res) {
    const { id } = req.query
    const deletedUser = await User.findByIdAndDelete(id)

    if (!deletedUser) {
      return res.json({ message: 'User not exist' })
    }

    return res.send({ message: 'User deleted' })
  }
}
