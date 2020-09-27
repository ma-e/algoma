'use strict'

/**
 * @desc Swap two elements
 * @param {items} items items need to sort
 * @param {number} l lest pointer
 * @param {number} r right pointer
 */
function swap(items, l, r) {
    var temp = items[l];
    items[l] = items[r];
    items[r] = temp;
}

/**
 * @desc Find right index for pivot 
 * @param {array} items giving items
 * @param {number} l lest pointer
 * @param {number} r right pointer
 */
function partition(items, l, r) {
    var pivot = items[Math.floor((r + l) / 2)], i = l, j = r
    while (i<=j) {
        while (items[i]<pivot) {
            i++;
        }
        while (items[j]>pivot) {
            j--;
        }
        if (i<=j) {
            swap(items,i,j);
            i++;
            j--;
        }
    }
    return i
}

/**
 * @desc Sorting an arr using quicksort algorithm
 * @param array items - the vlaues to be sorted
 * @param number l - left pointer
 * @param number r - right pointer
 * @return array items - a sorted arr
 */
function quicksort(items,l,r) {
    var index;
    if(items.length > 1) {
        index = partition(items,l,r);
        if (l < index-1) {
            quicksort(items,l,index-1);
        }
        if (index < r) {
            quicksort(items,index,r);
        }
    }
    return items;
}

module.exports.quicksort = quicksort;