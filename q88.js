/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let idx1= 0
    let idx2 = 0
    console.log(nums1.length);
    if(nums1.length==0){
        console.log(nums1);
        nums1=nums2
        console.log(nums1);
        return
    }
    if(nums2.length==0){
        console.log(nums1);
        return
    }
    for(let i = 0 ; i<m+n-1; i++){
        if(nums1[idx1]==0){
            for(let i = 0 ; i<n; i++){
                let temp = nums1[idx1]
                nums1[idx1]=nums2[idx2]
                nums2[idx2]=temp
                idx1++
                idx2++
            }
            break
        }

        if(nums1[idx1]<=nums2[idx2]){
            idx1++
        }else{
            let temp = nums1[idx1]
            nums1[idx1]=nums2[idx2]
            nums2[idx2]=temp
            idx1++
        }
    }
    console.log(nums1);
};

merge([0],0,[1],1)
