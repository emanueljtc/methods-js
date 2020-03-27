import {
  FORID,
  QUERYSELECTORALL,
  QUERYSELECTORPRIMARY
} from "../../Methods-Selects-Elements-DOM/methodSelectsElements.js"
const container = FORID('container')
const title = QUERYSELECTORPRIMARY('.title')
const list = QUERYSELECTORALL('.list');
console.log(container, title, list)