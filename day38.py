#Problem:1->Nth term mixed series
N = 7

if N % 2 == 1:
    pos = (N + 1) // 2
    print(3 ** (pos - 1))
else:
    pos = N // 2
    print(2 ** pos)
#Problem2:-maximum diff in a list
n = 7
arr =[2 ,3 ,10 ,6 ,4 ,8 ,1]

min_price = arr[0]
max_profit = 0

for price in arr[1:]:
    max_profit = max(max_profit, price - min_price)
    min_price = min(min_price, price)

print(max_profit)

#Problem3:-prime based computation
import math

x, y = 10,20

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

total = 0

for i in range(x, y + 1):
    if is_prime(i):
        total += i

print(total)
#Promblem5:-count sundays
day = "Monday"
days = 31

week = ["Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"]

start = week.index(day)

count = 0

for date in range(1, days + 1):
    if (start + date - 1) % 7 == 6:
        count += 1

print(count)

#Problem6:-sort 0,1 and 2
n = 6
arr =[2 ,0 ,2 ,1 ,1 ,0]

low = 0
mid = 0
high = n - 1

while mid <= high:
    if arr[mid] == 0:
        arr[low], arr[mid] = arr[mid], arr[low]
        low += 1
        mid += 1
    elif arr[mid] == 1:
        mid += 1
    else:
        arr[mid], arr[high] = arr[high], arr[mid]
        high -= 1

print(*arr)

