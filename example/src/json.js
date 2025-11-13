const path = require('path')
const { runXlsxToJson } = require("../../dist/index.js");

(() => {
  // "../output/language.xlsx", "../json"
  runXlsxToJson({
    filePath: path.resolve(__dirname, "../output/language.xlsx"),
    output: path.resolve(__dirname, "../json") 
  })
})()