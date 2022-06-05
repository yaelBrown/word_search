import { ASCII_UPPERCASE } from "../utils/constants";

class WordSearch {
  constructor() {
    this.size = 20;
    this.grid = [];
  }

  generateGrid() {
    let tempRow = [];
    let out = [];

    for (let i = 0; i < this.size; i++) {
      let tempParentRow = [];
      for (let j = 0; j < this.size; j++) {
        tempRow.append(ASCII_UPPERCASE[Math.floor(Math.random() * 26)]);
      }
      tempParentRow.append(tempRow);
      tempRow = [];
      out.append(tempParentRow);
    }

    this.grid = out;
  }

  // For printing grid to console
  printGrid() {
    for (let i = 0; i < this.size; i++) {
      let outRow = "";
      for (let j = 0; j < this.size; j++) {
        for (let k = 0; k < j.length; k++) {
          outRow += `${k} `;
        }
        console.log(outRow);
      }
    }
  }

  getGrid() {
    return this.grid;
  }

  getSize() {
    return this.size;
  }
}

module.exports = {
  WordSearch,
};
