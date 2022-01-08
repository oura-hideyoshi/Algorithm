import io
import sys

_INPUT = """\
2
1 2 3
aaa
"""
sys.stdin = io.StringIO(_INPUT)

print(int(input()))
print(list(map(int, input().split())))
print(list(input()))

2
[1, 2, 3]
['a', 'a', 'a']
