const LIS = require('./LIS(Longest_Increasing_Subsequence)');
const LCS = require('./LCS(Longest_Common_Subsequence)');


//Longest Increasing sub sequence
const LISArr = [10, 22, 9, 33, 21, 50, 41, 60];
const LISN  = LISArr.length;
const LISLength = LIS.DSLongestIncreasingSubsequence(LISArr,LISN);
console.log(`Longest Increasing subsequence for ${LISArr} is ${LISLength}`);

const LCSStr1 = "AGGTAB";
const LCSStr2 = "GXTXAYB";
const LCSOutput = LCS.DSLongestCommonSubsequence(LCSStr1, LCSStr2);
console.log(`Longest Common Subsequence for ${LCSStr1} and ${LCSStr2} is ${LCSOutput}`);



