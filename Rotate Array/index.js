
const reverse=function(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    let numsLength=nums.length;
    k%=numsLength;
    reverse(nums,0,numsLength-1);
    reverse(nums,0,k-1);
    reverse(nums,k,numsLength-1);
};