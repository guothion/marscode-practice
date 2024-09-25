function solution(num, data) {
    // 首先创建一个数组来存储每个骨牌的状态
    let state = new Array(num).fill(0); 
    // 遍历输入的字符串，更新骨牌状态
    for (let i = 0; i < num; i++) {
      let c = data.charAt(i);
      if (c === 'L') {
        state[i] = -1;
      } else if (c === 'R') {
        state[i] = 1;
      }
    }
  
    // 从左到右遍历数组，计算每个位置左边被推的数量
    let leftPushes = new Array(num).fill(0); 
    for (let i = 1; i < num; i++) {
      if (state[i - 1] === -1) {
        leftPushes[i] = leftPushes[i - 1] + 1;
      } else {
        leftPushes[i] = leftPushes[i - 1];
      }
    }
  
    // 从右到左遍历数组，计算每个位置右边被推的数量
    let rightPushes = new Array(num).fill(0); 
    for (let i = num - 2; i >= 0; i--) {
      if (state[i + 1] === 1) {
        rightPushes[i] = rightPushes[i + 1] + 1;
      } else {
        rightPushes[i] = rightPushes[i + 1];
      }
    }
  
    // 比较左右被推的数量，确定保持竖立的骨牌
    let res = [];
    for (let i = 0; i < num; i++) {
      if (leftPushes[i] === rightPushes[i] && state[i] === 0) {
        res.push(i + 1);
      }
    }
  
    return res.length > 0? res.length + ':' + res.join(',') : res.length + '';
  }
  
  function main() {
    // 您可以在此添加更多测试用例
    console.log(solution(14, ".L.R...LR..L..") === "4:3,6,13,14");
    console.log(solution(5, "R....") === "0");
    console.log(solution(1, ".") === "1:1");
  }
  
  main();