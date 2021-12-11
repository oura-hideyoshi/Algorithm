"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("C.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    const [N, K] = getLine();
    let sorted = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        sorted[i] = getLine().reduce((p, c) => p + c, 0);
    }
    const scores = sorted.slice();
    sorted = sorted.sort((a, b) => b - a);

    const rankKscore = sorted[K - 1];
    scores.map((e) => e + 300 >= rankKscore ? console.log("Yes") : console.log("No"))
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));