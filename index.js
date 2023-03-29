import { readFile } from "fs/promises";
import express from "express";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use("/", express.static(__dirname + "/pages/home"));
app.use("/contact", express.static(__dirname + "/pages/contact"));

const getFile = async (path) => {
  try {
    console.log(`Serving file: ${path}`);
    return await readFile(path, "utf-8");
  } catch (error) {
    console.error(`ERROR: Couldn't open file: ${path}!`);
    return error;
  }
};

app.get("/", async (request, response) => {
  response.send(await getFile("./pages/home/index.html"));
});

app.get("/contact", async (request, response) => {
  response.send(await readFile("./pages/contact/index.html", "utf-8"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}`);
});
