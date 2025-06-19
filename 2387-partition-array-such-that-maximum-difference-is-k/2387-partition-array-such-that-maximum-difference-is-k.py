class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        p,N=0,len(nums)
        count=0

        for i in range(N):
            if nums[i]-nums[p] <= k:
                continue
            else:
                p=i
                count+=1
        
        if nums[N-1] - nums[p] <=k:
            count+=1

        return count