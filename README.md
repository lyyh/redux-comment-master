## 简介
### 主要技术：
redux+express  

#### 前台：
es6语法、API (Object)  
es7 (对象展开运算符)  
less 样式  
异步 action creator(thunk) 获取数据    
fetch 代替 ajax  
利用Redux Middleware中间件调用异步接口  
connect() 包装组件 
combineReducers() 将 子reducer 返回的结果合并成整个应用的state   
import * 导入action type  
Provider 使组件层级中的 connect() 方法都能够获得 Redux store  
对state的变化加入日志功能

#### 后台：
负责对数据的存储、提取（cookie）  

使用fetch的时候需要注意:  
fetch 传递的 request默认不带cookie，所以要在fetch中加入参数:`credentials: 'same-origin'` 表示传递cookie  

ps:若要进行修改
1. 安装依赖
2. 在index.html中引入文件(bundle.js)
3. 修改.babelrc配置
`{
  "presets": ["es2015", "react"],
  "plugins": ["transform-object-rest-spread"],
   "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}`
4. 运行server.js（启动服务器）。

学习资料：http://cn.redux.js.org/docs/react-redux/api.html




