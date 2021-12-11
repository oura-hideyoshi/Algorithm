"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("input.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

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

const range = (start, end) => [...Array(end ).keys()].slice(start);
function main() {
    const [N] = getLine();
    const A = getLine().join("");
    const B = getLine().join("");

    let counta = 0;
    let countb = 0;
    let count = 0;
    for (let perm of makePermIterator(range(1, N + 1))) {
        if (perm.join("") == A)
            counta = count;
        if (perm.join("") == B)
            countb = count;
        count++;
    }
    return Math.abs(counta - countb);
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));