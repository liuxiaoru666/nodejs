const fs = require('fs');



//同步模式
// let res = fs.readFileSync('test.js');
// console.log(res.toString());
// console.log("程序执行结束!");

//异步模式，非阻塞
//异步依赖于回调，但不是使用回调就是异步
fs.readFile('test.js',function(err,data){
if(err) return console.error(err);
console.log(data.toString());
})
console.log('执行程序结束')


//打开文件
fs.open('test.js', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
   console.log("文件打开成功！");     
 });

 //写入文件
 fs.writeFile('test.js','//我是通 过fs.writeFile 写入文件的内容',function(err){
    if(err) return console.log(err);

    console.log('写入文件成功')
 })

 //读取文件信息
 fs.stat('test.js', function (err, stats) {
    console.log(stats.isFile());         //true
})