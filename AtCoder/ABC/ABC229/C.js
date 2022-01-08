"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("C.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    let [N, W] = getLine();
    const mat = getLines(N);
    let ans = 0n;
    mat.sort((a, b) => b[0] - a[0]);
    for (let cheese of mat) {
        if (cheese[1] <= W) {
            W -= cheese[1];
            ans += BigInt(cheese[0] * cheese[1]);
        } else {
            ans += BigInt(cheese[0] * W);
            break
        }
    }
    return ans;

}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));