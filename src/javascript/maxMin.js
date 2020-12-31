// problem https://www.hackerrank.com/challenges/angry-children/problem
function maxMin(k, arr) {
  arr.sort((a, b) => a - b)
  let min = Number.MAX_VALUE
  for (let i = 0; i <= arr.length - k; i++) {
    let localMin = arr[i + k - 1] - arr[i]
    if (localMin < min) {
      min = localMin
    }
  }
  return min
}