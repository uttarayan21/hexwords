#!/usr/bin/python
numlist = list(range(ord('a'), ord('f')+1))
numlist.append(ord('o'))
numlist.append(ord('l'))
for num in numlist:
    print(f"{num} => {hex(num)} => {chr(num)}")
