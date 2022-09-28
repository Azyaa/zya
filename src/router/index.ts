import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayOut from "../views/layout/LayOut.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LayOut,
    redirect:{name:"homeson"},
    children:[
      {path:"home",name:"homeson",component:HomeView}
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:() => import("@/views/AboutView.vue"),
  },
  {
    path:"/fen",
    name:"fen",
    component: LayOut,
    redirect:{name:"fenxiao"},
    children:[
      {path:"fenxiao",name:"fenxiao",component:()=>import("@/views/FenXiao.vue")}
    ]
  },
  {
    path:"/cart",
    name:"cart",
    component: LayOut,
    redirect:{name:"mycart"},
    children:[
      {path:"mycart",name:"mycart",component:()=>import("@/views/MyCart.vue")}
    ]
  },
  {
    path:"/mine",
    name:"mine",
    component: LayOut,
    redirect:{name:"detail"},
    children:[
      {path:"detail",name:"detail",component:()=>import("@/views/MineView.vue")}
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
