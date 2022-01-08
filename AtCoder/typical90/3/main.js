'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

class Tree {
    constructor(N) {
        this.path = Array(N).fill().map(e => new Set());
    }

    addPath(start, end) {
        this.path[start].add(end);
    }

    // startからの最長経路を求める
    calcMaxLength(start) {
        let queue = [];
        let length = Array(this.path.length).fill().map(e => Infinity);
        let maxLength = 0;
        let maxLengthIdx = start;

        // init
        length[start] = 0;
        queue.push(start);

        // DFS
        while (queue.length != 0) {
            let here = queue.pop();
            for (let to of this.path[here]) {
                if (length[here] + 1 < length[to]) {
                    queue.push(to);
                    length[to] = length[here] + 1;
                    if (maxLength < length[to]) {
                        maxLength = length[to];
                        maxLengthIdx = to;
                    }
                }
            }
        }
        return [maxLength, maxLengthIdx];
    }
}


function main() {
    const [N] = getLine();
    let tree = new Tree(N + 1);

    for (let idx = 0; idx < N - 1; idx++) {
        const [s, e] = getLine();
        tree.addPath(s, e);
        tree.addPath(e, s);
    }

    let [_, idx] = tree.calcMaxLength(1);
    return tree.calcMaxLength(idx)[0] + 1;

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));