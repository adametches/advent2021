function solutionPart1(inputData) {
    const dataArray = inputData.split('\n')
    const lines = []
    dataArray.forEach(element => {
     
        var [start,end] = element.split(" -> ");
        var [x1,y1] = start.split(",");
        var [x2,y2] = end.split(",");
        const line = {x1:parseInt(x1),y1:parseInt(y1),x2:parseInt(x2),y2:parseInt(y2)}
        lines.push(line)
  
    });

    //const grid = {coords: Array.from(Array(1000), () => new Array(1000).fill(0))}
    const grid = {coords: Array.from(Array(10), () => new Array(10).fill(0))}
    intersectCount = 0;
    lines.forEach(line => {
        if(line.x1 == line.x2 ){
            if (line.y1 < line.y2) {var yMin = line.y1; var yMax = line.y2}
            else {yMin = line.y2, yMax = line.y1}
            for (let index = yMin; index <= yMax; index++) {              
                grid.coords[index][line.x1] += 1
                if (grid.coords[index][line.x1] > 1) intersectCount += 1
                
            }

        }
        if(line.y1 == line.y2){
            if (line.x1 < line.x2) {var xMin = line.x1; xMax = line.x2}
            else {var xMin = line.x2; var xMax = line.x1}
            for (let index = xMin; index <= xMax; index++) {              
                grid.coords[line.y1][index] += 1
                if (grid.coords[line.y1][index] > 1) intersectCount += 1
               
            }
        }
        
    });

    var newCount = 0;
    for (let i = 0; i < grid.coords.length; i++) { 
        for (let j = 0; j < grid.coords.length; j++) { 
            if (grid.coords[i][j] > 1) newCount += 1
        }
    }

    return intersectCount;   
}
function solutionPart2(inputData) {
    const dataArray = inputData.split('\n')
    return "part2";   
}