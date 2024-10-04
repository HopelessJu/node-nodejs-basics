import { fileURLToPath } from "url";
import path from "path";
import { createWriteStream } from "fs";
import { stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const write = async () => {
  const filePath = path.join(__dirname, "files/fileToWrite.txt");
  const writeStream = createWriteStream(filePath);

  writeStream.on("error", (error) => {});

  stdin.pipe(writeStream);
};

await write();
