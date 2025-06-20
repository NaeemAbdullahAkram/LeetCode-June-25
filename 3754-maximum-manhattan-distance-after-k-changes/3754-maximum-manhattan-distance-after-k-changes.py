class Solution:
    def maxDistance(self, s: str, k: int) -> int:
        ans=0
        E=0
        W=0
        N=0
        S=0
        for i in range(len(s)):
            if(s[i] == 'N') : N+=1
            if(s[i] == 'W') : W+=1
            if(s[i] == 'E') : E+=1
            if(s[i] == 'S'): S+=1
            base = abs(N - S) + abs(E - W)
            ans=max(ans,min(base + 2*k , i+1))
        return ans
            




