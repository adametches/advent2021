function solutionPart1(inputData) {
    const dataArray = inputData.split('\n').map(bits => [...bits])
    var gammaRate = "", epsilonRate = "";
    tDataArray = transpose(dataArray);
    tDataArray.forEach(element => {
        zerocount = element.filter(x => x === '0').length
        onecount = element.filter(x => x === '1').length
        if (zerocount > onecount) {
            gammaRate = gammaRate + 0;
            epsilonRate = epsilonRate + 1
        }
        else {
            gammaRate = gammaRate + 1;
            epsilonRate = epsilonRate + 0
        }
    });
    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}
function solutionPart2(inputData) {
    var dataArray = inputData.split('\n').map(bits => [...bits])
    var oxygenArray = dataArray;
    var co2Array = dataArray;
    for (let i = 0; i < dataArray[0].length; i++) {
        colArray = getCol(oxygenArray, i);
        bits = countBits(colArray);
        if (bits.zeros <= bits.ones) oxygenArray = oxygenArray.filter(element => element[i] == '1');
        else oxygenArray = oxygenArray.filter(element => element[i] == '0');
        if (oxygenArray.length == 1) break;
    }
    for (let i = 0; i < dataArray[0].length; i++) {
        colArray = getCol(co2Array, i);
        bits = countBits(colArray);
        if (bits.zeros <= bits.ones) co2Array = co2Array.filter(element => element[i] == '0');
        else co2Array = co2Array.filter(element => element[i] == '1');
        if (co2Array.length == 1) break;
    }
    return parseInt(oxygenArray.toString().replaceAll(',', ''), 2) * parseInt(co2Array.toString().replaceAll(',', ''), 2);
}
function getCol(matrix, col) {
    var column = [];
    for (var i = 0; i < matrix.length; i++) { column.push(matrix[i][col]);}
    return column; 
}
function countBits(array) {
    var zeroCount = 0; oneCount = 0;
    array.forEach(element => {
        if (element == '0') zeroCount += 1
        else oneCount += 1
    });
    const bitCount = {
        ones: oneCount,
        zeros: zeroCount
    };
    return bitCount
}
function transpose(matrix) {
    return matrix.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), []);
}