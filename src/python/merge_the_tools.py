# Problem https://www.hackerrank.com/challenges/merge-the-tools/problem
def merge_the_tools(string, k):
    for i in range(0, len(string), k):
      substr = string[i:i+k]
      print(''.join(sorted(set(substr), key=substr.index)))