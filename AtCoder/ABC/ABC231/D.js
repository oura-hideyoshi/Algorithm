'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

class UnionFind {
    constructor(N) {
        this.par = [...Array(N).keys()].slice(0);
        this.size = Array(N).fill(1);
    }

    root(x) {
        return this.par[x] == x ? x : this.par[x] = this.root(this.par[x]);
    }

    unite(x, y) {
        let rx = this.root(x);
        let ry = this.root(y);
        if (rx == ry) return;
        if (this.size[rx] < this.size[ry]) {
            this.par[rx] = ry;
            this.size[ry] += this.size[rx];
        } else {
            this.par[ry] = rx;
            this.size[rx] += this.size[ry];
        }
    }

    isSame(x, y) {
        let rx = this.root(x);
        let ry = this.root(y);
        return rx == ry;
    }
}

function main() {
    const [N, M] = getLine();
    const stricts = getLines(M);

    // 木をつくる
    // 最終的な木において、すべての部分木が閉路でないこと
    // 全てのノードの接続数が2以下であること
    let flag = true;
    let uf = new UnionFind(N + 1);
    let connections = Array(N + 1).fill(0);
    for (const strict of stricts) {
        if (uf.root(strict[0]) == uf.root(strict[1]))
            flag = false;
        uf.unite(strict[0], strict[1]);
        connections[strict[0]]++;
        connections[strict[1]]++;
        if (connections[strict[0]] > 2 ||
            connections[strict[1]] > 2)
            flag = false;
    }

    return flag ? "Yes" : "No";

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));