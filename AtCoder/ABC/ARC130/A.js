"use strict";
// var input = require("fs").readFileSync("/dev/stdin", "utf8");
var input = require("fs").readFileSync("A.txt", "utf8");

var cin = input.split(/ |\n/), cid = 0;
function next() { return +cin[cid++]; }
function nextstr() { return cin[cid++]; }
function nextbig() { return BigInt(cin[cid++]); }
function nexts(n, a) { return a ? cin.slice(cid, cid += n) : cin.slice(cid, cid += n).map(a => +a); }
function nextssort(n, a) { return a ? cin.slice(cid, cid += n).map(a => +a).sort((a, b) => b - a) : cin.slice(cid, cid += n).map(a => +a).sort((a, b) => a - b); }
function nextm(h, w, a) { var r = [], i = 0; if (a) for (; i < h; i++)r.push(cin.slice(cid, cid += w)); else for (; i < h; i++)r.push(cin.slice(cid, cid += w).map(a => +a)); return r; }
function xArray(v) { var a = arguments, l = a.length, r = "Array(a[" + --l + "]).fill().map(x=>{return " + v + ";})"; while (--l) r = "Array(a[" + l + "]).fill().map(x=>" + r + ")"; return eval(r); }
var streams = []; function print(s) { streams.push(s); }

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));

function main() {
    var n = next();
    var s = nextstr();
    var ans = 0;
    var t, x = 0;
    for (var i = 0; i < n; i++) {
        if (x === 0) {
            t = s[i];
            x = 1;
        } else {
            if (t === s[i]) {
                x++;
            } else {
                ans += x * (x - 1) / 2;
                t = s[i];
                x = 1;
            }
        }
    }
    return ans + x * (x - 1) / 2;
}