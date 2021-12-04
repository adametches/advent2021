function solutionPart1(inputData, all) {
    const dataArray = inputData.split('\n')
    var numbers = dataArray[0].split(",").map(Number);
    dataArray.splice(0, 1);
    gameBoard = []
    boards = dataArray.filter(x => x != "").map(x => x.split(/\s+/g))
    boards.forEach(row => {
        row = row.filter(x => x != "")
        gameBoard.push(...row)
    });
    gameBoard = gameBoard.map(Number)
    var winnerWinner = [];
    var boards = chunkArray(gameBoard, 25);
    numbers.forEach(calledNumber => {
        var i = 0;
        if (calledNumber == 49) {
            console.log(98);
        }
        while (i < boards.length) {
            boards[i] = boards[i].map(x => {
                if (x == calledNumber) return 'X'
                else return x
            })
            var res = playBingo(boards[i], calledNumber)
            if (res != false) {
                winnerWinner.push(res)
                boards.splice(i, 1)
                continue;
            }
            i++;
        }
    })
    if (all) return winnerWinner
    else return winnerWinner[0]
}
function solutionPart2(inputData) {
    winner = solutionPart1(inputData, true)
    return winner.pop();
}
function playBingo(board, calledNumber) {
    const rows = chunkArray(board, 5);
    const columns = transpose(rows);
    returnValue = false;
    rows.forEach(row => {
        if (row.filter(x => x == 'X').length == 5 && returnValue == false) {
            returnValue = board.filter(x => x != "X").reduce((a, b) => a + b) * calledNumber;
        }
    });
    columns.forEach(col => {
        if (col.filter(x => x == 'X').length == 5 && returnValue == false) {
            returnValue = board.filter(x => x != "X").reduce((a, b) => a + b) * calledNumber;
        }
    });
    return returnValue

}
function chunkArray(array, size) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
}
function transpose(matrix) {
    return matrix.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), []);
}