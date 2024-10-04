import { cp } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourcePath = path.join(__dirname, "files");
  const destinationPath = path.join(__dirname, "files_copy");

  try {
    await cp(sourcePath, destinationPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
