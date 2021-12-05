// ビット探索イテレーター
function* makeBinRangeIterator(start, end, step = 1) {
    const zeroPadding = (NUM, LEN) => (Array(LEN).join('0') + NUM).slice(-LEN);
    const digits = (end - 1).toString(2).length;
    for (let i = start; i < end; i += step) {
        yield zeroPadding(i.toString(2), digits).split("").map(e => parseInt(e));
    }
}


// 全順列探索イテレーター
function* makePermIterator(arr, len) {

    permutation(arr, len);
}

// test
// let mr = makeBinRangeIterator(0, 16, 2);
// for (const bin of mr) {
//     console.log(bin);
// }

// 全順列探索イテレーター
function makePermIterator(arr, k = arr.length) {
    var l = arr.length,
        used = Array(k),
        data = Array(k);
    return function* backtracking(pos) {
        if (pos == k) yield data.slice();
        else for (var i = 0; i < l; ++i) if (!used[i]) {
            used[i] = true;
            data[pos] = arr[i];
            yield* backtracking(pos + 1);
            used[i] = false;
        }
    }(0);
}

// var p = makePermIterator([1, 2, 3, 4], 2);
// for (const perm of p) {
//     console.log(perm);
// }


/**
 * 2分探索
 * @param Array arr ソート済みの探索対象配列
 * @param Int target 探索する値
 * @return Array 探索結果の添字 見つからなかった場合は-1を返す
 */
function binarySearch(arr, target) {
    let idx = -1;
    let iMin = 0;
    let iMax = arr.length - 1;
    while (iMin <= iMax) {
        let iMid = Math.floor((iMin + iMax) / 2);
        if (arr[iMid] === target) {
            idx = iMid;
            break;
        } else if (arr[iMid] < target) {
            iMin = iMid + 1;
        } else {
            iMax = iMid - 1;
        }
    }
    return [idx, iMin, iMax]
}

var arr = [1,6,6,2,6,8,8,4,1,36,8,54,12,6,8,8,5,0,5].sort((a,b) => a-b);
console.log(...arr);
console.log(binarySearch(arr, 8));