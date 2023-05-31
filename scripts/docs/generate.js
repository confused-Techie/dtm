// Since not much joy was brought by the default jsdoc-to-markdown styling,
// this repo opts to instead utilize the dependencies of that repo to handle
// writing markdown on it's own.

const fs = require("fs");
const jsdocParse = require("jsdoc-parse");
const jsdocApi = require("jsdoc-api");

let data = jsdocApi.explainSync({ files: "./src/**/*.js" });

let parsed = jsdocParse(data);

let output = [];

const processParamTypes = (params) => {
  let tmp = "`<";
  for (let j = 0; j < params.length; j++) {
    if (j !== 0) {
      tmp += "|";
    }
    tmp += params[j];
  }
  tmp += ">`";
  return tmp;
};

for (let i = 0; i < parsed.length; i++) {
  let item = parsed[i];
  let out = "";

  if (i !== 0) {
    out += "\n\n";
  }

  out += `### ${item.kind}: \`${item.name}\`\n`;
  out += `${item.description}\n`;

  if (typeof item.examples !== "undefined") {
    for (let y = 0; y < item.examples.length; y++) {
      out += `\`\`\`javascript\n${item.examples[y]}\n\`\`\`\n`;
    }
  }

  if (Array.isArray(item.params)) {
    out += "\nParameters:\n";
    for (let y = 0; y < item.params.length; y++) {
      out += `\n- \`${item.params[y].name}\` ${processParamTypes(
        item.params[y].type.names
      )}: ${item.params[y].description}\n`;
    }
  }

  if (Array.isArray(item.returns)) {
    out += "\nReturns:\n";
    for (let y = 0; y < item.returns.length; y++) {
      out += `\n- ${processParamTypes(item.returns[y].type.names)}: ${
        item.returns[y].description
      }\n`;
    }
  }

  output.push({
    content: out,
    order: item.order,
  });
}

const findOutputByOrder = (val, idx) => {
  for (let i = 0; i < val.length; i++) {
    if (val[i].order === idx) {
      return val[i].content;
    }
  }

  return -1;
};

const returnOutputByOrder = (val) => {
  let tmp = "";

  for (let i = 0; i < val.length; i++) {
    let dataTmp = findOutputByOrder(val, i);
    if (dataTmp === -1) {
      break;
    }

    tmp += dataTmp;
  }

  return tmp;
};

let text = returnOutputByOrder(output);

let readme = fs.readFileSync("./README.md", { encoding: "utf8" });

let processReadme = readme.split(
  "<!--DO NOT TOUCH! Automatically handled by ./scripts/docs/generate.js -->\n"
);

fs.writeFileSync(
  "./README.md",
  processReadme[0] +
    "<!--DO NOT TOUCH! Automatically handled by ./scripts/docs/generate.js -->\n" +
    text
);
