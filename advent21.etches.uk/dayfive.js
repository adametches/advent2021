function solutionPart1(inputData) {
    const dataArray = inputData.split('\n')
    lines = createLines(dataArray)
    const grid = { coords: Array.from(Array(1000), () => new Array(1000).fill(0)) }
    lines.forEach(line => {
        if (line.x1 == line.x2) {
            if (line.y1 < line.y2) { var yMin = line.y1; var yMax = line.y2 }
            else { yMin = line.y2, yMax = line.y1 }
            for (let index = yMin; index <= yMax; index++) {
                grid.coords[index][line.x1] += 1
            }
        }
        if (line.y1 == line.y2) {
            if (line.x1 < line.x2) { var xMin = line.x1; xMax = line.x2 }
            else { var xMin = line.x2; var xMax = line.x1 }
            for (let index = xMin; index <= xMax; index++) {
                grid.coords[line.y1][index] += 1
            }
        }
    });
    intersectCount = countIntesections(grid)
    return intersectCount;
}
function solutionPart2(inputData) {   
    const dataArray = inputData.split('\n')
    lines = createLines(dataArray)
    const grid = {coords: Array.from(Array(1000), () => new Array(1000).fill(0))}
    lines.forEach(line => {
        if (line.x1 == line.x2) {
            var [yMin, yMax] = minMax(line.y1, line.y2);
            for (let index = yMin; index <= yMax; index++) {
                grid.coords[index][line.x1] += 1
            }
        }
        else if (line.y1 == line.y2) {
            var [xMin, xMax] = minMax(line.x1, line.x2);
            for (let index = xMin; index <= xMax; index++) {
                grid.coords[line.y1][index] += 1
            }
        }
        else if (Math.abs(line.y1 - line.y2) && Math.abs(line.x1 - line.x2)) {
            var [xMin, xMax] = minMax(line.x1, line.x2);
            if (line.y1 < line.y2) var yincm = 1
            else var yincm = -1
            if (line.x1 < line.x2) var xincm = 1
            else var xincm = -1
            for (i=0; i <= xMax-xMin;i++)
            {
                var yinc = i * yincm;
                var xinc = i * xincm;
                grid.coords[line.y1 + yinc][line.x1 + xinc] += 1
            }
        }
    });
    intersectCount = countIntesections(grid)
    return intersectCount;
}
function minMax(n1, n2) {
    if (n1 < n2) { var min = n1; var max = n2 }
    else { min = n2, max = n1 }
    return [min, max]
}
function createLines(dataArray) {
    const lines = []
    dataArray.forEach(element => {
        var [start, end] = element.split(" -> ");
        var [x1, y1] = start.split(",");
        var [x2, y2] = end.split(",");
        const line = { x1: parseInt(x1), y1: parseInt(y1), x2: parseInt(x2), y2: parseInt(y2) }
        lines.push(line)

    });
    return lines;
}
function countIntesections(grid) {
    var intersectCount = 0;
    for (let i = 0; i < grid.coords.length; i++) {
        for (let j = 0; j < grid.coords.length; j++) {
            if (grid.coords[i][j] > 1) intersectCount += 1
        }
    }
    return intersectCount
}