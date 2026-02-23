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

export { registerController };
