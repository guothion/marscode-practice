function solution(nodes, decorations, tree) {
    // Please write your code here
    return -2;
  }
  
  function main() {
    //  You can add more test cases here
    const testTree1 = [[1,0,0,0,2,3],[1,7],[3,7],[2,1],[3,5],[5,6],[6,4]];
    const testTree2 = [[1,0,1,0,2],[1,2],[1,5],[2,4],[3,5]];
  
    console.log(solution(7, 3, testTree1) === 3);
    console.log(solution(5, 2, testTree2) === 0);
  }
  
  main();