#!/usr/bin/python
import json
from hexwords import HexWord


def import_words(wordlist="words.json"):
    with open(wordlist, "r") as f:
        return json.load(f)


def main():
    words = import_words("english-words/words_dictionary.json")
    hexwordlist = []
    hexer = HexWord(extended=True)
    for word in words:
        hexwrd = hexer.hexword(word)
        if hexwrd:
            hexwordlist.append(hexwrd)
    print(hexwordlist)


if __name__ == '__main__':
    main()
