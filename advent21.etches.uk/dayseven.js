function solutionPart1(inputData) {
     
    inputData = "16,1,2,0,4,2,7,1,2,14"
    const dataArray = inputData.split(',')
    var solution;
    var leastFuel ;

    dataArray.forEach(endposition => {
        fuel = 0;
        dataArray.forEach(crabposition => {
            fuel += Math.abs(crabposition - endposition)          
        });
        if (leastFuel == undefined || fuel < leastFuel){
            leastFuel = fuel
            solution = {endposition:endposition,leastFuel:leastFuel}
        }
    });
    console.log(solution)

    
    return solution.leastFuel;   
}
function solutionPart2(inputData) {
    inputData = `One
    Two
    Three`
    const dataArray = inputData.split('\n')
    return "part2";   
}