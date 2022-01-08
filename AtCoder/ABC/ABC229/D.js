"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("D.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    let [S] = getLine(1);
    let [K] = getLine();
    let left = 0;
    let right = 0;
    let ans = 0;
    let count = 0;
    for (let c of S) {
        if (c == 'X') {
            right++;
        }
        else {
            right++;
            if (count < K) {
                count++;
            }
            else {
                while (S[left] == 'X') {
                    left++
                }
                left++
            }
        }
        ans = Math.max(ans, right - left)
    }
    return ans;
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));