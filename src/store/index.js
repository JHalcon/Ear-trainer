import Vue from "vue";
import Vuex from "vuex";
import { BootstrapVue} from 'bootstrap-vue'

Vue.use(Vuex);
Vue.use(BootstrapVue)
export default new Vuex.Store({
  state: {
    products:[
      {text:"Pytanie 1",a:"ksjh",b:"ahsfagfs",c:"hhgsfdfsa",correct:"a", file:"E.mp3"},
      {text:"Pytanie 2",a:"aaa",b:"bbb",c:"cccc",correct:"b",file:"C.mp3"},
      {text:"Pytanie 3",a:"zxxc",b:"asdads",c:"sss",correct:"c",file:"D.mp3"},
      {text:"Pytanie 4",a:"ede",b:"sss",c:"qaz",correct:"a"},
    ],
    goodA:0,
    badA:0
  },
  mutations: {
    increaseGA: state =>{
        state.goodA++;
    },
    increaseBA: state =>{
      state.badA++;
  },
  },
  actions: {},
  modules: {}
});
