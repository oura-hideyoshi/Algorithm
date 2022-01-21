import heapq
import io
import sys
# _INPUT = '''\
# 3 2
# 1 2 3

# '''
# sys.stdin = io.StringIO(_INPUT)

[N, K] = map(int, input().split())
num_list = [int(_) for _ in input().split()]

heap = num_list[:K]
heapq.heapify(heap)
# print(heap)

for idx in range(K, N):
    min_val = heapq.heappop(heap)
    print(min_val)
    larger_val = max(min_val, num_list[idx])
    heapq.heappush(heap, larger_val)
    # print(heap)
print(heap[0])
