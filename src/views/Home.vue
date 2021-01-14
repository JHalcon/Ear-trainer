<template>
  <div class="all">
    <div id="invitationPage1">
      <div id="invitationPage" v-show="IP">
        <h1 class="iText">Walcome to Ear Trainer App</h1>
        <h2 style="color:cornflowerblue">Lets start learn some music</h2>
        <button v-on:click="animation" class="btn btn-dark">Play</button>
      </div>
    </div>
    <div id="main" class="container" v-show="CP">
      <div class="row main">
        <menuCard
          class="mc col-12 col-lg-6 col-sm-12"
          title="Train mode"
          imageLink="covers/trainmode.png"
          destination="trainMode"
          innerText="Learn music theory step by step and try to do some multimedia exercises that we have prepared for you. 
          You can start with simple hearing tasks but if you already have some skills we have more advanced challanges as well."
        ></menuCard>
        <menuCard
          class="mc col-12 col-sm-12 col-lg-6"
          title="Test mode"
          imageLink="covers/testmode.png"
          destination="testOne"
          innerText="Have you mastered your knowledge in the training mode yet? So now try to cope with the tests that contain 
          questions from various chapters. This is a perfect way to check your learning progress. Good luck!"
        ></menuCard>
      </div>
    </div>
  </div>
</template>

<script>
import menuCard from "../components/menuCard.vue";
import { gsap } from "gsap";
//import help from "../components/help.vue";
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
    //help
  },
  computed: {
    pageChange() {
      return {
        invitationPage: this.IP
      };
    },
    isStarted() {
      return this.$store.state.exercises;
    },
    ifHelp() {
      return this.$store.state.ifHelp;
    }
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
      /// this.CP = true;
      this.changeCP;
    },
    changeCP() {
      this.$store.commit("changeCP");
    },
    changeIn() {
      this.invitationP = true;
    },
    animation() {
      console.log("animation");
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      //tl.to('.iText',{duration:1,color:"red"});
      tl.to("#invitationPage1", 1, { y: "-120%", duration: 1 });
      ///tl.to("#main", 1, { visibility: "100%", duration: 1, delay: 2 });
      tl.to(".mc", 2, { opacity: 1 });
      this.IP = false;
      this.CP = true;
      document.getElementById("invitationPage1").style.height = "0vh";
      //{y:"-100%", duration:1},"-1");
    }
  }
};
</script>
<style scoped>
.mc {
  opacity: 0;
  align-items: center;
  display: flex;
  justify-content: center;
}
h2 {
  color: cornflowerblue;
}
.iText {
  color: white;
}
#main {
  display: flex;
  /*display:none;*/
  flex-direction: row;
  /*padding-top: 10vh;*/
  justify-content: space-around;
  height: 88vh;
  background-color: rgba(255, 255, 255, 0.7);
}
#invitationPage1 {
  width: 100%;
  height: 88vh;
  background-color: rgb(170, 170, 170);
  display: flex;
  font-family: "Lobster";
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: 80% 50%;

  /* background-size:100%;*/

  background-image: url("../assets/piano2.jpg");
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
.main {
  width: 100%;
}
@media (max-width: 700px) {
  .row {
    margin-bottom: 20px;
    margin-top: none;
  }
  #main {
    height: 100%;
  }
  .menuCard {
    margin-top: 30px;
  }
  #invitationPage {
    text-align: center;
  }
}
</style>
