import math

# problem https://www.hackerrank.com/challenges/encryption/problem
# We do not have to physically create a matrix, as long as we traverse
# the string in the same way as a matrix.
# That way we are going to reduce the space complexity while losing almost
# no time (we will traverse at most one row's worth of extra elements).
def encryption(s):
    l = len(s)
    root_l = math.sqrt(l)
    rows = math.floor(root_l)
    cols = math.ceil(root_l)
    if (rows * cols) < l:
        rows += 1
    sol = []
    x = 0
    y = 0
    # In case where l < rows * cols, we are gonna have some empty columns.
    # Thus, we need to traverse more elements than len(l).
    # x is column, y is row. We traverse from first column downwards.
    for i in range(0, rows * cols):
        # Reached the end of column.
        if (i % rows == 0):
            y = 0
            if (i != 0):
                x += 1
                sol.append(' ')
        index = y * cols + x
        # To account for rows that are not full.
        if (index < l):
            sol.append(s[index])
        y += 1
    return ''.join(sol)