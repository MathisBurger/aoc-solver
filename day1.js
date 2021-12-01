const fs = require('fs');

const content = fs.readFileSync("./input.txt", "utf-8");
const split = content.split("\r\n");

function part1() {
    let counter = 0;
    for (let i=1; i<split.length; i++) {
        if (parseInt(split[i], 10) > parseInt(split[i-1], 10)) {
            counter += 1;
        }
    }
    console.log("part1:",counter);
}

function part2() {
    let count = 0;
let triples = [];
let lastLine;

split.forEach((line, index) => {
    if(parseInt(split[index+1]) && parseInt(split[index+2])) {
        triples.push(parseInt(line) + parseInt(split[index+1]) + parseInt(split[index+2]));
    }
})

triples.forEach((triple) => {
    if(lastLine && parseInt(lastLine) < parseInt(triple)) {
        count++;
    }
    lastLine = triple;
})

console.log(count)
}
part2();
