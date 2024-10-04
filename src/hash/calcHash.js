import { createHash } from "crypto";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { stdout, exit } from "process";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");

  const stream = createReadStream(filePath);

  stream.on("error", (error) => {
    console.error(error.message);
    exit(1);
  });

  hash.on("error", (error) => {
    console.error(`Hashing error: ${error.message}`);
    exit(1);
  });

  stream.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
