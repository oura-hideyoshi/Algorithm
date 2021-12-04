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

var p = makePermIterator([1, 2, 3, 4], 2);
for (const perm of p) {
    console.log(perm);
}


