function solutionPart1(inputData) {
     
    inputData = `2199943210
3987894921
9856789892
8767896789
9899965678`

    const dataArray = inputData.split('\n').map(x => x.split('').map(Number))
    const riskLevel =  []
    for (i= 0; i < dataArray.length; i++) {
        const row = dataArray[i];
        for (j= 0; j < row.length; j++) {
            console.log(i,",",j)
            const point = row[j];
            let adjacent = [];
            if (dataArray[i-1] == undefined){
                adjacent = [row[j-1],row[j+1],dataArray[i+1][j]]
            }
            else if (dataArray[i+1] == undefined){
                adjacent = [row[j-1],row[j+1],dataArray[i-1][j]]
            }
            else{
                adjacent = [row[j-1],row[j+1],dataArray[i+1][j],dataArray[i-1][j]]
            }
            if (adjacent.filter(x=>x<=point).length ===0){
                console.log("lowpoint = ",i,",",j)
                riskLevel.push(point +1)
            }
           
        }
        
    }
    
    return riskLevel.reduce((a, b) => a + b, 0);   
}
function solutionPart2(inputData) {
    const dataArray = inputData.split('\n')
    return "part2";   
}