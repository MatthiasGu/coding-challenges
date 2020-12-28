// problem https://www.hackerrank.com/challenges/minimum-swaps-2/problem
// We can traverse the function from left to right. When we encounter a character that is in the wrong position, we swap it with the character in the right position and continue traversing.
// By the way, the test cases are wrong!

function minimumSwaps(arr) {
  let swaps = 0
  for (let i = 0; i < arr.length - 1; i++) {
    while (arr[i] !== (i + 1)) {
      let a = arr[i]
      let b = arr[i] - 1
      arr[i] = arr[b]
      arr[b] = a
      swaps += 1
    }
  }
  return swaps
}