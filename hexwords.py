class HexWord(object):
    hexlist = {'a': 'a', 'b': 'b', 'c': 'c',
               'd': 'd', 'e': 'e', 'f': 'f', 'o': '0'}

    def __init__(self, extended=False, hexchars={}):
        self.hexlist = HexWord.hexlist.copy()

        if hexchars:
            self.hexlist.update(hexchars)

        if extended:
            self.hexlist.update({'i': '1', 'l': '1'})

    def hexword(self, word):
        hexword = ""
        for letter in word:
            if letter not in self.hexlist:
                return None
            else:
                hexword += self.hexlist[letter]
        return hexword
