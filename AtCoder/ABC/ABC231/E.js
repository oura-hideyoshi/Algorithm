'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
function xArray(v) { var a = arguments, l = a.length, r = 'Array(a[' + --l + ']).fill().map(x=>{return ' + v + ';})'; while (--l) r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')'; return eval(r); }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [N, X] = getLine();
    const A = getLine().reverse();

    // 13 -> 1 + 3 = 4
    const calcChange = (num) => {
        let _num = num;
        let ans = 0;
        for (const n of A) {
            let count = Math.floor(_num / n);
            _num -= n * count;
            ans += count;
        }
        return ans;
    }

    const rec = (_num, digit) => {
        if (digit == A.length - 1)
            return _num;

        let floor = Math.floor(_num / A[digit]);
        let up = floor + 1 + calcChange(A[digit] * (floor + 1) - _num);
        console.log(`up`, up)
        let bottom = floor + rec(_num - A[digit] * floor, digit + 1);
        console.log(`bottom`, bottom)
        return Math.min(up, bottom);
    }
    return rec(X, 0);
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));