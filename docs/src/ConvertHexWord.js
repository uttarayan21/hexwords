"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WORDLIST = require("./wordlist.json");
var ConvertHexWord = /** @class */ (function () {
    function ConvertHexWord(extended) {
        if (extended === void 0) { extended = false; }
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
    ConvertHexWord.prototype.ConvertToHexWord = function (word) {
        var hexword = "";
        var _loop_1 = function (char) {
            if (this_1.hexmaplist.some(function (ascii_code) { return ascii_code === char.charCodeAt(0); })) {
                hexword += this_1.hexmap.get(char.charCodeAt(0));
            }
            else {
                return { value: "" };
            }
        };
        var this_1 = this;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            var state_1 = _loop_1(char);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return hexword;
    };
    ConvertHexWord.prototype.WordListToHexList = function (wordlist) {
        if (wordlist === void 0) { wordlist = WORDLIST; }
        var hexwordlist = [];
        var wordlistindex = 0;
        for (var word in wordlist) {
            var hexword = this.ConvertToHexWord(word);
            if (hexword.length > 0) {
                hexwordlist.push({ id: wordlistindex, hexword: hexword, word: word });
            }
            wordlistindex += 1;
        }
        return hexwordlist;
    };
    return ConvertHexWord;
}());
exports.default = ConvertHexWord;
