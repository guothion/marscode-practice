function solution(n, catsLevels) {
    // Please write your code here
    return -1;
  }
  
  function main() {
    // You can add more test cases here
    const catsLevels1 = [1, 2, 2];
    const catsLevels2 = [6, 5, 4, 3, 2, 16];
    const catsLevels3 = [1, 2, 2, 3, 3, 20, 1, 2, 3, 3, 2, 1, 5, 6, 6, 5, 5, 7, 7, 4];
    console.log(solution(3, catsLevels1) === 4);
    console.log(solution(6, catsLevels2) === 17);
    console.log(solution(20, catsLevels3) === 35);
  }
  
  main();