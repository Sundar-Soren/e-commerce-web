const User = require("../model/userModel");

exports.userRegistration = async (req, res) => {
  try {
    //   const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: "avatars",
    //     width: 150,
    //     crop: "scale",
    //   });
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        error: "User Already Exist",
      });
    }
    user = await User.create({
      name,
      email,
      password,
      // avatar: {
      //   public_id: myCloud.public_id,
      //   url: myCloud.secure_url,
      // },
    });

    const token = user.getJWTToken();

    res
      .status(200)
      .cookie("token", token, {
        expiresIn: "2d",
        httpOnly: true,
      })
      .json({
        success: true,
        token,
        user,
      });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

//Login User

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Please Enter Email and Password",
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "User Not Exist",
      });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        error: "Password Not Match",
      });
    }

    const token = user.getJWTToken();

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      })
      .json({
        success: true,
        token,
        user,
      });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

//Logout User

exports.userLogout = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
};

//Get User Details

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(401).json({
      error: error.message,
    });
  }
};

//get single users --Admin
exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        error: `User Not exist with the Id: ${req.params.id}`,
      });
    }
    res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(401).json({
      error: `User Not exist with the Id: ${req.params.id}`,
    });
  }
};
