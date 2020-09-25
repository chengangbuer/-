const jsonServer = require('json-server');//在node里面使用json-server包
const db = require('./db.js');//引入mockjs配置模块
// const multer = reuqire('multer');

const path = require('path');
const Mock = require('mockjs');
let mock='/api';//定义路由根别名
let port = 3333;//端口

//创建服务器
const server = jsonServer.create();//创建jsonserver 服务对象


//配置jsonserver服务器 中间件
server.use(jsonServer.defaults({
  static:path.join(__dirname, '/public'),//静态资源托管
}));
server.use(jsonServer.bodyParser);//抓取body数据使用json-server中间件

// let upload = multer({dest:path.join(__dirname,'public','uploads')});
// server.use(upload.any());


//响应

//可选 统一修改请求方式
server.use((req, res, next) => {
  // console.log(1)
  // request.method = 'GET';

  if (req.url.includes('/login') || req.url.includes('/reg')){
    next()
  } else {
    if (req.headers.token && req.headers.token.length===16){
      next()
    } else {
      setTimeout(()=>res.jsonp({
        err:2,
        msg:'token无效或过期'
      }),1000)
    }
  }

});

//登录注册校验
let mr = Mock.Random;//提取mock的随机对象
server.post(mock+'/login', (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
  let username=req.body.username;
  let password=req.body.password;
  (username === 'alex' && password === 'alex123')?
    res.jsonp({
      "err": 0,
      "msg": "登录成功",
      "data": {
        "follow": mr.integer(1,5),
        "fans": mr.integer(1,5),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      },
      "token":mr.integer(16)+''
    }) :
    res.jsonp({
      "err": 1,
      "msg": "登录失败",
    })

});
server.post(mock+'/reg', (req, res) => {
  let username=req.body.username;
  (username !== 'alex') ?
    res.jsonp({
      "err": 0,
      "msg": "注册成功",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "注册失败",
    })

});

//响应mock接口 自定义返回结构 定义mock接口别名
const router = jsonServer.router(db);//创建路由对象 db为mock接口路由配置  db==object

router.render = (req, res) => {//自定义返回结构
  let data = res.locals.data;//object array
  // console.log('app.js',res);
  let bl = false;
  if (typeof data === 'object' && Object.keys(data).length !== 0){
    bl = true;
  } else {
    bl = false; // delete 操作时，返回空对象
  }

  setTimeout(()=>{//模拟服务器延时
    res.jsonp({
      err: bl  ? 0 : 1,
      msg: bl ? '成功' : '失败',
      data: res.locals.data
    })
  },0)

  // res.jsonp(res.locals.data)

};


server.use(jsonServer.rewriter({//路由自定义别名

  [mock+"/*"]: "/$1",

  // "/product\\?dataName=:dataName": "/:dataName",
  // "/banner\\?dataName=:dataName": "/:dataName",
  // "/detail\\?dataName=:dataName&id=:id": "/detail/:dataName/:id",

  // "/product/del\\?dataName=:dataName&id=:id": "/:dataName/:id",
  // "/product/add\\?dataName=:dataName": "/:dataName",
  // "/product/check\\?dataName=:dataName&id=:id": "/:dataName/:id"

  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id"

}));

server.use(router);//路由响应


//开启jsonserver服务
server.listen(port, () => {
  console.log('mock server is running')
});