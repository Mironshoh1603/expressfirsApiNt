import AppError from "../utils/app.error.js";
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
    let page = req.query.page || 1;
    let limit = req.query.limit || 1;
    return res.status(200).json({
      status: "Success",
      message: "Barcha userlar",
      page,
      data: users.splice((page - 1) * limit, limit),
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

let createUserController = (req, res, next) => {
  try {
    let users = readFileUsers();
    let { username, password, email } = req.body;
    if (!username) throw new AppError(400, "Username berilmagan");
    if (!password) throw new AppError(401, "password berilmagan");
    if (!email) throw new AppError(402, "email berilmagan");
    let sameEmail = users.find((us) => us.email === email);
    if (sameEmail) throw new AppError(400, "Bu email ishlatilgan");
    let user = {
      id: users.length + 1,
      username,
      password,
      email,
    };
    users.push(user);
    writeFileUsers(users);
    delete user.password;
    return res.status(200).json({
      status: "Success",
      message: "User Found",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
export {
  registerController,
  loginController,
  allUsersController,
  createUserController,
  GetUserByUsername,
};
