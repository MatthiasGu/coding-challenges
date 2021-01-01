# problem https://www.hackerrank.com/challenges/bigger-is-greater/problem 
# We always want to try to make the change as far down the string as possible.
# It thus makes sense to traverse the string in reverse order.
# We then want to make a breadth first search for an eligible swap.
# An elibile swap is a character that is bigger than a character earlier in the list.
# Finally, we want to sort the string from the point where swap was made.
def bigger_is_greater(w):
    bfs_limit = len(w) - 1
    while(bfs_limit >= 0):
        for i in range(len(w) - 1, bfs_limit, -1):
            if (w[i] > w[bfs_limit]):
                return swap_chars_and_sort(w, bfs_limit, i)
        bfs_limit = bfs_limit - 1
    return 'no answer'

# returns the string with characters at indices i and j swapped, i being the earlier index.
# Also sorts the list from the point of swap.
def swap_chars_and_sort(string, i, j):
    char_list = list(string)
    char_list[i], char_list[j] = char_list[j], char_list[i]
    char_list[i+1:] = sorted(char_list[i+1:])
    return ''.join(char_list)