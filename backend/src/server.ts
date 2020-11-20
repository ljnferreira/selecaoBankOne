import express from "express";
import cors from "cors";
import 'express-async-errors';

import './database/conection';

import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(5000);