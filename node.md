
Node是一个可以让JavaScript运行在服务器端的平台，抛弃了传统平台依靠多线程来实现高并发的设计思路，而采用单线程、异步式I/O、事件驱动式的程序设计模型

## <label style="color:red">单线程、异步I/O,事件驱动</label>
node.js是单线程，node的API都提供回调函数，通过异步实现非阻塞，node.js在异步操作完成时，都会发送一个事件到事件队列，事件由EventEmitter对象提供
```JS
var fs = require("fs");

fs.readFile("test.txt", "utf-8", function(err, data) {
	console.log(data);
});

console.log("end");

//end
//data
```
## <label style="color:red">模块和包</label>
### 模块
```JS
//导出模块
exports.name = 'liuxiaoru';
//exports是module.exprorts的引用，相当于下面的写法
var exports = module.exports;
exports.name = 'liuxiaoru';
//module.exports导出模块相当于重写整个对象

//导入模块
var myInfo = require('./xxx');
//require绝对路径，默认去nodeMulde下寻找魔魁啊

```
### 包管理
node通过npm管理包
```js
//本地安装模式,可以直接通过require使用，但是不会注册环境变量
npm install packageName
//全局安装模式,不能直接通过require使用，但是它会注册环境变量
npm install -g packageName

//安装的npm模块在package.json文件进行管理
```

### 包发布
node通过npm publish发布自己的包
```js
//1、把自定义模块放入lib文件夹
//2、在package.json添加包信息
//package.json
{
    "name":"paackage-name",//包名，不能有大写字母
    "version":"0.0.1",//版本号，规定格式
    "main":"./lib/index.js",//导入包的入口文件
}
//3、npm publish 发布
```

## <label style="color:red">node.js中的JavaScript</label>

### 全局对象

**global**

**process**
