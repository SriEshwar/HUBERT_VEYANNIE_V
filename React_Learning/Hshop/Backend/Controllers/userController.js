const userModel = require('../Models/User.model');

exports.createUser = async(req,res) => {
    // console.log("user model working");
    try {
        const user = await userModel.create(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.findUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email: email });
      if (user) {
        if (user.password === password) {
          res.status(200).json({ user, message: 'Success' });
        } else {
          res.status(400).json({ message: 'Password is incorrect' });
        }
      } else {
        res.status(400).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };