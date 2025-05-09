const express = require("express");
const app = express();

const userProfiles = {
  1: { id: 1, name: "sangam", email: "sangam@gmail.com" },
  2: { id: 2, name: "mundhe", email: "mundhe@gmail.com" },
};

// Simulating a logged-in user with id 1
app.use((req, res, next) => {
  req.loggedInUser = { id: 1 };
  next();
});

app.get("/profile/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const loggedInUser = req.loggedInUser.id;
    // check valid userId
    if (typeof userId === Number) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    // check the user is valid
    if (!userProfiles[userId]) {
      return res.status(404).json({ error: "User not found" });
    }

    // check if userId is same as loggedInUser
    if (userProfiles[userId] !== loggedInUser) {
      return res.status(403).json({ error: "Access denied" });
    }

    return res.json(userProfiles[userId]);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
