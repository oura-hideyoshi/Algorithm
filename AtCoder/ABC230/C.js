"use strict";
// var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
var input = require("fs").readFileSync("C.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    let [N, A, B] = getLine();
    let [y1, y2, x1, x2] = getLine();

    let [k1, k2] = [Math.min(N - A, N - B), Math.max(1 - A, 1 - B)].sort();
    let [k3, k4] = [Math.min(N - A, B - 1), Math.max(1 - A, B - N)].sort();

    for (let y = y1; y <= y2; y++) {
        for (let x = x1; x <= x2; x++) {
            // 傾き45℃上にあること, 長さ以内にいること
            if ((A - y == B - x && B + k1 <= x <= B + k2 && A + k1 <= y <= A + k2)
                ||
                (A - y == -(B - x) && B - k3 <= x <= B - k4 && A + k3 <= y <= A + k4)) {
                process.stdout.write('#')
            }
            else
                process.stdout.write('.')
        }
        console.log("");
    }

}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));