// problem https://www.hackerrank.com/challenges/new-year-chaos/problem
// No number can be more than 3 greater than its position.
// Otherwise, we just need to count how many of the elements we already saw are
// greater than the current element. Each of those is a swap.
// We can also reverse the traversal order to improve performance, because we do not need to keep track of elements we already saw. We just need to look at elements from position 2 less than the current element (because a bigger element cannot occur further than that due to our first premise).
function minimumBribes(q) {
  let numberOfBribes = 0
  for (let i = q.length; i >= 0; i--) {
    if (q[i] > i + 3) {
      console.log('Too chaotic')
      return
    } else {
      for (let j = Math.max(0, q[i] - 2); j < i; j++) {
        if (q[j] > q[i]) {
          numberOfBribes += 1
        }
      }
    }
  }
  console.log(numberOfBribes)
}