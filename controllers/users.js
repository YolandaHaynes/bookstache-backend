const models = require('../models');

const createUser = async (req, res) => {
  try {
    const user = await models.Users.create(req.body);
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = {
  createUser,
}

