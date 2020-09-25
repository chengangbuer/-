// 用mockjs模拟生成数据
var Mock = require('mockjs');

// node app.js 要求db.js 暴露一个object
let mapData = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(8,12)',
      des:'@ctitle(10,20)',
      time:'@integer(1594004307038,1598004307038)',
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content: [1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
      }
    })
  }

  return data;
};

let mapData2 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(4,8)',
      sub_title:'@ctitle(6,12)',
      banner: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.cword(4,8)),
      time:'@integer(1594004307038,1598004307038)',
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content: [1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
      }
    })
  }

  return data;
};


module.exports = Mock.mock({
  
  'user': {
    "follow":Mock.Random.integer(0,100),
    "fans":Mock.Random.integer(0,100),
    "nikename":Mock.Random.cname(),
    "icon":Mock.Random.image('20x20',Mock.Random.color(),Mock.Random.cword(1)),
    "time":Mock.Random.integer(13)
  },
  'banner':mapData2(10),
  'home': mapData(100),
  'follow': mapData(80),
  'column': mapData(60),
  
});

/* module.exports = () => {
  
  // 使用 Mock
    var data = Mock.mock({
      'course|30': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1000,
          course_name: '@ctitle(5,10)',
          autor: '@cname',
          college: '@ctitle(6)',
          'category_Id|1-6': 1
        }
      ],
      'course_category|6': [
        {
          "id|+1": 1,
          "pid": -1,
          cName: '@ctitle(4)'
        }
      ]
    });
  
  // 返回的data会作为json-server的数据
  return data;
    
}; */