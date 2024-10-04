import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files/fileToRead.txt");
  const readStream = createReadStream(filePath);
  readStream.on("error", (error) => {
    console.error(error.message);
  });

  readStream.pipe(stdout);
};

await read();
