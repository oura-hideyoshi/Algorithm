import io
import sys

# _INPUT = '''\
# 3 1000000000000000000
# 2 1000000000 1000000000
# 2 1000000000 1000000000
# 2 1000000000 1000000000

# '''
# sys.stdin = io.StringIO(_INPUT)

[N, X] = [int(_) for _ in input().split()]
mat = [[int(_) for _ in input().split()] for i in range(N)]

# 深さ優先探索で、全探索する


def dfs(depth, product):

    if depth == N-1:
        # print(product)
        return 1 if product == X else 0
    else:
        _ans = 0
        for idx, val in enumerate(mat[depth+1]):
            if idx == 0:
                continue
            _ans = _ans + dfs(depth+1, product*val)
        return _ans


ans = 0
for idx, val in enumerate(mat[0]):
    if idx == 0:
        continue
    ans = ans + dfs(0, val)
print(ans)
