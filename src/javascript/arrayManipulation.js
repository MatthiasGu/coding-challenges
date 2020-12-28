// problem https://www.hackerrank.com/challenges/crush/problem
// Brute force approach is to simply carry out the operations as described, which runs at O(n^2) at the worst case.
// However, it is not necessary to do so - we can instead compute sums of local maxima in order to determine where the global maximum is by finding where they converge. To do this, we only need to add the query to the first element of the query and subtract it from the element following the last. For example:
  // 5 3
  // 1 2 100
  // 2 5 100
  // 3 4 100
// We start with 0 0 0 0 0
// After the first query we have 100 0 -100 0 0, subtracting 100 from the second element.
// After the second query we have 100 100 -100 0 0. We don't subtract anything, because all elements are affected. If we now calculate the rolling sum of the array, we get
// 100 200 100 100 100. This is correct, because only the second element was added twice.


function arrayManipulation(n, queries) {
  let arr = new Array(n).fill(0)
  let max = 0
  queries.forEach(query => {
    arr[query[0] - 1] += query[2]
    if (query[1] < n) {
      arr[query[1]] -= query[2]
    }
  })
  let acc = 0
  arr.forEach(elem => {
    acc += elem
    if (acc > max) {
      max = acc
    }
  })
  return max
}