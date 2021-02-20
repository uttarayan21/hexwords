## HexWords

So I was watching [this](https://youtu.be/nNBktKw9Is4?t=96) video from [liveoverflow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) and saw a hex data as `f00dbabe` and became interested.  
So I wanted to see if there would be more names like this for hex data and made this program.

I also made this a react app which is hosted [here](https://uttarayan21.github.io/hexwords)

```python
>>> from hexwords import HexWord
>>> hexer = HexWord(extended=True)
>>> print(hexer.hexword("foodbabe")
f00dbabe
```

you can also give your own dictionary to translate to

```python
>>> hexer = HexWord(hexchars={'e':'3'})
>>> print(hexer.hexword("foodbabe")
f00dbab3
>>> hexer = HexWord(hexchars={'e':'3','l':1,'t':7})
>>> print(hexer.hexword("leet")
1337
```

To run clone and update submodules

```bash
git clone https://github.com/uttarayan21/hexwords
cd hexwords
git submodule init
git submodule update
```

Also hosted here as an online react application  
[https://uttarayan21.github.io/hexwords](https://uttarayan21.github.io/hexwords)
