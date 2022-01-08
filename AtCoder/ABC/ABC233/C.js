'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
function xArray(v) { var a = arguments, l = a.length, r = 'Array(a[' + --l + ']).fill().map(x=>{return ' + v + ';})'; while (--l) r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')'; return eval(r); }
var streams = []; function print(s) { streams.push(s); }

class Digit {
    constructor(array) {
        this.limit = array;
        this.array = xArray(0, array.length);
    }

    increment = () => {
        this.array[0] += 1;

        const inc = (index) => {
            try {
                this.array[index + 1] += Math.floor(this.array[index] / this.limit[index]);
                this.array[index] += (this.array[index]) % this.limit[index];
                if (index + 1 < this.limit.length)
                    inc(index + 1);
            } catch {
                return -1;
            }
        }
        return inc(0);
    }
}

function main() {
    const [N, X] = getLine();
    let length = [];
    let mat = [];
    for (let _ = 0; _ < N; _++) {
        const num = getLine();
        length.push(num[0])
        mat.push(num.slice(1));
    }

    // 全探索
    let digit = new Digit(length);
    while (digit.increment() != -1) {
        console.log(`digit.array`, digit.array)
    }
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));