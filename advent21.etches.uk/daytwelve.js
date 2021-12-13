function solutionPart1(inputData) {

    inputData = `start-A
A-B
A-end`


    const dataArray = inputData.split('\n').map(row => row.split('-'))
    const starts = dataArray.map(x => x[0])
    const ends = dataArray.map(x => x[1])
    var nodes = starts.concat(ends).filter((v, i, a) => a.indexOf(v) === i);
    var g = new Graph(dataArray.length);
    for (let i = 0; i < nodes.length; i++) {
        g.addNode(nodes[i]);
    }
    for (let i = 0; i < dataArray.length; i++) {
        g.addEdge(dataArray[i][0], dataArray[i][1]);
    }
    g.printGraph()
    let paths = g.countPaths('start','end')
    return paths;
}
function solutionPart2(inputData) {
    inputData = `One
Two
Three`
    const dataArray = inputData.split('\n')
    return "part2";
}

class Graph {
    constructor(numberOfEdges) {
        this.numberOfEdges = numberOfEdges;
        this.AdjList = new Map();
    }

    addNode(n) {
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(n, []);
    }
    addEdge(n1, n2) {
        this.AdjList.get(n1).push(n2);
        this.AdjList.get(n2).push(n1);
    }

    countPaths(start, end) {
        let visited = []
        this.paths(start,end)
    }
    paths(s,e,route=[]){
        if (s===e){
            route.push(e)
            console.log(route)
            return;
        }
        let path = this.AdjList.get(s).filter(x=>x!='start')
        route.push(s)
        for (let i=0;i<path.length;i++){
            
            if (route.filter(x=>x===path[i]).length < this.AdjList.get(s).length)
            {
            this.paths(path[i],e,route)
            }
        }

    }

    printGraph() {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";
            for (var j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }

    // Main DFS method
    dfs(startingNode) {

        var visited = {};

        this.DFSUtil(startingNode, visited);
    }

    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);
        
        var get_neighbours = this.AdjList.get(vert);

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }






}


console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);
