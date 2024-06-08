import Review from "../models/Review.model.js";

const postReview = async (req, res) => {
  try {
    const { user,brewId, review } = req.body;
    // const user = req.user._id;
    if (!brewId || !review) {
      throw new Error("All fields are required");
    }
    const response = await Review.create({ user, brewId, review });
    res.status(200).json({
      success: true,
      data: response,
      message: "Review Posted Successfully",
    });
  } catch (error) {
    console.log("ERROR: While Posting Review", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error Occured!!",
    });
  }
};

export default postReview;
