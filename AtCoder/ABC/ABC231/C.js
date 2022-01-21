'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

function binarySearch(arr, target) {
    let idx;
    let iMin = -1;
    let iMax = arr.length;
    while (Math.abs(iMax - iMin) > 1) {
        let iMid = Math.floor((iMin + iMax) / 2);
        if (target <= arr[iMid]) {
            iMax = iMid;
        } else {
            iMin = iMid;
        }
    }

    if (arr[arr.length - 1] < target)
        // iMin = iMax;
        ;
    if (target < arr[0])
        // iMax = iMin;
        ;

    return [idx, iMin, iMax]
}

function main() {
    const [N, Q] = getLine();
    let heights = getLine();

    // 二分木探索
    heights = heights.sort((a, b) => a - b);

    for (let _ = 0; _ < Q; _++) {
        const [height] = getLine();
        let ans = binarySearch(heights, height);
        // console.log(`ans`, ans);
        console.log(N - (ans[1] + 1));
    }
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));