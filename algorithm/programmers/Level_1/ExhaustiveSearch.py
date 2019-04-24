# solution #1 //시간초과
def solution(answers):
    person1 = [1, 2, 3, 4, 5]
    person2 = [2, 1, 2, 3, 2, 4, 2, 5]
    person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    count = [0, 0, 0]
    result = []
    for i in range(len(answers)):
        j1 = i % (len(person1)+1)
        j2 = i % (len(person2)+1)
        j3 = i % (len(person3)+1)
        if(answers[i] == person1[j1]):
            count[0] += 1
        if(answers[i] == person2[j2]):
            count[1] += 1
        if(answers[i] == person3[j3]):
            count[2] += 1
    for idx in range(len(count)):
        if(count[idx] == max(count)):
            result.append(idx+1)
    return result
