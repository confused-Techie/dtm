// To automatically load and include any new methods added we will use a custom loader.

let mods = {};
let modKeyCache = []; // Used to prevent Dups
let fileExclusions = ["index.js"];

let normalizedPath = require("path").join(__dirname);

require("fs")
  .readdirSync(normalizedPath)
  .forEach((file) => {
    if (!fileExclusions.includes(file)) {
      // Skip this file

      let mod = require(`./${file}`);
      Object.keys(mod).forEach((modKey) => {
        if (modKeyCache.includes(modKey)) {
          console.error(`Duplicated Key: ${modKey} required from ${file}`);
        } else {
          modKeyCache.push(modKey);
          mods[modKey] = mod[modKey];
        }
      });
    }
  });

module.exports = { ...mods };
