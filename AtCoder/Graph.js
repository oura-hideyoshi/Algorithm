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

var UF = new UnionFind(10);
UF.unite(1, 2);
UF.unite(2, 3);
UF.unite(3, 4);
UF.unite(4, 5);
console.log(UF.root(1));
console.log(...UF.par)
