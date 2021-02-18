## HexWords

So I was watching [this](https://youtu.be/nNBktKw9Is4?t=96) video from [liveoverflow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) and saw a hex data as `f00dbabe` and became interested.  
So I wanted to see if there would be more names like this for hex data and made this program.

```python
>>> from hexwords import HexWord
>>> hexer = HexWord(extended=True)
>>> print(hexer.hexword("foodbabe")
f00dbabe
>>> print(hexer.hexword("leet")
1ee1
```

you can also give your own dictionary to translate to

```python
>>> hexer = HexWord(hexchars={'e':'3'})
>>> print(hexer.hexword("foodbabe")
f00dbab3
```
