"use strict";
// var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
var input = require("fs").readFileSync("D.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

class UnionFind {
    constructor(N) {
        this.par = [...Array(N).keys()].slice(0);
    }

    root(x) {
        return this.par[x] == x ? x : this.par[x] = this.root(this.par[x]);
    }

    unite(x, y) {
        let rx = this.root(x);
        let ry = this.root(y);
        if (rx == ry) return;
        this.par[rx] = ry;
    }

    isSame(x, y) {
        let rx = this.root(x);
        let ry = this.root(y);
        return rx == ry;
    }
}

function main() {
    const N = Math.pow(2, 20);
    const [Q] = getLine();
    let A = Array(N).fill(-1);

    let UF = new UnionFind(N);
    for (let idx = 0; idx < Q; idx++) {
        let [t, x] = getLine();
        if (t == 1) {
            let h = x;
            while (true) {
                if (A[h % N] != -1) {
                    h = UF.root(h);
                }
                else {
                    UF.unite(h % N, (h + 1) % N);
                    A[h % N] = x;
                    break;
                }
            }
        }
        else {
            console.log(A[x % N]);
        }
    }

}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));