function solution(row_n, column_m, seats, patient) {
    // Please write your code here
    return -2;
  }
  
  function main() {
    //  You can add more test cases here
    const testSeats1 = [[0,1,1,1],[1,0,1,0],[1,1,1,1],[0,0,0,1]];
    const testSeats2 = [[0,1,1,1],[1,0,1,0],[1,1,1,1],[0,0,0,1]];
    const testSeats3 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    const testSeats4 = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];
    const testSeats5 = [[1]];
  
    console.log(solution(4, 4, testSeats1, [2, 2]) === 6);
    console.log(solution(4, 4, testSeats2, [2, 5]) === 0);
    console.log(solution(4, 4, testSeats3, [2, 2]) === 4);
    console.log(solution(4, 4, testSeats4, [2, 2]) === 6);
    console.log(solution(1, 1, testSeats5, [0, 0]) === 0);
  }
  
  main();