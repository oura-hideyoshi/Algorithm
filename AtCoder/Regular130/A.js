function Main(input) {
    input = input.split("\n")[1].split("");
    input.push("#");
    var com = 1;
    var ans = 0;
    var l = "#";
    for (var i = 0; i < input.length; i++) {
        if (l == input[i]) {
            com++;
        } else {
            l = input[i];
            ans += com * (com - 1);
            com = 1;
        }
    }
    console.log(ans / 2);
} 

// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(require("fs").readFileSync("A.txt", "utf8").trim());


