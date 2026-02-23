import fs from "fs";
const readFile = () => {
  let cars = JSON.parse(fs.readFileSync(process.env.FILE_NAME, "utf8"));
  return cars;
};

const writeFile = (cars) => {
  fs.writeFileSync(process.env.FILE_NAME, JSON.stringify(cars), "utf8");
};

export { readFile, writeFile };
