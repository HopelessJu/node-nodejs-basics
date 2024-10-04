import { fileURLToPath } from "url";
import path from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const pathToFile = path.join(__dirname, "files/fileToRead.txt");

  try {
    const fileContent = await readFile(pathToFile, { encoding: "utf8" });
    console.log(fileContent);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
