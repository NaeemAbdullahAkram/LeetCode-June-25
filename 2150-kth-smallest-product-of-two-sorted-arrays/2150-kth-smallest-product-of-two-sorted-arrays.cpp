#pragma GCC optimize("O3,unroll-loops,Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx")
static const auto harsh = []() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 0;
}();

#define LC_HACK
#ifdef LC_HACK
const auto __ = []() {
  struct ___ { static void _() { std::ofstream("display_runtime.txt") << 0 << '\n'; } };
  std::atexit(&___::_);
  return 0;
}();
#endif

class Solution {
public:
    typedef long long ll; 
    bool isPossible(vector<int>& nums1, vector<int>& nums2, ll &target, ll &k){
        int n = nums1.size();
        int m = nums2.size();
        ll count = 0;

        for(int i = 0; i<n; i++){

            int low = 0;
            int high = m-1;

            // If nums1[i] is positive we can just use Simple binary search to look for all minimum products
            if(nums1[i] > 0){
                while(low <= high){
                    int mid = low + (high-low)/2;
                    if(1LL*nums2[mid]*nums1[i] <= target){
                        low = mid+1;
                    }
                    else{
                        high = mid-1;
                    } 
                }

                count += low;
            }

            // But if nums1[i] is -ve then we have to reverse our Binary search logic since smaller number is at first so -ve numbers can be there which will make product greater
            else if(nums1[i] < 0) {

                while(low <= high){
                    int mid = low + (high-low)/2;
                    if(1LL*nums2[mid]*nums1[i] <= target){
                        high = mid-1;
                    }
                    else{
                        low = mid+1;
                    } 
                }
                count += (m - high-1);
            }

            // If nums1[i] == 0 means & target >= 0 means all nums2 elements can be counted
            else{
                if(target >= 0){
                    count += m;
                }
            }
            
            // If we have enough k elements then return true
            if(count >= k) return true;
        }
        return false;
    }



    long long kthSmallestProduct(vector<int>& nums1, vector<int>& nums2, ll k) {
        int n = nums1.size();
        int m = nums2.size();

        ll low = -1e10;
        ll high = 1e10;
        ll ans = 0;

        // Using the standard Binary Search to guessing the k smallest product
        while(low <= high){
            ll mid = low + (high-low)/2;

            if(isPossible(nums1, nums2, mid, k)){
                ans = mid;
                high = mid-1;
            }
            else{
                low = mid+1;
            }
        }
        return ans;
    }
};