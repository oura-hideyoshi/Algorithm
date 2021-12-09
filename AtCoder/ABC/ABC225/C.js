'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [N, M] = getLine();
    const mat = getLines(N);

    const start = mat[0][0];
    const stratCol = start % 7;
    const startRow = Math.ceil(start / 7);
    let flag = true;
    for (let j = 0; j < N; j++) {
        for (let i = 0; i < M; i++) {
            let val = mat[j][i];
            let col = val % 7;
            let row = Math.ceil(val / 7);
            if (col == (stratCol + i) % 7 && row == (startRow + j));
            else flag = false;
        }
    }
    flag ? console.log('Yes') : console.log('No');

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));