function solution(num, data) {
    // Please write your code here
    let state = [],lastState=0,res=[]; 
    let statusArr = [];
    for(let i = 0; i < num; i++) {
        let c = data.charAt(i);
        // -1:左倾 0:直立 1:右倾
        if(c == 'L') {
            statusArr.push(-1)
        } else if(c == 'R') {
            statusArr.push(1)
        } else {
            statusArr.push(0);
        }
    }

    for(let j = 0; j < statusArr.length;j++) {
        let cc = statusArr[j];
        if(cc == 0) {
            state.push(cc);
        }
        if(cc == -1) {
            if(lastState == 1 && (state.length%2)==1) {
                res.push(j-Math.floor(state.length/2))
            } 
            state = []
            lastState = -1;
        }
        if(cc == 1) {
            state.map((item,index) => {
                res.push(j-index)
            });
            state = [];
            lastState = 1;
        }
    }
    if(lastState != 1 && state.length > 0) {
        state.map((item,index) => {
            res.push(statusArr.length - state.length+index+1);
        })
    }
    
    return res.length>0?res.length+':'+res.join(','):res.length+'';
  }
  

  
  function main() {
    //  You can add more test cases here
    console.log(solution(14, ".L.R...LR..L..") === "4:3,6,13,14");
    console.log(solution(5, "R....") === "0");
    console.log(solution(1, ".") === "1:1");
  }
  
  main();