# 问题描述

n 个整数两两相加可以得到 `n(n - 1) / 2` 个和。我们的目标是：根据这些和找出原来的 n 个整数。

## 输入格式

输入每行一个整数 `n`（`2 < n < 10`）开头，接下来是 `n(n - 1) / 2` 个整数，代表两两相加的和，相邻整数以空格隔开。

## 输出格式

对于输入的每一行，输出一行，包含 n 个整数，按非降序排序，如果有多组解，任意输出一组即可。如果无解，输出 "Impossible"。

**输入样例**：
- 3 1269 1160 1663
- 3 1 1 1
- 5 226 223 225 224 227 229 228 226 225 227
- 5 -1 0 -1 -2 1 0 -1 1 0 -1
- 5 79950 79936 79942 79962 79954 79972 79960 79968 79924 79932

**输出样例**：
- 383 777 886
- Impossible
- 111 112 113 114 115
- -1 -1 0 0 1
- 39953 39971 39979 39983 39989