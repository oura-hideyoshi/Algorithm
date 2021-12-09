"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("C.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    const [N] = getLine();

    /**
     * もし2変数なら、
     * (1, 1), ... , (1, N) -> N
     * (2, 2), ... , (2, N/2) -> floor(N/2 - 1)
     * .
     * (√N, √N) -> 1
     */
    let quotient = [0];
    let ans = 0;
    for (let A = 1; A <= Math.cbrt(N); A++) {
        for (let B = A; B <= Math.sqrt(Math.floor(N / A)); B++) {
            ans += Math.floor(N / (A * B)) - B + 1;
        }
    }

    return ans;

}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));