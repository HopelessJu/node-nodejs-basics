import { fork } from "child_process";
import { stdin, stdout } from "process";

const spawnChildProcess = async (args) => {
  const scriptPath = "./files/script.js";
  const pathUrl = new URL(scriptPath, import.meta.url);
  const childProcess = fork(pathUrl, args, {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });
  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);

  childProcess.on("message", (msg) => {
    console.log(`Message from child: ${msg}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/*["arg1", "arg2", "arg3"]*/);
