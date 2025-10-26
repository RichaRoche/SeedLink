// Create token and saving the in cookies and send response

const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
    //  secure: false, // don't use true on localhost
    // sameSite: "lax",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
module.exports = sendToken;
