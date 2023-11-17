import express from "express";
import { setup } from "../../application.js";

const application = express();

setup(application);

export default application;