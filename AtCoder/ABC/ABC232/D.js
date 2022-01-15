'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
function xArray(v) { var a = arguments, l = a.length, r = 'Array(a[' + --l + ']).fill().map(x=>{return ' + v + ';})'; while (--l) r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')'; return eval(r); }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [H, W] = getLine();
    const map = getLines(H, true);

    let DP = xArray(-1, H + 1, W + 1);
    let ans = 1;
    for (let y = 1; y <= H; y++) {
        for (let x = 1; x <= W; x++) {
            if (x == 1 && y == 1) {
                DP[y][x] = 1;
                continue;
            }
            if (map[y - 1][0][x - 1] === ".") {
                let upper = DP[y - 1][x] == -1 ? -1 : DP[y - 1][x] + 1;
                let left = DP[y][x - 1] == -1 ? -1 : DP[y][x - 1] + 1;
                DP[y][x] = Math.max(upper, left);
                ans = Math.max(ans, DP[y][x]);
            }
        }
    }
    return ans;
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));