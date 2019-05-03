'''
# PermMissingElem
Find the missing element in a given permutation.
'''


def solution(A):
    return sum(range(1, len(A)+2))-sum(A)
