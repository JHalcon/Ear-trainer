<template>
  <div id="main" class="container p-1">
    <div id="contentBox" v-for="triad in triads.slice(c, d)" :key="triad.id">
      <h3 id="sectionTitle">Listen to the example of a whole triad</h3>
      <span id="triadInfo">
        <h4 class="triadInfo">{{ triad.text }}</h4>
        <span class="invisible" id="titleSong">{{ triad.file }}</span>
      </span>
      <keyboardBox
        v-bind:qid="triad.qid"
        v-bind:FN="triad.firstNote"
        v-bind:SN="triad.secondNote"
        v-bind:TN="triad.thirdNote"
      />
      <button id="NS" class="btn btn-secondary mt-2" @click="toGame(triad.qid)">
        Next step
      </button>
      <triadTestBox v-bind:qid="triad.qid" />
      <div id="endPanel">
        <h2>End of the chapter</h2>
        <button class="btn btn-primary mb-3" v-on:click="resetChapter">
          Play again
        </button>
        <button class="btn btn-secondary mb-3 " @click="$router.push('/train'); resetChapter">
          Back to the chapter menu
        </button>
        <button class="btn btn-light " @click="$router.push('/'); resetChapter">
          Back to the main menu
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import keyboardBox from "../components/keyboardBox.vue";
import triadTestBox from "../components/triadTestBox.vue";

export default {
  created(){
this.resetChapter();
  },
  components: {
    keyboardBox,
    triadTestBox
  },
  data() {
    return {
      //c:0,
      //d:1,
      name: "noteInContext",
      endOfMode: false
    };
  },
  computed: {
    triads() {
      return this.$store.state.triads;
    },
    tNumber() {
      return this.$store.state.tNumber;
    },

    triadExVisibility() {
      return this.$store.state.triadExVisibility;
    },
    triadIds() {
      return this.$store.state.triadIds;
    },
    c() {
      return this.$store.state.c;
    },
    d() {
      return this.$store.state.d;
    }
  },
  methods: {
    cReset() {
      this.$store.commit("cReset");
    },
    UpdateBox() {
      this.$store.commit("UpdateBox");
    },
    exerFilter() {
      this.$store.commit("exerFilter");
    },
    dReset() {
      this.$store.commit("dReset");
    },
    tNumberReset() {
      this.$store.commit("tNumberReset");
    },
    playMusic() {
      this.$store.commit("sound");
    },
    colorBtn(key) {
      console.log("ahsdfhg");
      let btn = document.getElementById(key);
      btn.setAttribute("style", "fill:rgb(0, 0, 0) !important");
      console.log("ahgsfg");
      this.playMusic();
      console.log("cos sie dzieje");
      setTimeout(() => {
        btn.setAttribute("style", "fill:rgb(255, 255, 255) !important");
      }, 5000);
    },
    resetMode() {
      console.log("reset mode");
      this.cReset();
      this.dReset();
      this.endList = false;
      this.iteratorList = 0;
      this.selectedAns = "a";
      let btn = document.getElementById("nextItem");
      btn.innerHTML = "Next";
      document.getElementById("answerWarning").style.display = "none";
    },
    toGame(a) {
      console.log("to Game jedzie"+a);
      document.getElementById("keyBox").style.display = "none";
      document.getElementById("NS").style.display = "none";
      document.getElementById("triadInfo").style.display = "none";
      console.log("nie widac");
      document.getElementById("TriadBox").style.display = "flex";
      document.getElementById("sectionTitle").style.display = "none";
      console.log(this.exercisesT);
      this.exerFilter();
      console.log(this.triadExVisibility);
      this.UpdateBox();
    },
    nextQuestion() {
      let warDiv = document.getElementById("answerWarning");

      if (this.endList === true) {
        this.resetGame();
      } else {
        if (this.checkIfSelected() == true) {
          this.isSelected = true;
          warDiv.style.display = "none";
          console.log("next yes");
          this.a++;
          this.b++;
          console.log("hfhgfgf" + this.a);
          console.log("troll" + this.endList);
          var that = this;
          that.checkAnswer();
          this.iteratorList++;
          console.log(this.productsSize);
          let btn = document.getElementById("nextItem");
          if (this.iteratorList === this.productsSize - 1) {
            btn.innerHTML = "Summary";
          }
          if (this.iteratorList === this.productsSize) {
            this.endList = true;
            btn.innerHTML = "Play again";
            document.getElementById("answerWarning").style.display = "none";
            //this.showResoult();
          }
        } else {
          warDiv.style.display = "block";
        }
        this.isSelected = false;
      }
    },
    resetChapter() {
      console.log("resetChapter");
      this.cReset();
      this.dReset();
      this.tNumberReset();
    },
    updated(){
      console.log("reloaod");
this.resetChapter();
    },
    playInterval(first, second) {
      this.playMusic();
      console.log(first);
      console.log(second);
      console.log("intervallle");
      let btn2 = document.getElementById(second);
      let btn1 = document.getElementById(first);
      console.log(btn1);
      btn1.setAttribute("style", "fill:rgb(255, 0, 0) !important"); //czarne c
      setTimeout(() => {
        btn1.setAttribute("style", "fill:rgb(255, 255, 255) !important");
        btn2.setAttribute("style", "fill:rgb(81, 98, 247) !important"); //biale c
        setTimeout(() => {
          if (btn2.classList.contains("white"))
            btn2.setAttribute("style", "fill:rgb(255,255,255) !important");
          else btn2.setAttribute("style", "fill:rgb(0,0,0) !important");
          btn1.setAttribute("style", "fill:rgb(255,255,255) !important"); // rozowe E
          setTimeout(() => {
            btn1.setAttribute("style", "fill:rgb(255,0,0) !important");
            btn2.setAttribute("style", "fill:rgb(81, 98, 247) !important");
            setTimeout(() => {
              if (btn1.classList.contains("white")) {
                console.log("OOO");
                btn1.setAttribute("style", "fill:rgb(255,255,255) !important");
              } else {
                console.log("hgafshf");
                btn1.setAttribute("style", "fill:rgb(0,0,0) !important");
              }
              if (btn2.classList.contains("white"))
                btn2.setAttribute("style", "fill:rgb(255,255,255) !important");
              else {
                console.log("2222");
                btn2.setAttribute("style", "fill:rgb(0,0,0) !important");
              }
            }, 2000);
          }, 200);
        }, 1000);
      }, 1000);
    }
  }
};
</script>
<style scoped>
* {
  font-family: Roboto;
}
img {
  width: 40%;
}
#main {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  height: 84vh;
  display: flex;
  align-items: center;
  margin-top: 2vh;
  justify-content: center;
  /*width: 80%;*/
}
#keyBox {
  /*display:flex;*/
  align-items: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#contentBox {
  display: flex;
  flex-direction: column;
  /*width: 80vw;*/
  width:100%;
  justify-content: center;
}
.invisible {
  display: none;
}
svg#svg8 {
  width: 120;
  margin-bottom: 40px;
  margin-top: 40px;
}
rect#rect3850 {
  fill: rgb(185, 0, 0) !important;
}
#TriadBox {
  display: none;
}
h3 {
  margin: 20px !important;
}
#endPanel {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-primary {
  margin: 10px;
}
#triadInfo {
  background-color: none;
  color: cornflowerblue;
}
@media (max-width: 700px) {
  .buttons {
    font-size: 0.5rem;
  }
  .btn {
    font-size: 0.8rem !important;
  }
  #keyBox {
    margin-bottom: none !important;
  }
  button {
    height: 90%;
    font-size: 1em;
    
  }
  button.btn{
margin-bottom: 5vh;
  }
}
@media (max-width: 700px) and (orientation: landscape) {
  #main {
  height: 140vh;
  margin-bottom:3vh;
}
}
</style>
