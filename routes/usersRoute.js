const usersRouter = require("express").Router();
const asyncHandler = require("express-async-handler");

const User = require("../models/User");

const generateToken = require("../utils/generateToken");

usersRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send({ error: "user exists" });
    }

    const userCreated = await User.create({ name, email, password });

    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.email,
      token: generateToken(userCreated._id),
    });
  })
);

usersRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
      res.status(200);

      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.send("user not found");
    }
  })
);

usersRouter.put("/update", (req, res) => {
  res.send("update route");
});

usersRouter.delete("/:id", (req, res) => {
  res.send("delete route");
});

module.exports = usersRouter;
