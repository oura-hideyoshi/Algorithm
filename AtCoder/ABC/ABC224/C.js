'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [N] = getLine();
    let mat = getLines(N);
    let ans = 0;

    // 全探索
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < x; y++) {
            for (let z = 0; z < y; z++) {
                const X = mat[x];
                const Y = mat[y];
                const Z = mat[z];

                // 一直線じゃないかの判定
                const ang1 = Math.atan2(X[1] - Y[1], X[0] - Y[0]);
                const ang2 = Math.atan2(X[1] - Z[1], X[0] - Z[0]);
                if (Math.abs(ang1 - ang2) < Number.EPSILON)
                    break
                ans ++;
            }
        }
    }
    return ans;

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));