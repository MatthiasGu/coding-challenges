// problem https://www.hackerrank.com/challenges/greedy-florist/problem
function getMinimumCost(k, c) {
  c.sort((a, b) => b - a)
  let totalCost = 0
  let prevPurchases = 0
  for (let i = 0; i < c.length; i += 1) {
    if (i > 0 && i % k == 0) {
      prevPurchases += 1
    }
    totalCost += (prevPurchases + 1) * c[i]        
  }
  return totalCost
}