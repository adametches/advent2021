
function solutionPart1(inputData) {
    const dataArray = inputData.split('\n')
    let polymerTemplate = dataArray[0].split('')
    const rules = new Map(dataArray.slice(2).map(x => x.split(" -> ")))
    let newPoly = [];
    for (let step = 1; step < 11; step++) {
        for (let i = 0; i < polymerTemplate.length - 1; i++) {
            newP = rules.get(polymerTemplate[i] + polymerTemplate[i + 1])
            newPoly.push(polymerTemplate[i])
            newPoly.push(newP)
        }
        newPoly.push(polymerTemplate[polymerTemplate.length - 1])
        polymerTemplate = [...newPoly]
        newPoly = [];
    }
    let letters = []
    for (const letter of ['S', 'H', 'B', 'N', 'F', 'C', 'K', 'O', 'V']) {
        letters.push({ [letter]: letter, length: polymerTemplate.filter(x => x === letter).length })
    }
    letters.sort((a, b) => b.length - a.length)
    let val = letters[0].length - letters[letters.length - 1].length
    return val;
}

function solutionPart2(inputData) {
    const dataArray = inputData.split('\n')
    let polymerTemplate = dataArray[0].split('')
    const ruleMap = new Map();
    for (const rule of dataArray.slice(2).map(x => x.split(" -> "))) {
        ruleMap.set(rule[0],[rule[0][0] + rule[1] ,rule[1] + rule[0][1]] )
        
    }
    let pairCounts = new Map();
    for (let i = 0; i < polymerTemplate.length - 1; i++) {
        const pair = polymerTemplate[i] + polymerTemplate[i+1]
        addToMap(pairCounts,pair)
    }
    const lastChar = polymerTemplate[polymerTemplate.length-1]  
    for (let step = 0; step < 40; step++) {
        let current = new Map()
        const keys = pairCounts.keys()
        for (const key of keys) {
            const next = ruleMap.get(key)
            addToMap(current, next[0], pairCounts.get(key))
            addToMap(current, next[1], pairCounts.get(key))
        }
        pairCounts = current;
    }
    const elementCount = new Map();
    addToMap(elementCount, lastChar)
    const keys = pairCounts.keys()
    for (const key of keys) {
        addToMap(elementCount, key[0],pairCounts.get(key))      
    }
    const values = [...elementCount.values()]
    const min = Math.min(...values)
    const max = Math.max(...values)
    return max-min;
}

function addToMap(map, pair, val = 1) {
    if (!map.has(pair)){
        map.set(pair,0);
    }
    map.set(pair,map.get(pair)+val)
}


console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);
