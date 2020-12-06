// problem https://leetcode.com/problems/count-primes/
class Solution {
  public int countPrimes(int n) {
      if (n <= 2) {
          return 0;
      }
      int sol = 1;
      for (int i = 3; i < n; i+=2) {
          if (isPrime(i)) {
              sol++;
          }
      }
      return sol;
  }
  public boolean isPrime(int n) {
      int limit = (int) Math.floor(Math.sqrt(n));
      for (int i = 3; i <= limit; i+=2) {
          if (n % i == 0) {
              return false;
          }
      }
      return true;
  }
}