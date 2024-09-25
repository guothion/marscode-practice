function solution(expression) {
    // Please write your code here
    return -2;
  }
  
  function main() {
    // You can add more test cases here
    console.log(solution("1+1") === 2);
    console.log(solution("3+4*5/(3+2)") === 7);
    console.log(solution("4+2*5-2/1") === 12);
    console.log(solution("(1+(4+5+2)-3)+(6+8)") === 23);
  }
  
  main();