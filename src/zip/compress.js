import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const inputPath = path.join(__dirname, "files/fileToCompress.txt");
  const outputPath = path.join(__dirname, "files/archive.gz");

  pipeline(
    createReadStream(inputPath),
    createGzip(),
    createWriteStream(outputPath),
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
};

await compress();
