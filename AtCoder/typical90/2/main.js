'use strict';

var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

function* makeBinRangeIterator(start, end, step = 1) {
    const zeroPadding = (NUM, LEN) => (Array(LEN).join('0') + NUM).slice(-LEN);
    const digits = (end - 1).toString(2).length;
    for (let i = start; i < end; i += step) {
        yield zeroPadding(i.toString(2), digits).split("").map(e => parseInt(e));
    }
}

function main() {
    const [N] = getLine();
    let bi = makeBinRangeIterator(0, Math.pow(2, N));

    for (let bin of bi) {
        let stack = 0;
        const origin = bin.slice();
        let flag = true;
        if (bin[0] != 0)
            break;
        while (bin.length != 0) {
            if (bin.pop() == 1)
                stack++;
            else
                stack--;
            if (stack < 0) {
                flag = false;
                break;
            }

        }
        if (stack != 0)
            flag = false;
        if (flag) {
            for (let idx = 0; idx < origin.length; idx++)
                origin[idx] == 1 ? process.stdout.write(")") : process.stdout.write("(")
            console.log()
        }

    }

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));