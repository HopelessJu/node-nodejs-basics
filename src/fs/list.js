import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const dirPath = path.join(__dirname, "files");

  try {
    const filenamesArr = await readdir(dirPath, {
      recursive: true,
    });
    console.log(filenamesArr);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
