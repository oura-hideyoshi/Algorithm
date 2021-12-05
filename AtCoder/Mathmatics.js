const gcd = (x, y) => {
    return (x % y) ? gcd(y, x % y) : y;
}

const range = (start, end) => [...Array(end).keys()].slice(start);

// sum
let total = [1, 2, 3].reduce((sum, e) => sum + e, 0);