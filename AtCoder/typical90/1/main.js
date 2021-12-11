'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

// その値を答えとする切り分け方ができるかどうか
const canAns = (length, N, A, maxLen, K) => {
    let _K = 0;
    // 注目してるヨウカンの左端のidx
    let left = -1;
    for (let idx = 0; idx <= N; idx++) {
        if ((A[idx] || maxLen) - (A[left] || 0) < length)
            continue;
        else {
            left = idx;
            _K++;
            continue;
        }
    }
    return K + 1 <= _K ? true : false;
}

function main() {
    let [N, L] = getLine();
    let [K] = getLine();
    let A = getLine();



    // 答えとなる最大値で2分探索
    // left は「常に」条件を満たさない
    // right は「常に」条件を満たす
    let left = 1;
    let right = Math.pow(10, 9);
    let center;
    while (right - left > 1) {
        center = Math.floor((left + right) / 2);
        // console.log(left, center, right);
        if (canAns(center, N, A, L, K)) {
            left = center;
        }
        else {
            right = center;
        }

    }
    // console.log(left, center, right);
    return left
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));