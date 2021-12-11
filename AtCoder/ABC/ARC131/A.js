'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

const zeroPadding = (NUM, LEN) => (Array(LEN).join('0') + NUM).slice(-LEN);

function main() {
    let [A] = getLine();
    let [B] = getLine();

    let isEven = B % 2 == 1;
    A = zeroPadding(A, 8).split('').map(e => +e);
    B = zeroPadding(Math.floor(B/2), 8).split('').map(e => +e);
    if(isEven)
        A.unshift(5);
    let ans = B.concat(A);
    // console.log(BigInt(ans.join(""))*BigInt(2))
    return ans.join("");

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));