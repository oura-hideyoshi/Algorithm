const gcd = (x, y) => {
    return (x % y) ? gcd(y, x % y) : y;
}

const range = (start, end) => [...Array(end).keys()].slice(start);

const distance = (x1, x2, y1, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

// sum
let total = [1, 2, 3].reduce((sum, e) => sum + e, 0);