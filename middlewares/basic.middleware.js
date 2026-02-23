let checkBasicAuth = (req, res, next) => {
  try {
    const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
    const [username, password] = Buffer.from(b64auth, "base64")
      .toString()
      .split(":");
    console.log(username, password);

    if (
      username !== process.env.USERNAME ||
      password !== process.env.PASSWORD
    ) {
      throw new Error("Username yoki password xato");
    }
    console.log("Middlwwaredan o'tdi");
    next();
  } catch (error) {
    throw error;
  }
};

export default checkBasicAuth;
