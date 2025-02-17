//--Graph class
class Graph {
  adjacencyList: { [key: string]: string[] };
  constructor() {
    this.adjacencyList = {};
  }

  //--Add Vertex method.
  addVertex(vtx: string): boolean {
    //--Check for existing vetex
    if (!this.adjacencyList[vtx]) {
      // Add new vertex
      this.adjacencyList[vtx] = [];
      return true;
    }
    // Vertex Already Exists.
    return false;
  }

  // Connection
  addEdge(vtx1: string, vtx2: string): boolean {
    // Check if both vertices exist in the adjacency list
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      // Add an edge from vtx1 to vtx2
      this.adjacencyList[vtx1].push(vtx2);
      // Add an edge from vtx2 to vtx1 (for an undirected graph)
      this.adjacencyList[vtx2].push(vtx1);
      return true; // Return true indicating the edge was added
    } else {
      return false; // Return false indicating the edge could not be added
    }
  }

  // remove the connection
  removeEdge(vtx1: string, vtx2: string): boolean {
    // Check if both vertices exist in the adjacency list
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      // Remove vtx2 from the adjacency list of vtx1
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
        (value) => value !== vtx2
      );
      // Remove vtx1 from the adjacency list of vtx2
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (value) => value !== vtx1
      );
      return true; // Return true if the edge was successfully removed
    } else {
      return false; // Return false if either vertex does not exist
    }
  }

  // remove vertex
  removeVertex(vtx: string) {
    // Check if the vertex exists in the adjacency list
    if (!this.adjacencyList[vtx]) return undefined;

    // Iterate over the neighbours of the vertex to be removed
    for (let neighbour of this.adjacencyList[vtx]) {
        // Remove the vertex from the adjacency list of each neighbour
        this.adjacencyList[neighbour] = this.adjacencyList[neighbour].filter(
            (v) => v !== vtx // Keep only those values in the adjacency list of the neighbour that are not equal to the vertex to be removed
        );
    }
    // Delete the vertex from the adjacency list
    delete this.adjacencyList[vtx];
    // Return the updated graph
    return this;
}

}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "D");
g.addEdge("C", "D");

// console.log(g);

// g.removeEdge("A", "C");
g.removeVertex("D")
console.log(g);
