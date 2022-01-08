import io
import sys
import heapq
# _INPUT = '''\
# 11 5
# 3 7 2 5 11 6 1 9 8 10 4

# '''
# sys.stdin = io.StringIO(_INPUT)
N, K = map(int, input().split())
P = list(map(int, input().split()))
que = P[0:K]
print(min(que))
heapq.heapify(que)
for i in range(K, N):
    minima = heapq.heappop(que)
    minima = max(minima, P[i])
    heapq.heappush(que, minima)
    ans = heapq.heappop(que)
    print(ans)
    heapq.heappush(que, ans)
