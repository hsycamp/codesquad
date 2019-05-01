'''
1. BinaryGap
Find longest sequence of zeros in binary representation of an integer.
'''


def solution(N):
    lst = []
    count = 0
    binaryNum = list(format(N, 'b'))
    for i in binaryNum:
        if(i == '0'):
            count += 1
        elif(i == '1'):
            lst.append(count)
            count = 0
    return max(lst)
