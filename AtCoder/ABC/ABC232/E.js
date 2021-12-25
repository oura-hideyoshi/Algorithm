'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
function xArray(v){ var a = arguments, l = a.length, r = 'Array(a[' + --l + ']).fill().map(x=>{return ' + v + ';})'; while (--l) r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')'; return eval(r); }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [H, W, K] = getLine();
    const [x1, y1, x2, y2] = getLine();

    

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));