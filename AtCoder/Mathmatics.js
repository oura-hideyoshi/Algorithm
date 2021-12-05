const gcd = (x, y) => {
    return (x % y) ? gcd(y, x % y) : y;
}

const range = (start, end) => [...Array(end).keys()].slice(start);