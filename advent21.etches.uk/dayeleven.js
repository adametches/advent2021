function solutionPart1(inputData) {
    let dataArray = inputData.split('\n').map(row => row.split('').map((Number)))
    dataArray = dataArray.flat()
    let flashes = 0;
    for (step = 1; step < 100; step++) {
        const flashed = new Set();
        dataArray = dataArray.map(cell => cell + 1);
        const flashedPositions = dataArray.reduce((positions, cell, index) => {
            if (cell > 9) positions.push(index);
            return positions;
        }, []);

        while (flashedPositions.length > 0) {
            const flashIndex = flashedPositions.pop();

            if (flashed.has(flashIndex)) {
                continue;
            }
            flashed.add(flashIndex);

            const x = flashIndex % 10;
            const y = Math.floor(flashIndex / 10);

            addToAdjacent(dataArray,x,y,flashedPositions)

        }

        dataArray = dataArray.map((cell) => cell > 9 ? 0 : cell);

        flashes += flashed.size;
    }

    return flashes;
}
function solutionPart2(inputData) {

    let dataArray = inputData.split('\n').map(row => row.split('').map((Number)))
    dataArray = dataArray.flat()
    for (step = 1; step < 500; step++) {
        const flashed = new Set();
        dataArray = dataArray.map(cell => cell + 1);
        const flashedPositions = dataArray.reduce((positions, cell, index) => {
            if (cell > 9) positions.push(index);
            return positions;
        }, []);

        while (flashedPositions.length > 0) {
            const flashIndex = flashedPositions.pop();

            if (flashed.has(flashIndex)) {
                continue;
            }
            flashed.add(flashIndex);

            const x = flashIndex % 10;
            const y = Math.floor(flashIndex / 10);

            addToAdjacent(dataArray,x,y,flashedPositions)

        }

        dataArray = dataArray.map((cell) => cell > 9 ? 0 : cell);

        if (flashed.size === dataArray.length) {
            return step;
        }
    }

}


function addToAdjacent(array, initalx,initaly,flashedPositions ) {
    [
        [-1, -1], [0, -1], [1, -1],
        [-1, 0], /* current */[1, 0],
        [-1, 1], [0, 1], [1, 1],
    ].forEach(([dx, dy]) => {
        const x = initalx + dx;
        const y = initaly + dy;

        if (x >= 0 && x < 10 && y >= 0 && y < 10) {
            const index = y * 10 + x;
            array[index] += 1;
            if (array[index] > 9) {
                flashedPositions.push(index);
            }
        }
    });

}

function print2dArray(array) {
    console.log()
    array.forEach(rwo => {
        let printrwo = '['
        rwo.forEach(cell => {

            printrwo += cell + ']['
        });
        printrwo = printrwo.substring(0, printrwo.length - 1);
        console.log(printrwo)

    });

}
console.log(`Solution Part 1: ${solutionPart1()}`);
console.log(`Solution Part 2: ${solutionPart2()}`);

