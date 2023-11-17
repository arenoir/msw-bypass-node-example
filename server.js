import express from "express";
import { setup } from "./application.js";


const port = process.env.PORT || 6002;
const app = express();

setup(app);

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}\n\n`);
});

