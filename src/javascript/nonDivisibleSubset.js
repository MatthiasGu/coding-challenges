// problem https://www.hackerrank.com/challenges/non-divisible-subset/problem
// A number n is divisible by k if n % k == 0
// Sum of two numbers n1 and n2 is divisible by k if (n1 % k + n2 % k) % k == 0.
// This we can rewrite as (n1 + n2) % k == 0
// So if we have n1 % k = i, then inevitably n2 % k = k - i. We call i and k - i corresponding numbers.
function nonDivisibleSubset(divisor, array) {
  let freqArray = new Array(divisor).fill(0)
  // Create an array of the frequency of occurrence of each modulus.
  array.forEach(elem => {
    freqArray[elem % divisor] = (freqArray[elem % divisor] + 1) || 1
  })
  // If a divisor is even, then multiple instances of divisor / 2 will add up to a number divisible by the divisor, so we can only take 1.
  if (divisor % 2 == 0) {
    freqArray[divisor / 2] = Math.min(freqArray[divisor / 2], 1)
  }
  // Ditto for 0.
  let ans = Math.min(freqArray[0], 1)
  // For all other numbers, we want to take the higher of the corresponding numbers to get the maximum set.
  for (let i = 1; i <= divisor / 2; i++) {
    ans += Math.max(freqArray[i], freqArray[divisor - i])
  }
 return ans
}