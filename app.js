const Replacer = require("./utils/Replacer");
const SaveJSON = require("./utils/SaveJSON");
const TextLoader = require("./utils/TextLoader");
const JSONLoader = require("./utils/JSONLoader");

module.exports = (sample_text, sample_data, result_path) => {
  const data = require(sample_data);
  const sample_string = TextLoader(sample_text);

  // find doublequote in processed string and replace with \\" to escape doublequote
  const processed_string = Replacer(sample_string, data).replace(/"/g, '\\"');

  //    Another way, i think it still escape double quote
  //   const processed_string = JSON.Stringify(Replacer(sample_string, data));
  
  const save_path = __dirname + "/" + result_path;

  // Must be remove "", if choose Json.stringify
  SaveJSON(save_path, `{ "processed": "${processed_string}" }`);

  const processed_json = JSONLoader(save_path);
  return processed_json;
};

// app("./data/formatted_text.txt", "./data/sample2.json", "demo.json");
