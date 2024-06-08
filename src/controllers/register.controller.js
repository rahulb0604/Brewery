import User from "../models/User.model.js";

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      next("All Fields are required!");
      return;
    }

    const accountExist = await User.findOne({ email });

    if (accountExist) {
      next("Email Already Registered. Please Login");
      return;
    }

    const response = await User.create({
      username,
      email,
      password,
    });

    response.password = undefined;

    const token = response.createJWT();

    const options = {
      expires: new Date(Date.now() + 86400000),
      httpOnly: true,
      secure: true,
      samesite: "none",
    };

    res.status(200).cookie("accessToken", token, options).json({
      success: true,
      data: response,
      token,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log("ERROR: While User Registeration", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error Occured!!",
    });
  }
};

export default registerUser;
