function solutionPart1(inputData) {
    const dataArray = inputData.split(',')
    var solution, leastFuel 
    dataArray.forEach(endposition => {
        fuel = 0;
        dataArray.forEach(crabposition => {fuel += Math.abs(crabposition - endposition)});
        if (leastFuel == undefined || fuel < leastFuel){
            leastFuel = fuel
            solution = {endposition:endposition,leastFuel:leastFuel}
        }
    });
    return solution.leastFuel;   
}
function solutionPart2(inputData) {
    const dataArray = inputData.split(',');
    maxEndPosition = Math.max(...dataArray);
    var solution, leastFuel ;
    for (endposition = 1; endposition <=maxEndPosition; endposition++) {
        fuel = 0;
        dataArray.forEach(crabposition => {
            var move = Math.abs(crabposition - endposition)  
            for (i = 1; i <= move; i++) {fuel += i;}        
        });
        if (leastFuel == undefined || fuel < leastFuel){
            leastFuel = fuel
            solution = {endposition:endposition,leastFuel:leastFuel}
        }
    }
    return solution.leastFuel;      
}
