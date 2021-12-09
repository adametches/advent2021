function solutionPart1(inputData) {
    /*    
       inputData = `2199943210
   3987894921
   9856789892
   8767896789
   9899965678`
   */
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
    /*    
    inputData = `2199943210
3987894921
9856789892
8767896789
9899965678`
*/
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