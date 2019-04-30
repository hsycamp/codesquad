def checkoutData(lost, reserve):
    for i in reserve:
        if i in lost:
            lost.remove(i)
            reserve.remove(i)
    return (lost, reserve)


def borrow(n, lost, reserve):
    answer = n - len(lost)
    for i in lost:
        if i in reserve:
            reserve.remove(i)
            answer += 1
        elif (i-1) in reserve:
            reserve.remove(i-1)
            answer += 1
        elif (i+1) in reserve:
            reserve.remove(i+1)
            answer += 1
    return answer


def solution(n, lost, reserve):
    checkoutData(lost, reserve)
    answer = borrow(n, lost, reserve)
    return answer