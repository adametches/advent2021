function solutionPart1(inputData) {

    inputData = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`


    const dataArray = inputData.split('\n')
    let polymerTemplate = dataArray[0].split('')
    const rules = new Map(dataArray.slice(2).map(x => x.split(" -> ")))
    let newPoly = polymerTemplate;
    let stpPoly = ''
    for (let step = 1; step < 5; step++) {

        console.log(newPoly)
        for (let i = 0; i < newPoly.length - 1; i++) {
            polyPair = polymerTemplate[i] + rules.get(polymerTemplate[i] + polymerTemplate[i + 1]) + polymerTemplate[i + 1]
            stpPoly = stpPoly + polyPair

        }
        newPoly = stpPoly.split('')
        console.log(stpPoly)
        //polymerTemplate = newPoly.split('')
    }

    return "part1";
}
function solutionPart2(inputData) {
    inputData = `One
Two
Three`
    const dataArray = inputData.split('\n')
    return "part2";
}

function print2dArray(array) {
    array.forEach(rwo => {
        let printrwo = '['
        rwo.forEach(cell => {

            printrwo += cell + ']['
        });
        printrwo = printrwo.substring(0, printrwo.length - 1);
        console.log(printrwo)

    });

}

console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);
