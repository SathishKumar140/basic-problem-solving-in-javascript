// Reference GeeksForGeeks - https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/
// Hacker Rank refrence  - https://www.hackerrank.com/challenges/longest-increasing-subsequent/problem

/* To make use of recursive calls, this function must return 
   two things: 
   1) Length of LIS ending with element arr[n-1]. We use 
      max_ending_here for this purpose 
   2) Overall maximum as the LIS may end with an element 
      before arr[n-1] max is used this purpose. 
   The value of LIS of full array of size n is stored in 
   max which is our final result */
function lis(arr, n){
    if(n===1){
        return 1;
    }
    // 'max_ending_here' is length of LIS ending with arr[n-1] 
    let res, max_ending_here = 1;

    /* Recursively get all LIS ending with arr[0], arr[1] ... 
       arr[n-2]. If   arr[i-1] is smaller than arr[n-1], and 
       max ending with arr[n-1] needs to be updated, then 
       update it */
    for(let i = 0; i < n; i++){
        res = lis(arr,i);
        if(arr[i-1] < arr[n-1] && res + 1 > max_ending_here){
            max_ending_here = res + 1; 
        }
    }

    return max_ending_here;
}

function DSLis(arr, n, solvedCalls = {}){
    if(solvedCalls[n]){
        return solvedCalls[n]
    }
    if(n===1){
        return 1
    }
    
    // 'max_ending_here' is length of LIS ending with arr[n-1] 
    let res, max_ending_here = 1;

    /* Recursively get all LIS ending with arr[0], arr[1] ... 
       arr[n-2]. If   arr[i-1] is smaller than arr[n-1], and 
       max ending with arr[n-1] needs to be updated, then 
       update it */
    for(let i = 0; i < n; i++){
        res = DSLis(arr,i, solvedCalls);
        solvedCalls[i] = res;
        if(arr[i-1] < arr[n-1] && res + 1 > max_ending_here){
            max_ending_here = res + 1; 
        }
    }

    return max_ending_here
}

module.exports = {
    LongestIncreasingSubsequence:lis,
    DSLongestIncreasingSubsequence:DSLis
}