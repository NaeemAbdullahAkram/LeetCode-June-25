class Solution:
    def findLHS(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0
        nums.sort()
        start = 0
        max_len = 0
        for end in range(len(nums)):
            while nums[end] - nums[start] > 1:
                start += 1
            if nums[end] - nums[start] == 1:
                max_len = max(max_len, end - start + 1)
        return max_len