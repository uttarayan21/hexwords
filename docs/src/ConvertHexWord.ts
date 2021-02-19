const WORDLIST = require("./wordlist.json");

interface HexWord {
  id: number;
  word: string;
  hexword: string;
}

class ConvertHexWord {
  hexmap: Map<number, string>;
  hexmaplist: Array<number>;
  extended: boolean;

  constructor(extended: boolean = false) {
    this.extended = extended;
    this.hexmap = new Map([
      [97, "a"],
      [98, "b"],
      [99, "c"],
      [100, "d"],
      [101, "e"],
      [102, "f"],
      [111, "0"],
    ]);

    this.hexmaplist = Array.from(this.hexmap.keys());
    if (extended) {
      this.hexmap.set(108, "1");
    }
  }

  ConvertToHexWord(word: string) {
    let hexword = "";
    for (let char of word) {
      if (this.hexmaplist.some((ascii_code) => ascii_code === char.charCodeAt(0))) {
        hexword += this.hexmap.get(char.charCodeAt(0));
      } else {
        return "";
      }
    }
    return hexword;
  }

  WordListToHexList(wordlist: any = WORDLIST) {
    let hexwordlist: Array<HexWord> = [];
    let wordlistindex = 0;
    for (const word in wordlist) {
      let hexword: string = this.ConvertToHexWord(word);
      if (hexword.length > 0) {
        hexwordlist.push({ id: wordlistindex, hexword: hexword, word: word });
      }
      wordlistindex += 1;
    }
    return hexwordlist;
  }
}

export default ConvertHexWord;
