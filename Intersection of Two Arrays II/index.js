var intersect = function (nums1, nums2) {
    let i = (j = 0),
      len1 = nums1.length,
      len2 = nums2.length,
      newArr = [];
  
    if (len1 === 0 || len2 === 0) {
      return newArr;
    }
  
    nums1.sort(function (a, b) {
      return a - b;
    });
    nums2.sort(function (a, b) {
      return a - b;
    });
  
    while (i < len1 || j < len2) {
      if (nums1[i] > nums2[j]) {
        j++;
      } else if (nums1[i] < nums2[j]) {
        i++;
      } else {
        if (nums1[i] === nums2[j]) {
          newArr.push(nums1[i]);
        }
  
        if (i < len1 - 1) {
          i++;
        } else {
          break;
        }
  
        if (j < len2 - 1) {
          j++;
        } else {
          break;
        }
      }
    }
    return newArr;
  };