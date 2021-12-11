'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [N] = getLine();
    let B = getLine();
    let A = Array(N).fill(0);
    for (let idx = 0; idx < N; idx++) {
        if (idx == 0) {
            A[idx] = B[idx];
            continue;
        }
        if (idx == N - 1) {
            A[idx] = B[idx - 1];
            continue
        }
        else
            A[idx] = Math.min(B[idx], B[idx - 1]);
    }

    return A.reduce((sum, e) => sum + e, 0);
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));