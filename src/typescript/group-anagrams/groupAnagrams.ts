function groupAnagrams(strs: string[]): string[][] {
  const groups = []
  letterSort(strs)
  let newGroup = true;
  let group = [];
  for (let i = 0; i < strs.length; i++) {
      const word = strs[i]
      if (newGroup) {
        group = [word]
        newGroup = false;
      } else {
          if (isAnagram(word, group[0])) {
              group.push(word)
          } else {              
              groups.push(group)
              group = [word]
          }
      }
  }
  if (group.length > 0) {
      groups.push(group)
  }
  return groups
};

const isAnagram = (word1: string, word2: string): boolean => {
  if (word1.length !== word2.length) {
      return false
  }
  if (word1.length === 0 && word2.length === 0) {
      return true
  }
  return word1.split('').sort().join('') === word2.split('').sort().join('')
}

const letterSort = (list: string[]): string[] => {
    return list.sort((a, b) => a.split('').sort().join('') > b.split('').sort().join('') ? 1 : -1)
}