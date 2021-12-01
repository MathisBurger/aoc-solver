import { useState } from "react";

const Year2021Day1 = () => {

    const [lines, setLines] = useState<string[]>([]);

    const solvePart1 = () => {
        let counter = 0;
        for (let i=1; i<lines.length; i++) {
            if (parseInt(lines[i], 10) > parseInt(lines[i-1], 10)) {
                counter += 1;
            }
        }
        return counter;
    };

    const solvePart2 = () => {
        let count = 0;
        let triples: any[] = [];
        let lastLine: string;
        
        lines.forEach((line, index) => {
            if(parseInt(lines[index+1]) && parseInt(lines[index+2])) {
                triples.push(parseInt(line) + parseInt(lines[index+1]) + parseInt(lines[index+2]));
            }
        });
        triples.forEach((triple) => {
            if(lastLine && parseInt(lastLine) < parseInt(triple)) {
                count++;
            }
            lastLine = triple;
        });
        return count;
    }

    return (
        <div></div>
    )
}

export default Year2021Day1;