function solutionPart1(inputData) {
    const dataArray = inputData.split('\n').map(bits => [...bits])
    var onecount = 0, zerocount = 0;
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
function solutionPart2_old(inputData) {
    const dataArray = inputData.split('\n').map(bits => [...bits])
    var oxygenArray = inputData.split('\n').map(bits => [...bits])
    var co2Array = inputData.split('\n').map(bits => [...bits])
    var onecount = 0, zerocount = 0;

    tDataArray = transpose(dataArray);
    //tDataArray.forEach((element, index, array) => { 
    var index =0;
    while (index >= 0){
        if (index > tDataArray.length){
            break;
        }
        element = tDataArray[index]
        zerocount = element.filter(x => x === '0').length
        onecount = element.filter(x => x === '1').length
        var outerIndex = index;
        if (oxygenArray.length > 1) {
            if (zerocount > onecount) {
                oxygenArray = oxygenArray.filter(element => element[outerIndex] == '0');
                tDataArray = tDataArray.filter(el => el[index] === '0')
            }
            else if (zerocount <= onecount) {
                oxygenArray = oxygenArray.filter(element => element[outerIndex] == '1');
                tDataArray = tDataArray.filter(el => el[index] === '1')
            }
           
        }
        index += 1;
        
    }
    tDataArray.forEach((element, index) => {
        zerocount = element.filter(x => x === '0').length
        onecount = element.filter(x => x === '1').length
        var outerIndex = index;
        if (co2Array.length > 1) {
            if (zerocount <= onecount) {
                co2Array = co2Array.filter(element => element[outerIndex] == '0');
            }
            else if (zerocount > onecount) {
                co2Array = co2Array.filter(element => element[outerIndex] == '1');
            }
        }
    
    });

    
    return parseInt(oxygenArray.toString().replaceAll(',',''), 2) * parseInt(co2Array.toString().replaceAll(',',''), 2);
}

function transpose(matrix) {
    return matrix.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), []);
}