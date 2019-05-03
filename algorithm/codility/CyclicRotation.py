'''
3. CyclicRotation
Rotate an array to the right by a given number of steps.
'''


def solution(A, K):
    lst = [0]*len(A)
    for i in range(len(A)):
        lst[(i+K) % len(A)] = A[i]
    return lst
