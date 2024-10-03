const parseArgs = () => {
  const args = process.argv.slice(2);
  const propNames = args.filter((prop) => prop.startsWith("--"));
  const propValues = args.filter((prop) => !prop.startsWith("--"));

  let result = [];
  for (let i = 0; i < propNames.length; i++) {
    result = [...result, `${propNames[i]} is ${propValues[i]}`];
  }
  console.log(result.join(", "));
};

parseArgs();
