import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import testOne  from "../components/testOne.vue";
import ILBox  from "../components/intervalLearnBox.vue";
import trainMode from "../views/trainMode.vue";
import trainModeTest from "../views/trainModeTest.vue";
import  noteInContext from "../views/noteInContext.vue";
import  modeSite from "../views/modeSite.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    params:{
      alertV:false,
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/test",
    name: "testOne",
    component: testOne,
    params:{
      alertV:true,
    }
  }, 
 {
    path: "/train",
    name: "trainMode",
    component: trainMode
  }, 
  {
    path: "/trainModeTest",
    name: "trainModeTest",
    component: trainModeTest,
    props:true
  }, 
  {
    path: "noteInContext",
    name: "noteInContext",
    component:noteInContext ,
    props:true
  }, 
  {
    path: "modeSite",
    name: "modeSite",
    component: modeSite ,
    props:true
  }, 
  {
    path: "ILBox",
    name: "ILBox",
    component: ILBox ,
    //props:true
  }, 
];

const router = new VueRouter({
  mode:"history",
  history:true,
  routes
});

export default router;
