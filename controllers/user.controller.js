import { readFileUsers, writeFileUsers } from "../utils/user.file.js";

let registerController = (req, res, next) => {
  try {
    let { username, password, confirmPassword, email } = req.body;
    if (!(username && password && confirmPassword && email))
      throw new Error("Qiysidir field bermading");
    if (password !== confirmPassword)
      throw new Error("Passwordlar bir xil emas");
    let users = readFileUsers();
    let id = users.length + 1;

    let user = {
      id,
      username: username,
      password: password,
      email: email,
    };
    users.push(user);
    writeFileUsers(users);
    delete user.password;

    return res.status(200).json({
      status: "Succces",
      message: "User created",
      data: user,
    });
  } catch (error) {
    throw error;
  }
};

let loginController = (req, res, next) => {
  try {
    // let { a, b } = { a: 3, b: 6 };
    let { username, password } = req.body;
    if (!(username && password))
      throw new Error("username yoki password kelmadi");

    let user = readFileUsers().find((val) => val.username === username);
    if (!user) throw new Error("Bunaaqa usernameli foydalanuvchi yo'q");

    if (!(user.password == password)) throw new Error("Parol xato");
    delete user.password;
    return res.status(200).json({
      status: "Success",
      message: "Login succelfully",
      data: user,
    });
  } catch (error) {
    throw error;
  }
};

let allUsersController = (req, res, next) => {
  try {
    let users = readFileUsers();
    return res.status(200).json({
      status: "Success",
      message: "Barcha userlar",
      data: users,
    });
  } catch (error) {
    throw error;
  }
};

let GetUserByUsername = (req, res, next) => {
  let user = readFileUsers().find((val) => val.username == req.params.username);
  if (!user) throw new Error("Bunaqa user mavjud emas!!");
  return res.status(200).json({
    status: "Success",
    message: "User Found",
    data: user,
  });
};
export {
  registerController,
  loginController,
  allUsersController,
  GetUserByUsername,
};
