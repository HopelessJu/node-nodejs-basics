import { fileURLToPath } from "url";
import { rename as fsRename } from "fs/promises";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldName = path.join(__dirname, "files/wrongFilename.txt");
  const newName = path.join(__dirname, "files/properFilename.md");

  try {
    await fsRename(oldName, newName);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
