<template>
  <div class="all">
    <div id="invitationPage1" v-show="IPP">
      <div id="invitationPage" v-show="IPP">
        <h1 class="iText">Walcome to Ear Trainer App</h1>
        <h2 style="color:cornflowerblue">Let's start learning some music</h2>
        <button v-on:click="animation" class="btn btn-dark">Play</button>
      </div>
    </div>
    <div id="main" class="container" v-show="CPP">
      <div class="row main">
        <menuCard
          id="menuc1"
          class="mc col-12 col-lg-6 col-sm-12"
          title="Train mode"
          imageLink="covers/trainmode.png"
          destination="trainMode"
          innerText="Learn music theory step by step and try to do some multimedia exercises that we have prepared for you. 
          You can start with simple hearing tasks but if you already have some skills we have more advanced challanges as well."
        ></menuCard>
        <menuCard
          id="menuc2"
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
import db from "@/firebase/init";
export default {
  name: "Home",
  data() {
    return {
      IP: false,
      CP: true
    };
  },
  components: {
    menuCard
  },
  created() {
    this.IP = true;
    console.log("shghs");
    document.getElementById("menuc1").style.opacity = "0%";
  },
  computed: {
    badA() {
      return this.$store.state.IPP;
    },
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
    },
    IPP() {
      return this.$store.state.IPP;
    },
    CPP() {
      return this.$store.state.CPP;
    }
  },
  methods: {
    created() {
      db.collection.get("testOne").then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc);
        });
      });
    },
    changeIPP() {
      this.$store.commit("changeIPP");
    },
    changeCPP() {
      this.$store.commit("changeCPP");
    },
    changeIP() {
      this.IP = false;
      this.changeCP;
    },
    changeCP() {
      this.$store.commit("changeCP");
    },
    changeIn() {
      this.invitationP = true;
    },
    animation() {
      document.getElementById("menuc1").style.opacity = "0%";
      document.getElementById("menuc2").style.opacity = "0%";

      console.log("animation");
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      console.log("animation2");
      tl.to("#invitationPage", 1, { opacity: "0", duration: 1 });
      tl.to("#invitationPage1", 1, { height: "0vh", duration: 1 });
      console.log("animation3");
      tl.to(".mc", 2, { opacity: 1 });
      setTimeout(() => {
        this.changeCPP();
      }, 1000);
      setTimeout(() => {
        this.changeIPP();
      }, 2000);
      this.visited = true;
    }
  }
};
</script>
<style scoped>
.mc {
  opacity: 100%;
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
  flex-direction: row;
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

  background-image: url("../assets/piano2.jpg");
}

.card-img {
  border: 5px solid black !important;
}
#invitationPage > button {
  font-family: roboto;
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
@media (max-width: 800px) {
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
  h2 {
    font-size: 1.5em;
  }
}
@media (max-width: 800px) and (orientation: landscape) {
  #main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-height: 200vh;
    background-color: rgba(255, 255, 255, 0.7);
  }
}
@media (min-width: 1200px) {
  #invitationPage {
    font-size: 100px;
  }
}
</style>
