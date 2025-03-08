const userList = require("../Models/User_data.json");

exports.getAllusers = (req, res) => {
  res.status(200).json(userList);
};

exports.getuserByName = (req, res) => {
  const userName = req.params.name;
  const user = userList.filter((value) => value.name == userName);

  if (user.length > 0) {
    res.status(200).json(user );
  } else {
    res.status(404).json({ message: "please Provide Valid Name" });
  }
};

