import { readFile, writeFile } from "../utils/cars.file.js";

let getAllCars = (req, res, next) => {
  try {
    console.log(Boolan(req.query.isSedan));

    let cars = readFile();

    if (req.query) {
      cars = cars.filter((val) =>
        val.isSedan == (req.query.isSedan == "true") ? true : false,
      );
    }
    res.json(cars);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

let getCarColr = (req, res, next) => {
  console.log(req.params.color);
  let cars = readFile().filter((val) => val.color === req.params.color);
  if (!cars) {
    throw new Error("Topilmadi");
  }
  res.json(cars);
};
let createCar = (req, res) => {
  console.log(req.body);
  let cars = readFile();

  cars.push(req.body);
  writeFile(cars);
  res.status(201).json({
    status: "succes",
    message: "Cars created",
    data: cars,
  });
};

let updatePathcCar = (req, res, next) => {
  let id = +req.params.id;
  let body = req.body;
  let cars = readFile();
  cars[id - 1].name = body.name;
  writeFile(cars);

  res.status(201).json({
    status: "succes",
    message: "Cars created",
    data: cars[id - 1],
  });
};
let updatPutCar = (req, res, next) => {
  let id = +req.params.id;
  let body = req.body;
  let cars = readFile();
  let car = cars[id - 1];
  car.name = body.name;
  car.year = body.year || car.year;
  cars[id - 1] = car;
  fs.writeFileSync(
    process.env.FILE_NAME,
    JSON.stringify(cars, null, 4),
    "utf8",
  );

  res.status(201).json({
    status: "succes",
    message: "Cars created",
    data: cars[id - 1],
  });
};
export { getAllCars, getCarColr, createCar, updatPutCar, updatePathcCar };
