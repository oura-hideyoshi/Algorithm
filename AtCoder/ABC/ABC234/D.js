'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
function xArray(v) { var a = arguments, l = a.length, r = 'Array(a[' + --l + ']).fill().map(x=>{return ' + v + ';})'; while (--l) r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')'; return eval(r); }
var streams = []; function print(s) { streams.push(s); }

/**
 * 二分探索
 * 
 * @param {Array<any>} arr orderd by asc
 * @param {any} target 
 * @param {Function} callBack ex) (a,target) => a < target
 * @returns 
 */
function binarySearch(arr, target, callBack) {
    let iMid;
    let iMin = -1;
    let iMax = arr.length;
    while (1 < iMax - iMin) {
        iMid = Math.floor((iMin + iMax) / 2);
        if (callBack(arr[iMid], target)) {
            iMin = iMid;
        } else {
            iMax = iMid;
        }
    }
    return [iMid, iMin, iMax]
}

function main() {
    const [N, K] = getLine();
    let P = getLine();

    let arr = P.slice(0, K).sort((a, b) => b - a);
    console.log(arr[K - 1])
    for (let i = K; i < N; i++) {
        const [_, insertIdx, ...__] = binarySearch(arr, P[i], (a, b) => a > b);
        arr.splice(insertIdx + 1, 0, P[i]);
        // console.log(`arr`, arr)
        console.log(arr[K - 1])
    }

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));