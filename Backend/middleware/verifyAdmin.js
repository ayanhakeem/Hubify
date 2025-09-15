const verifyAdmin = (req, res, next) => {
  console.log("verifyAdmin - req.user:", req.user); // Add this line

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: No user found" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admins only" });
  }

  next();
};

module.exports = verifyAdmin;
