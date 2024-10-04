import { stdin, stdout } from "process";
import { Transform } from "stream";
import { pipeline } from "stream";

const transform = async () => {
  const reverseInput = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.reverse());
    },
  });

  pipeline(stdin, reverseInput, stdout, (error) => {
    console.error("Failed to reverse the data", error.message);
  });
};

await transform();
