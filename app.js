const Replacer = require("./utils/Replacer");
const SaveJSON = require("./utils/SaveJSON");
const TextLoader = require("./utils/TextLoader");
const JSONLoader = require("./utils/JSONLoader");

module.exports = (sample_text, sample_data, result_path) => {
  const data = require(sample_data);
  const sample_string = TextLoader(sample_text);

  //   const processed_string = Replacer(sample_string, data);

  // find doublequote in processed string and replace with \\" to escape doublequote
  const processed_string = Replacer(sample_string, data).replace(/"/g, '\\"');
  //   console.log(processed_string);

  const save_path = __dirname + "/" + result_path;

  SaveJSON(save_path, `{ "processed": "${processed_string}" }`);

  const processed_json = JSONLoader(save_path);
  return processed_json;
};

// app("./data/formatted_text.txt", "./data/sample2.json", "demo.json");
