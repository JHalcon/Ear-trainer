import Vue from "vue";
import Vuex from "vuex";
import { BootstrapVue } from "bootstrap-vue";
import db from "@/firebase/init";
import createPersistedState from "vuex-persistedstate";
//import testOne from "@/firebase/init"
Vue.use(Vuex);
Vue.use(db);
Vue.use(BootstrapVue);
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    products: [],
    intervals1: [],
    DBases: [],
    triads: [],
    exercises: [],
    triadIds: [],
    intervalsT: [],
    IDics: [],
    goodA: 0,
    badA: 0,
    alertV: false,
    triadExVisibility: false,
    updateBox: 0,
    c: 0,
    d: 1,
    tNumber: 0,
    aud: new Audio("plik.mp3"),
    exerTest: [],
    isStarted: false,
    ifHelp:false,
    CP:true,
  },
  actions: {},

  mutations: {
    TEtrue(state) {
      state.triadExVisibility = true;
    },
    changeCP(state){
    state.CP = !state.CP;
    },
    ifHelpChange(state) {
      state.ifHelp = !state.ifHelp;
    },
    cIncrease(state) {
      console.log("INCR c");
      state.c += 1;
    },
    dIncrease(state) {
      state.d += 1;
    },
    increaseTnumber(state) {
      state.tNumber += 1;
    },
    cReset(state) {
      state.c = 0;
    },
    tNumberReset(state) {
      state.tNumber = 0;
    },
    dReset(state) {
      state.d = 1;
    },
    TEfalse(state) {
      state.triadExVisibility = false;
    },
    increaseGA: state => {
      state.goodA++;
    },
    UpdateBox(state) {
      state.updateBox++;
      console.log("BOX");
    },
    exerFilter(state) {
      state.exerTest = [];
      state.exercises.forEach(id => {
        console.log(id["qid"]);
        if (id["qid"] === "emin") {
          state.exerTest.push(id);
          console.log("yes");
        }
      });
    },
    sound: () => {
      // console.log(text);
      let audio1 = document.getElementById("titleSong").textContent;
      let aud1 = new Audio(audio1);
      aud1.load(audio1);
      aud1.play();
      console.log("end sound");
    },
    stopSound: () => {
      // console.log(text);
      this.aud.stop();
      console.log("stop sound");
    },
    komunikat: () => {
      console.log("jasgdjahdg");
    },
    stopsoundsound: () => {},
    fetchProducts: state => {
      console.log("gasfag");
      console.log(state);
      db.collection("testOne")
        .get()
        .then(snapshot => {
          state.products = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let product = doc.data();
            product.id = doc.id;
            state.products.push(product);
          });
        });
    },
    fetchTriads: state => {
      db.collection("triads")
        .get()
        .then(snapshot => {
          state.triads = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let triad = doc.data();
            triad.id = doc.id;
            state.triads.push(triad);
          });
        });
    },
    fetchIntervalsT: state => {
      db.collection("intervalsT")
        .get()
        .then(snapshot => {
          state.intervalsT = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let i = doc.data();
            i.id = doc.id;
            state.intervalsT.push(i);
          });
        });
    },
    fetchInt1: state => {
      console.log("gasfag");
      db.collection("intervals1")
        .get()
        .then(snapshot => {
          state.intervals1 = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let interval = doc.data();
            interval.id = doc.id;
            state.intervals1.push(interval);
          });
        });
    },
    qfilter: (state, qid) => {
      console.log("qfilter function");
      db.collection("triadsE")
        .get()
        .where("qid", "==", qid)
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let e = doc.data();
            e.id = doc.id;
            state.exercises.push(e);
          });
        });
    },

    fetchExercises: state => {
      //console.log("gasfag");
      db.collection("triadsE")
        .get()
        .then(snapshot => {
          state.exercises = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let e = doc.data();
            e.id = doc.id;
            state.exercises.push(e);
          });
        });
    },
    fetchIDic: state => {
      //console.log("gasfag");
      db.collection("intervalsDic")
        .get()
        .then(snapshot => {
          state.IDics = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let e = doc.data();
            e.id = doc.id;
            state.IDics.push(e);
          });
        });
    },
    fetchTid: state => {
      //console.log("gasfag");
      console.log("dodaje idiki");
      db.collection("Triandid")
        .get()
        .then(snapshot => {
          state.triadIds = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let e = doc.data();
            e.id = doc.id;
            state.triadIds.push(e);
          });
        });
    },

    fetchDB: state => {
      console.log("gasfag");
      db.collection("testOne", "intervals1")
        .get()
        .then(snapshot => {
          state.DBases = [];
          snapshot.forEach(doc => {
            console.log(doc.data() + doc.id);
            let DB = doc.data();
            DB.id = doc.id;
            state.DBases.push(DB);
          });
        });
    },
    increaseBA: state => {
      state.badA++;
    },
    resetBA: state => {
      state.badA = 0;
    },
    resetGA: state => {
      state.goodA = 0;
    },
    setCategories(state, val) {
      state.products = val;
    }
  },
  mounted: function() {
    console.log("hfahtdf");
    console.log(this.state["products"]);
  },

  getters: {
    getExercisesById: state => id => {
      return state.exercises.find(todo => todo.id === id);
    },
    search(state) {
      return k =>
        state.intervals1.filter(product => {
          return product.chapter === k;
        });
    },
    getData: state => id => {
      return state.products.find(product => product.a === id);
    },
    selectedItem: state => {
      return state.products.find(item => item.id == state.selectedId);
    },
    searchData(state) {
      return k =>
        state.filter(product => {
          return product === k;
        });
    }
  }
});