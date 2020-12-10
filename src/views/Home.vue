<template>
  <div class="all">
    <div class="invitationPage">
      <div id="invitationPage" v-show="IP">
        <h1 class="iText">Walcome to Ear Trainer App</h1>
        <h2>Lets start learn some music</h2>
        <button v-on:click="animation" class="btn btn-dark">Play</button>
      </div>
    </div>
    <div id="main" v-show="CP" class="container">
      <menuCard
        class="mc"
        title="Train mode"
        imageLink="covers/trainmode.png"
        destination="trainMode"
      ></menuCard>
      <menuCard
        class="mc"
        title="Test mode"
        imageLink="covers/testmode.png"
        destination="testOne"
      ></menuCard>
    </div>
  </div>
</template>

<script>
import menuCard from "../components/menuCard.vue";
import { gsap } from "gsap";
//import firebase from "@/firebase/init"
import db from "@/firebase/init";
//import VueFire from "VueFire"
export default {
  name: "Home",
  data() {
    return {
      IP: true,
      CP: false
    };
  },
  components: {
    // mainBanner,
    menuCard
  },
  computed: {
    pageChange() {
      return {
        invitationPage: this.IP,
        container: this.CP
      };
    },
      isStarted() {
      return this.$store.state.exercises;
    },
  },
  methods: {
    created() {
      console.log("hfshgfs");
      db.collection.get("testOne").then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc);
        });
      });
    },
    changeIP() {
      this.IP = false;
      this.CP = true;
    },
    changeIn() {
      this.invitationP = true;
    },
    animation() {
      console.log("animation");
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      //tl.to('.iText',{duration:1,color:"red"});
      tl.to(".invitationPage", 1, { y: "-120%", duration: 1 });
      ///tl.to("#main", 1, { visibility: "100%", duration: 1, delay: 2 });
      tl.to(".mc", 2, { opacity: 1 });
      this.IP = false;
      this.CP = true;
      //{y:"-100%", duration:1},"-1");
    }
  }
};
</script>
<style scoped>
.mc {
  opacity: 0;
}
#main {
  display: flex;
  /*display:none;*/
  flex-direction: row;
  padding-top: 10vh;
  justify-content: space-around;
  height: 88vh;
  background-color: rgba(255, 255, 255, 0.7);
}
.invitationPage {
  width: 100%;
  height: 88vh;
  background-color: lightslategrey;
  display: flex;
  font-family: "Lobster";
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  /*
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;*/
}
.card-img {
  border: 5px solid black !important;
}
#invitationPage {
  display: flex;
  align-items: center;
  flex-direction: column;
}
#all {
  height: 100vh;
}
#innerMain {
  height: 100%;
}
</style>
