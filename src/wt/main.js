import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const startNumber = 10;
  const path = "./worker.js";
  const url = new URL(path, import.meta.url);
  const workersCount = cpus().length;

  const fbCalc = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(url, { workerData });

      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", () => resolve({ status: "error", data: null }));
      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });
    });

  const calc = Array.from({ length: workersCount }, (_, index) =>
    fbCalc(index + startNumber)
  );
  const result = await Promise.all(calc);
  console.log(result);
};

await performCalculations();
