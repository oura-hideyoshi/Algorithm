"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8");
// var input = require("fs").readFileSync("B.txt", "utf8");

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
    // TODO
    var [H, W, c, q] = nexts(4);
    var d = nextm(q, 3);
    var ans = xArray(0, c);
    var doneCol = [];
    var doneRow = [];

    for (var idx in d) {
        var query = d[q - idx - 1];
        if (query[0] == 1 && doneRow.indexOf(query[1]) == -1) {
            doneRow.push(query[1]);
            ans[query[2] - 1] += W - doneCol.length;
        }
        if (query[0] == 2 && doneCol.indexOf(query[1]) == -1) {
            doneCol.push(query[1]);
            ans[query[2] - 1] += H - doneRow.length;
        }
    }

    streams = ans;
}