import User from "../models/User.model.js";

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      next("All Fields are required!");
      return;
    }
    const response = await User.findOne({ email });

    if (!response) {
      next("Invalid email or Password");
      return;
    }

    if (!(await response.isPasswordCorrect(password))) {
      next("Invalid Email or Password!!");
      return;
    }

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
      message: "User Login Successfully",
    });
  } catch (error) {
    console.log("ERROR: While User Login", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error Occured!!",
    });
  }
};

export default loginUser;
