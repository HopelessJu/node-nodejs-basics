import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { pipeline } from "stream";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const inputPath = path.join(__dirname, "files/archive.gz");
  const outputPath = path.join(__dirname, "files/fileToCompress.txt");

  pipeline(
    createReadStream(inputPath),
    createUnzip(),
    createWriteStream(outputPath),
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
};

await decompress();
