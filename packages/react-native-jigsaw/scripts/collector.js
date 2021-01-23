require("dotenv").config();
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const fetch = require("node-fetch");
const { promisify } = require("util");
const parser = require("./parser");

const globAsync = promisify(glob);

const COMPONENT_PATH = path.resolve("./src/components");
const MAPPING_PATH = path.resolve("./src/mappings");
const SCREEN_PATH = path.resolve("./src/screens");

const IGNORED_FILES = [
  "Query.js", // doesn't work at all
  "LinearGradient.js", // missing gradient UI
];

const ERROR_FILES = [];
const COMPLETED_FILES = [];

async function main() {
  console.log("Running on", getUrl(), "[warnings surpressed]");
  const componentFiles = await globAsync(`${COMPONENT_PATH}/**/*.tsx`);
  const screenFiles = await globAsync(`${SCREEN_PATH}/**/*.tsx`);
  const mappingFiles = await globAsync(`${MAPPING_PATH}/**/*.js`);
  const files = [...componentFiles, ...screenFiles, ...mappingFiles].filter(
    (file) => {
      const name = file.split("/").pop();

      if (
        name.includes("web") ||
        name.includes("ios") ||
        name.includes("android")
      ) {
        return false;
      }

      return !IGNORED_FILES.includes(name);
    }
  );

  for (const file of files) {
    const [name, category] = file.split("/").reverse();
    try {
      console.log("uploading", name, "from", category);
      const component = await parser(file);
      await uploadComponent(component);
      COMPLETED_FILES.push(file);
    } catch (error) {
      if (!error.message.includes("SEED_DATA")) {
        console.log("failed:", name, error);
        ERROR_FILES.push({ file, error: error.message });
      }
    }
  }

  fs.writeFileSync("completed.json", JSON.stringify(COMPLETED_FILES, null, 2));
  fs.writeFileSync("errors.json", JSON.stringify(ERROR_FILES, null, 2));
}

function getUrl() {
  const LOCAL_API_URL = "http://localhost:3001";
  const STAGING_API_URL = "https://api.stagingbit.com";
  const PRODUCTION_API_URL = "https://api.draftbit.com";
  switch (process.env.target) {
    case "staging":
      return STAGING_API_URL;
    case "prod":
      return PRODUCTION_API_URL;
    default:
      return LOCAL_API_URL;
  }
}

async function uploadComponent(component) {
  const url = getUrl();
  await fetch(`${url}/components`, {
    method: "POST",
    body: component,
  });
}

main();
