import Review from "../models/Review.model.js";

const getReview = async (req, res) => {
  try {
    const brewId = req.params.brewId;
    const response = await Review.find({ brewId: brewId }).populate('user');
    res.status(200).json({
      success: true,
      data: response,
      message: "Review Fetched Successfully",
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

export default getReview;
