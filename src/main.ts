import express from "express";
import morgan from "morgan";

// load .env file
import dotenv from "dotenv";
dotenv.config();

// import routes
import apiRouter from "./routes/Api";
import indexRouter from "./routes/Index";

// create server
const app = express();
const PORT = process.env.PORT;

// add logging
app.use(morgan("dev"));

// add routes
app.use("/", indexRouter);
app.use("/api", apiRouter);

// start server
app.listen(PORT, () => {
    console.log(`Express with Typescript! http://localhost:${PORT}`);
});
