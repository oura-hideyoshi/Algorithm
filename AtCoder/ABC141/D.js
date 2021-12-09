'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

class binary_heap {
    constructor() {
        this._data = [];
        this._size = 0;
    }

    enqueue(priority, value) {
        var data = this._data;
        var i = 0;
        var p = 0;
        var ret = null;

        if (this._size) {
            data.push({ p: priority, v: value });
            i = this._size;
            p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);   // parent
            while (p >= 0) {
                if (data[p].p < data[i].p) {
                    ret = data[i];
                    data[i] = data[p];
                    data[p] = ret;

                    i = p;
                    p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);
                } else {
                    break;
                }
            }
        } else {
            data.push({ p: priority, v: value });
        }
        this._size = this._size + 1;
    };
    dequeue() {
        var data = this._data;
        var size = this._size - 1;
        var result = null;
        var i = 0;
        var c1 = 1; // left child
        var c2 = 2; // right child
        var p0 = 0.0;
        var p1 = 0.0;
        var p2 = 0.0;
        var ret = null;

        if (this._size) {
            result = data[0].v;
            data[0] = data[size];
            data.pop();

            while (c1 < size) {
                if (c2 < size) {
                    p0 = data[i].p;
                    p1 = data[c1].p;
                    p2 = data[c2].p;

                    if ((p1 < p2) && (p0 < p2)) {
                        ret = data[i];
                        data[i] = data[c2];
                        data[c2] = ret;
                        i = c2;
                    } else if (p0 < p1) {
                        ret = data[i];
                        data[i] = data[c1];
                        data[c1] = ret;
                        i = c1;
                    } else {
                        break;
                    }
                    c1 = (i << 1) + 1;
                    c2 = (i << 1) + 2;
                } else {
                    p0 = data[i].p;
                    p1 = data[c1].p;

                    if (p0 < p1) {
                        ret = data[i];
                        data[i] = data[c1];
                        data[c1] = ret;
                    }
                    break;
                }
            }

            this._size = size;
            return result;
        } else {
            return (void 0);
        }
    };
    top() {
        return this._data[0].v;
    };
    size() {
        return this._size;
    };
}


function main() {
    const [N, M] = getLine(); // 賞品・チケット
    let prices = getLine();

    let bh = new binary_heap();
    for (let v of prices) {
        bh.enqueue(v, v);
    }

    for (let idx = 0; idx < M; idx++) {
        let v = bh.dequeue();
        bh.enqueue(Math.floor(v / 2), Math.floor(v / 2));
    }

    prices = bh._data.map(e => e.v);
    return prices.reduce((e, sum) => e + sum, 0)
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));