# Problem - https://leetcode.com/problems/permutations/
class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        solution = []
        if (len(nums) == 1):
            return [nums]
        solution.extend(return_permutations(nums))
        return solution
    
def return_permutations(nums):
    if(len(nums) == 1):
        return nums
    if(len(nums) == 2):
        return [[nums[0], nums[1]],[nums[1], nums[0]]]
    all_permutations = []
    for num in nums:
        nums_copy = list(nums)
        nums_copy.remove(num)
        current_permutations = [num]
        iteration = iterate(nums_copy)
        for permutation in iteration:
            current_permutations_copy = list(current_permutations)
            current_permutations_copy.extend(permutation)
            all_permutations.append(current_permutations_copy)
    return all_permutations  
        
def iterate(nums):
    if (len(nums) > 1):
        permutation = return_permutations(nums)
        return permutation       
    else:
        return nums
    