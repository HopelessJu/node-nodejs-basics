import { fileURLToPath } from "url";
import path from "path";
import { rm } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, "files/fileToRemove.txt");
  try {
    await rm(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
