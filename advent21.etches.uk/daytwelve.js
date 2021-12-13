
function solutionPart1(inputData) {
    const graph = {};
    inputData.split('\n').map(x => {
        const [from, to] = x.trim().split("-")
        if (!graph[from]) {
            graph[from] = [];
        }
        if (!graph[to]) {
            graph[to] = [];
        }
        graph[from].push(to);
        graph[to].push(from);

    });
    const paths = [];
    part1DepthFirstSearch(graph, 'start', [], paths)
    return (paths.length);
}
function solutionPart2(inputData) {
    const graph = {};
    inputData.split('\n').map(x => {
        const [from, to] = x.trim().split("-")
        if (!graph[from]) {
            graph[from] = [];
        }
        if (!graph[to]) {
            graph[to] = [];
        }
        graph[from].push(to);
        graph[to].push(from);

    });
    const paths = [];
    part2DepthFirstSearch(graph, 'start', [], false, paths)
    return (paths.length);
}
function isSmallCave(string) {
    return /[a-z]/.test(string)
}
function part1DepthFirstSearch(graph, node, visited, paths) {
    visited.push(node)
    if (node === 'end') {
        paths.push(visited.join`,`);
        return;
    }
    for (const neighbour of graph[node]) {
        if (isSmallCave(neighbour) && visited.includes(neighbour)) {
            continue;
        }
        part1DepthFirstSearch(graph, neighbour, [...visited], paths);
    }
}
function part2DepthFirstSearch(graph, node, visited, visitedTwice, paths) {
    visited.push(node)
    if (node === 'end') {
        paths.push(visited.join`,`);
        return;
    }
    for (const neighbour of graph[node]) {
        if (neighbour === 'start') {
            continue
        }
        if (isSmallCave(neighbour) && visited.includes(neighbour)) {
            if (visitedTwice) {
                continue;
            }
            if (visited.filter(x => x === neighbour).length >= 2) {
                continue;
            }
            part2DepthFirstSearch(graph, neighbour, [...visited], true, paths);
        }
        else {
            part2DepthFirstSearch(graph, neighbour, [...visited], visitedTwice, paths);
        }
    }
}


console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);
