function solutionPart1(inputData) {
    const dataArray = inputData.split('\n').map(x => x.split('').map(Number))
    const riskLevel = []
    for (i = 0; i < dataArray.length; i++) {
        const row = dataArray[i];
        for (j = 0; j < row.length; j++) {
            const point = row[j];
            const adjacent = findAdjacent(dataArray, row, i, j)
            if (adjacent.filter(x => x <= point).length === 0) riskLevel.push(point + 1)
        }
    }
    return riskLevel.reduce((a, b) => a + b, 0);
}

function solutionPart2(inputData) {
    const dataArray = inputData.split('\n').map((row) => row.split('').map((point) => +point < 9));
    const basins = [];

    for (let y = 0; y < dataArray.length; y++) {
        const row = dataArray[y];
        for (let x = 0; x < row.length; x++) {
            if (!dataArray[y][x]) continue;
            const points = [];
            let size = 0;
            points.push([x, y]);

            while (points.length) {
                const [x, y] = points.pop();
                if (!dataArray[y][x]) continue;
                size++;
                dataArray[y][x] = false;
                if (x - 1 >= 0 && dataArray[y][x - 1]) points.push([x - 1, y])
                if (x + 1 < dataArray[y].length && dataArray[y][x + 1]) points.push([x + 1, y]);
                if (y - 1 >= 0 && dataArray[y - 1][x]) points.push([x, y - 1]);
                if (y + 1 < dataArray.length && dataArray[y + 1][x]) points.push([x, y + 1]);
            }

            basins.push(size);
        }
    }

    return basins.sort((a, b) => b - a).slice(0, 3).reduce((total, basin) => total * basin, 1);
}

function findAdjacent(outerArray, innerArray, i, j) {
    if (outerArray[i - 1] == undefined) {
        return [innerArray[j - 1], innerArray[j + 1], outerArray[i + 1][j]]
    }
    else if (outerArray[i + 1] == undefined) {
        return [innerArray[j - 1], innerArray[j + 1], outerArray[i - 1][j]]
    }
    else {
        return [innerArray[j - 1], innerArray[j + 1], outerArray[i + 1][j], outerArray[i - 1][j]]
    }

}