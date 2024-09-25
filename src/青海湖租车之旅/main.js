function solution(distance, n, gasStations) {
    // Please write your code here
    return -1;
  }
  
  function main() {
    // You can add more test cases here
    const gasStations1 = [
      [100, 1],
      [200, 30],
      [400, 40],
      [300, 20],
    ];
    const gasStations2 = [
      [100, 999],
      [150, 888],
      [200, 777],
      [300, 999],
      [400, 1009],
      [450, 1019],
      [500, 1399],
    ];
    const gasStations3 = [[101], [100, 100], [102, 1]];
    const gasStations4 = [
      [34, 1],
      [105, 9],
      [9, 10],
      [134, 66],
      [215, 90],
      [999, 1999],
      [49, 0],
      [10, 1999],
      [200, 2],
      [300, 500],
      [12, 34],
      [1, 23],
      [46, 20],
      [80, 12],
      [1, 1999],
      [90, 33],
      [101, 23],
      [34, 88],
      [103, 0],
      [1, 1],
    ];
  
    console.log(solution(500, 4, gasStations1) === 4300);
    console.log(solution(500, 7, gasStations2) === 410700);
    console.log(solution(500, 3, gasStations3) === "Impossible");
    console.log(solution(100, 20, gasStations4) === 0);
    console.log(solution(100, 0, []) === "Impossible");
  }
  
  main();