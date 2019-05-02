'''
2. OddOccurrencesInArray
Find value that occurs in odd number of elements.
'''


from functools import reduce


# 시간 초과
def solution1(A):
    setA = set(A)
    for i in setA:
        if(A.count(i) % 2 == 1):
            return i


def solution2(A):
    sortedList = sorted(A)
    for i in range(0, len(sortedList), 2):
        if i == len(sortedList)-1:
            return sortedList[i]
        if sortedList[i] != sortedList[i+1]:
            return sortedList[i]


# 연속된 2개 수를 2진수로 바꾼 후 비교한다. 각 자리수가 같으면 0, 다르면 1
def solution3(A):
    return reduce(lambda x, y: x ^ y, A)
