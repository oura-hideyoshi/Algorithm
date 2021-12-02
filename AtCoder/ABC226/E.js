"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("E.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
function xArray(v) { var a = arguments, l = a.length, r = "Array(a[" + --l + "]).fill().map(x=>{return " + v + ";})"; while (--l) r = "Array(a[" + l + "]).fill().map(x=>" + r + ")"; return eval(r); }
var streams = []; function print(s) { streams.push(s); }

const range = (start, end) => [...Array(end + 1).keys()].slice(start);

function main() {
    let line = getLine();
    const N = line[0]; // 10^5
    const M = line[1]; // 10^5
    const edges = getLines(M + 1);

    // nodes[0] -> [1, 3] は、頂点0から頂点1, 3へ繋がっていることを示す
    let nodes = Array(N + 1).fill().map(() => []);
    for (let edge of edges) {
        nodes[edge[0]].push(edge[1]);
        nodes[edge[1]].push(edge[0]);
    }
    // 一本のものを取り除く
    let stack = range(1, N);
    while (stack.length != 0) {
        const currentIdx = stack.pop();
        const currentNode = nodes[currentIdx];
        if (currentNode.length == 1) {
            const connectIdx = currentNode[0];
            let connectNode = nodes[connectIdx];
            nodes[connectIdx] = connectNode.filter(e => e != currentIdx);
            nodes[currentIdx] = [];
            stack.push(connectIdx);
        }
    }
    // 解なしのとき
    if (nodes.find(e => e.length > 2) != undefined || nodes.every(e => e.length == 0))
        return 0;

    // 環の数を求める

    // そのノードを調べたかどうか
    let checkList = xArray(0, N + 1);

    // 環をたどる関数
    const serch = (initIndex) => {
        checkList[initIndex] = 1;
        let nextIdx = checkList[nodes[initIndex][0]] == 1 ? nodes[initIndex][1] : nodes[initIndex][0];

        while (checkList[nextIdx] != 1) {
            let currentIdx = nextIdx;
            checkList[currentIdx] = 1;
            nextIdx = checkList[nodes[initIndex][0]] == 1 ? nodes[initIndex][1] : nodes[initIndex][0];
        }
    }

    let expo = 0;
    for (let idx = 1; idx <= N; idx++) {
        if (checkList[idx] == 1 || nodes[idx].length == 0)
            continue
        expo++;
        serch(idx);
    }
    ans = 1;
    for (let idx = 1; idx <= expo; idx++)
        ans = ans * 2 % 998244353;
    return ans;
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));