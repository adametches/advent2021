
function solutionPart1(inputData, full = false) {

    const dataArray = inputData.split('\n').map(x=>x.trim())//.map(row => row.trim().split(','))
    const folds = dataArray.filter(x => x.startsWith("fold")).map(x => x.trim().replace('fold along ', ''))
    const dots = dataArray.filter(x => !x.startsWith("fold")).filter(x => x != '').map(row => row.trim().split(','))
    const maxY = dots.map(x => x[1]).map(Number).sort((a, b) => a - b).splice(-1)[0] + 1 
    const maxX = dots.map(x => x[0]).map(Number).sort((a, b) => a - b).splice(-1)[0] + 1 
    console.log(maxX, maxY)
    let grid = Array.from(Array(maxY), () => new Array(maxX).fill('--'))

    for (let i = 0; i < dots.length; i++) {
        [x, y] = dots[i]
        grid[y][x] = '\u2B1B'
    }
    let len = 1;
    if (full) len = folds.length
    for (let i = 0; i < len; i++) {
        
        grid = fold(folds[i], grid)
    }
    print2dArray(grid)
    let dotCount = grid.flat().filter(x => x === '#').length
    return dotCount;
}
function fold(foldString, grid) {
    [axis, place] = foldString.split("=")
    place = parseInt(place)
    if (axis == 'y') {
        first = grid.slice(0, place)
        last = grid.slice(place + 1)
        len = last.length - 1;
        for (i = Math.abs(first.length - last.length); i < last.length; i++) {
            row = first[i];
            for (j = 0; j < row.length; j++) {
                if (first[i][j] != '\u2B1B') {
                    first[i][j] = last[len - i][j]
                }
            }
        }
    }
    else {
        first = [];
        last = [];
        for (i = 0; i < grid.length; i++) {
            row = grid[i]
            first[i] = row.slice(0, place)
            last[i] = row.slice(place + 1)
        }
        for (i = 0; i < first.length; i++) {
            row = first[i];
            len = row.length - 1;
            for (j = 0; j < row.length; j++) {
                if (first[i][j] != '\u2B1B') {
                    first[i][j] = last[i][len - j]
                }

            }
        }
    }
    return first;
}
function solutionPart2(inputData) {
    solutionPart1(inputData, true)
}
function print2dArray(array) {
    array.forEach(rwo => {
        let printrwo = ' '
        rwo.forEach(cell => {

            printrwo += cell + '  '
        });
        printrwo = printrwo.substring(0, printrwo.length - 1);
        console.log(printrwo)

    });

}
console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);
