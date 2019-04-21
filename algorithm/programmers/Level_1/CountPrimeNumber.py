# solution #1 //시간초과
def solution_1(n):
    answer = n-1
    for i in range(2, n+1):
        for j in range(2, i):
            if(i % j == 0):
                answer -= 1
                break
    return answer
    
# solution #2 //에라토스테네스의 체
def solution_2(n):
    numSet = set(range(2, n+1))
    for i in range(2, n+1):
        if i in numSet:
            numSet -= set(range(i*i, n+1, i))
    return len(numSet)