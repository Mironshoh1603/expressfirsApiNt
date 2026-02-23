import fs from "fs";
const readFileUsers = () => {
  let users = JSON.parse(fs.readFileSync(process.env.USERS_FILE_NAME, "utf8"));
  return users;
};

const writeFileUsers = (users) => {
  fs.writeFileSync(
    process.env.USERS_FILE_NAME,
    JSON.stringify(users, null, 2),
    "utf8",
  );
};

export { readFileUsers, writeFileUsers };
