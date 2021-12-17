import Vue from "vue";
import VueRouter from "vue-router";

const Home = ()=> import('src/views/home/Home')
const Category = ()=> import('src/views/category/Category')
const Cart = ()=> import('src/views/cart/Cart')
const Profile = ()=> import('src/views/profile/Profile')
const Detail = () => import('src/views/detail/Detail')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
  },{
    path: '/profile',
    component: Profile
  },{
    path: '/category',
    component:Category,
    //路由独享守卫
    beforEnter:(to,from,next)=>{
      next();
    }
  },{
    path: '/cart',
    component:Cart
  },{
    path: '/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
    routes,
    mode:'history'
})
export default router
