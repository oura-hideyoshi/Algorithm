"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("D.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    const [N, D] = getLine();
    let mat = getLines(N);
    mat = mat.sort((a, b) => a[1] - b[1]);

    // 壊された壁の右端
    let right = 0;
    // その壁を壊したかどうか
    let wall = 0;
    // パンチの数
    let ans = 0;
    for (; right <= Math.pow(10, 9) && wall < N;) {
        ans++;
        // 一番手前にある壁
        let closest = mat[wall];
        // その壁の左端が長かったら既に壊れているので
        while (closest[0] <= right) {
            wall++;
            closest = mat[wall];
        }
        // その壁の一番右から殴ったときの影響範囲
        right = closest[1] - 1 + D;
        // どこの壁まで壊したか
        while (wall < N)
            if (mat[wall][0] <= right)
                wall++;
            else
                break;
    }
    return ans;


}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));