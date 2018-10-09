// Reference GeeksForGeeks - https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/

//Utils
function max(a, b) 
{ 
    return (a > b)? a : b; 
} 
// Time complexity O(2^n) for worst case when there is no match in the x and y and its length is 0
function LCS(x, y){
    const m = x.length;
    const n = y.length;
    if( m === 0 || n === 0){
        return 0
    }
    if(x[m-1] === y[n-1]){
        return 1 + LCS(x.substring(0,m-1), y.substring(0,n-1))
    }else{
        return max(LCS(x,y.substring(0,n-1)),LCS(x.substring(0,m-1),y))
    }
}
// Time complexity is O(mn) m is length of x and n is length of y
function DSLCS(X,Y){
    const m = X.length;
    const n = Y.length;
    let L = [...Array(m+1)].map(e => Array(n+1));
    for (let i=0; i<=m; i++) 
    { 
        for (let j=0; j<=n; j++) 
        { 
            if (i == 0 || j == 0) 
                L[i][j] = 0; 

            else if (X[i-1] == Y[j-1]) 
                L[i][j] = L[i-1][j-1] + 1; 

            else
                L[i][j] = max(L[i-1][j], L[i][j-1]); 
        } 
    }
    return L[m][n] 
}

module.exports = {
    LongestCommonSubsequence: LCS,
    DSLongestCommonSubsequence: DSLCS
}