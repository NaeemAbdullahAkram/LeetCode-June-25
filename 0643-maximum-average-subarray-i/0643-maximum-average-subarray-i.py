class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        curSum = 0

        for i in range(0, k):
            curSum += nums[i]
        
        maxSum = curSum

        for j in range(k, len(nums)):
            curSum += nums[j]
            curSum -= nums[j - k]
            maxSum = max(maxSum, curSum)

        return maxSum / k