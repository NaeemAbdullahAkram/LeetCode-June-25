class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        N = len(nums)

        # Compare adjacent elements
        max_diff = 0
        for idx in range(N-1):
            max_diff = max(max_diff, abs(nums[idx+1] - nums[idx]))
        
        # Compare the last element and first element to complete the circle
        max_diff = max(max_diff, abs(nums[N-1] - nums[0]))

        return max_diff