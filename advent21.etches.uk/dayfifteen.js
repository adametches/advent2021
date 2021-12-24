function solutionPart1(inputData) {

    const dataArray = inputData.split('\n').map(row => row.trim().split('').map(Number))
    let result = minPathSum(dataArray) - dataArray[0][0];
    return result;
}
function solutionPart2(inputData) {
    const dataArray = inputData.split('\n').map(row => row.trim().split('').map(Number))
    let caveMap = []
    for (let i = 0; i < 5; i++) {

        let tile = dataArray.map(a => a.map(c => c + i).map(d => { if (d > 9) return d - 9; else return d }))
        caveMap = caveMap.concat(tile)


    }

    for (let i = 0; i < caveMap.length; i++) {
        let start = caveMap[i]
        for (let j = 1; j < 5; j++) {
            tile = start.map(c => c + j).map(d => { if (d > 9) return d - 9; else return d })
            caveMap[i] = caveMap[i].concat(tile)
        }

    }

    let result = mapPart2(caveMap);


    return result;
}
function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0)
                continue;
            if (i == 0) {
                grid[i][j] += grid[i][j - 1];
            } else if (j == 0) {
                grid[i][j] += grid[i - 1][j];
            } else {
                grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
            }
        }
    }
    return grid[m - 1][n - 1];
};

function minPathSum2(map){

    let lowestTotalRisk = Math.min(
        Array.from({ length: map.length }).reduce((total, _, i) => total + map[0][i] + map[i][map.length - 1], 0),
        Array.from({ length: map.length }).reduce((total, _, i) => total + map[i][0] + map[map.length - 1][i], 0)
      );
    
      const distances = Array
        .from({ length: map.length })
        .map(() => Array
          .from({ length: map.length })
          .map(() => Infinity));
    
      const path = (cost, [px, py]) => {
        if (cost >= distances[py][px]) {
          return;
        }
    
        if (px === map.length - 1 && py === map.length - 1) {
          if (cost < lowestTotalRisk) {
            lowestTotalRisk = cost;
          }
        }
    
        distances[py][px] = cost;
    
        const neighbors = [
          [px + 1, py], // right
          [px - 1, py], // left
          [px, py + 1], // down
          [px, py - 1], // up
        ];
    
        for (const [nx, ny] of neighbors) {
          // out of bounds
          if (nx < 0 || nx >= map.length || ny < 0 || ny >= map.length) {
            continue;
          }
    
          // cost too high
          if (cost + map[ny][nx] >= lowestTotalRisk) {
            continue;
          }
    
          path(cost + map[ny][nx], [nx, ny]);
        }
      };
    
      path(0, [0, 0]);
    
      return lowestTotalRisk;


}

function print2dArray(array) {
    array.forEach(rwo => {
        let printrwo = ''
        rwo.forEach(cell => {

            printrwo += cell
        });

        console.log(printrwo)

    });

}

console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);
