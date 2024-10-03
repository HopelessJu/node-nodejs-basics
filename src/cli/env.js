const parseEnv = () => {
  const envsToParse = Object.keys(process.env).filter((key) =>
    key.startsWith("RSS_")
  );
  envsToParse.map((envVar) => {
    const envName = `${envVar}=${process.env[envVar]}`;
    console.log(envName);
  });
};

parseEnv();
