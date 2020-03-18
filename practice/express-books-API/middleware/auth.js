const simpleTokenVerification = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization === "Bearer my-awesome-token") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden access" });
  }
};

module.exports = { simpleTokenVerification };
