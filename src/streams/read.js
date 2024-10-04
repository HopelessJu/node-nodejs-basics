import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files/fileToRead.txt");
  const readStream = createReadStream(filePath, { encoding: "utf8" });
  readStream.on("error", (error) => {
    console.error(error.message);
  });

  readStream.on("data", (chunk) => {
    console.log(chunk);
  });
};

await read();
