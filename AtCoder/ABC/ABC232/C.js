'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
function xArray(v) { var a = arguments, l = a.length, r = 'Array(a[' + --l + ']).fill().map(x=>{return ' + v + ';})'; while (--l) r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')'; return eval(r); }
var streams = []; function print(s) { streams.push(s); }

const range = (start, end) => [...Array(end).keys()].slice(start);
function makePermIterator(arr, k = arr.length) {
    var l = arr.length,
        used = Array(k),
        data = Array(k);
    return function* backtracking(pos) {
        if (pos == k) yield data.slice();
        else for (var i = 0; i < l; ++i) if (!used[i]) {
            used[i] = true;
            data[pos] = arr[i];
            yield* backtracking(pos + 1);
            used[i] = false;
        }
    }(0);
}

function main() {
    const [N, M] = getLine();
    let A = getLines(M);
    let B = getLines(M);
    let matA = xArray(0, 9, 9);
    let matB = xArray(0, 9, 9);

    const pi = makePermIterator(range(1, N + 1));

    const swap = (origin, rule) => {
        for (let idx in origin) {
            origin[idx] = origin[idx].map(e => rule[e - 1]).sort();
        }

        return origin;
    }

    for (let line of A) {
        matA[line[0]][line[1]] = 1;
        matA[line[1]][line[0]] = 1;
    }

    for (let rule of pi) {
        matB = xArray(0, 9, 9);
        for (let line of B) {
            matB[rule[line[0] - 1]][rule[line[1] - 1]] = 1;
            matB[rule[line[1] - 1]][rule[line[0] - 1]] = 1;
        }
        if(matA.toString() == matB.toString())
            return "Yes";
    }

    return "No";

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));