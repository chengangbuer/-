import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NoPage from '../pages/no-page.vue';
import Home from '../pages/home.vue';
import Follow from '../pages/follow.vue';
import Column from '../pages/column.vue';
import Detail from '../pages/detail.vue';
import user from '../pages/user.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  /* {path:'/detail',component:Detail,children:[
    {path:':id',component:Detail}
  ]}, */
  // {path:'/detail/:_id',component:Detail,name:'detail'},
  // {path:'/detail/:_id',component:Detail,name:'detail',props:true},  只传递params
  // {path:'/detail/:_id',component:Detail,name:'detail',props:{_id:'1',collectionName:'home123',title:'详情页'}},//只传递query
  {path:'/detail/:_id',component:Detail,name:'detail',props: route => ({_id:route.params._id,...route.query})},//只传递query
  {path:'/user',component:user},
  {path:'/Login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage},
];

let router = new VueRouter({
  routes
});

export default router;