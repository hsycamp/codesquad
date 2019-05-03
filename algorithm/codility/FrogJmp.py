'''
4. FrogJmp
Count minimal number of jumps from position X to Y.
'''

import math


def solution(X, Y, D):
    return math.ceil(float(Y-X)/D)
