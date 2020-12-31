# We always want to try to make the change as far down the string as possible.
# It thus makes sense to traverse the string in reverse order.
# We then want to make a breadth first search for an eligible swap.
# An elibile swap is a character that is bigger than a character earlier in the list.
# Finally, we want to sort the string from the point where swap was made.
def biggerIsGreater(w):
    bfsLimit = len(w) - 1
    while(bfsLimit >= 0):
        for i in range(len(w) - 1, bfsLimit, -1):
            if (w[i] > w[bfsLimit]):
                return swapCharsAndSort(w, bfsLimit, i)
        bfsLimit = bfsLimit - 1
    return 'no answer'

# returns the string with characters at indices i and j swapped, i being the earlier index.
# Also sorts the list from the point of swap.
def swapCharsAndSort(string, i, j):
    charList = list(string)
    charList[i], charList[j] = charList[j], charList[i]
    charList[i+1:] = sorted(charList[i+1:])
    return ''.join(charList)