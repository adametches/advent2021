function solutionPart1(inputData) {
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
    var wimmerWinner = [];
    var boards = chunkArray(gameBoard, 25);
    numbers.forEach(calledNumber => {
        var i = 0;
        while (i < boards.length) {
            board = boards[i];
            board = board.map(x => {
                if (x == calledNumber) return 'X'
                else return x
            })

            const rows = chunkArray(board, 5);
            const columns = transpose(rows);

            columns.forEach(column => {
                if (column.filter(x => x == 'X').length == 5) {
                    cardValue = board.filter(x => x != "X").reduce((a, b) => a + b) * calledNumber;
                    wimmerWinner.push(cardValue)
                    boards.splice(i, 1)

                }
            });

            rows.forEach(row => {
                if (row.filter(x => x == 'X').length == 5) {
                    cardValue = board.filter(x => x != "X").reduce((a, b) => a + b) * calledNumber;
                    wimmerWinner.push(cardValue)
                    boards.splice(i, 1)
                }
            });
            i++;
        }
        //);


    })

    return wimmerWinner[0];
}

function solutionPart2(inputData) {
    const dataArray = inputData.split('\n')
    return "part2";
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