import heapq  # heapqライブラリのimport

a = [1, 6, 8, 0, -1]
heapq.heapify(a)  # リストを優先度付きキューへ
print(a)
# 出力: [-1, 0, 8, 1, 6] (優先度付きキューとなった a)

print(heapq.heappop(a))  # 最小値の取り出し
# 出力: -1 (a の最小値)
print(a)
# 出力: [0, 1, 8, 6] (最小値を取り出した後の a)

heapq.heappush(a, -2)  # 要素の挿入
print(a)
# 出力: [-2, 0, 1, 8, 6]  (-2 を挿入後の a)
