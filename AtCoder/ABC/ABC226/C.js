"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// const input = require("fs").readFileSync("C.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split().map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    // TODO
    const N = getLine()[0];
    const mat = getLines(N);
    // 既に覚えた技一覧 [1-N]
    let skills = new Set();
    let total = BigInt(0);
    let plan = [N]
    while (plan.length != 0) {
        const skillIdx = plan.pop();
        const skill = mat[skillIdx - 1];
        if (skills.has(skillIdx)) {

        }
        else {
            total += BigInt(skill[0]);
            skills.add(skillIdx);
            plan.push(...skill.slice(2, 2 + skill[1]).filter(e => plan.indexOf(e) == -1))
        }
    }

    return total;
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));