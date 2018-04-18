var bf=require('../src/brainfucker.js');

let x=bf.run('+++![>+<-]>!',null,true);
console.log(x.out);
