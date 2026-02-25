let errorHandler = (err, req, res, next) => {
  console.log(err.statusCode);
  let isDev = process.env.NODE_ENV === "DEVELOPMENT";
  // res.status(404).send(`Error texti : ${err.message}`);
  res.status(err.statusCode ? err.statusCode : 404).json({
    status: "Failed",
    message: err.message,
    ...(isDev && { stack: err.stack }),
  });
};

export default errorHandler;
