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

// var UF = new UnionFind(10);
// UF.unite(1, 2);
// UF.unite(2, 3);
// UF.unite(3, 4);
// UF.unite(4, 5);
// console.log(UF.root(1));
// console.log(...UF.par)

class binary_heap {
    constructor() {
        this._data = [];
        this._size = 0;
    }

    enqueue(priority, value) {
        var data = this._data;
        var i = 0;
        var p = 0;
        var ret = null;

        if (this._size) {
            data.push({ p: priority, v: value });
            i = this._size;
            p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);   // parent
            while (p >= 0) {
                if (data[p].p < data[i].p) {
                    ret = data[i];
                    data[i] = data[p];
                    data[p] = ret;

                    i = p;
                    p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);
                } else {
                    break;
                }
            }
        } else {
            data.push({ p: priority, v: value });
        }
        this._size = this._size + 1;
    };
    dequeue() {
        var data = this._data;
        var size = this._size - 1;
        var result = null;
        var i = 0;
        var c1 = 1; // left child
        var c2 = 2; // right child
        var p0 = 0.0;
        var p1 = 0.0;
        var p2 = 0.0;
        var ret = null;

        if (this._size) {
            result = data[0].v;
            data[0] = data[size];
            data.pop();

            while (c1 < size) {
                if (c2 < size) {
                    p0 = data[i].p;
                    p1 = data[c1].p;
                    p2 = data[c2].p;

                    if ((p1 < p2) && (p0 < p2)) {
                        ret = data[i];
                        data[i] = data[c2];
                        data[c2] = ret;
                        i = c2;
                    } else if (p0 < p1) {
                        ret = data[i];
                        data[i] = data[c1];
                        data[c1] = ret;
                        i = c1;
                    } else {
                        break;
                    }
                    c1 = (i << 1) + 1;
                    c2 = (i << 1) + 2;
                } else {
                    p0 = data[i].p;
                    p1 = data[c1].p;

                    if (p0 < p1) {
                        ret = data[i];
                        data[i] = data[c1];
                        data[c1] = ret;
                    }
                    break;
                }
            }

            this._size = size;
            return result;
        } else {
            return (void 0);
        }
    };
    top() {
        return this._data[0].v;
    };
    size() {
        return this._size;
    };
}

var bh = new binary_heap();
var arr = [1, 5, 79, 5, 64, 1, 2, 5, 1, 3, 4, 8, 5, 8, 9, 2, 4, 5, 6, 52, 6, 58, 4];
for (let v of arr) {
    bh.enqueue(v, v)
}
for (let idx in arr) {
    let v = bh.dequeue();
    console.log(v);
    bh.enqueue(Math.floor(v / 2), Math.floor(v / 2))
}