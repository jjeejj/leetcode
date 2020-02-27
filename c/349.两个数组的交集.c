/*
 * @lc app=leetcode.cn id=349 lang=c
 *
 * [349] 两个数组的交集
 */

// @lc code=start


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// 利用双层循环解决
int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize){
    int maxSize =  nums1Size > nums2Size ? nums2Size : nums1Size;
    // 返回的数组
    int* arr = (int*)malloc(sizeof(int)* maxSize);
    int size = 0; 
        for ( int i = 0 ; i < nums1Size ; i++ ) {
        for ( int j = 0 ; j < nums2Size ; j++ ) {
            if ( nums2[j] == nums1[i] ) {
                int flag = 0;
                for ( int k = 0 ; k < size ; k++ ) {
                    if ( arr[k] == nums2[j] ) {
                        flag = 1;
                    }
                }
                if ( !flag ) {
                    arr[size++] = nums2[j];
                }
            }
        }
    }
    (*returnSize) = size;
    return arr;
}


// @lc code=end

