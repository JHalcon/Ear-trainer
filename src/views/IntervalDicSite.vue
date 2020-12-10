<template>
  <div id="main" class="container p-1">
    <div id="prev" v-if="prevVisible">
      <h3>Now You can do intervals dictation</h3>
      <h4>
        At first you have to listen to the whole record and than write down
        interval symbols in the corect order
      </h4>
      <h4>Good luck and have fun!</h4>
      <button class="btn btn-second" v-on:click="toDic">Lets try</button>
    </div>
    <div v-if="!prevVisible">
      <div id="contentBox" v-for="i in IDics.slice(c, d)" :key="i.id">
        <div id="firstStep" class="invisible">
          <h3 id="sectionTitle">Listen to the whole dictation</h3>
          <audioPlayer v-bind:filename="i.fileAll" />
          <h3>White down interval symbols in the correct pleace</h3>

          <IntervalDicForm
            v-bind:FI="i.firstI"
            v-bind:SI="i.secondI"
            v-bind:THI="i.thirdI"
            v-bind:FOI="i.fourthI"
            v-bind:FII="i.fifthI"
          />
        </div>
        <!--<h2 class="triadInfo">{{triad.qid}}</h2>-->
        <div id="transcryption">
          <img class="transcryptionImg mb-2" src="IDic1.jpg" />
          <div class="cartonsBox">
            <div class="carton" id="c1"></div>
            <div class="carton" id="c2"></div>
            <div class="carton" id="c3"></div>
            <div class="carton" id="c4"></div>
            <div class="carton" id="c5"></div>
          </div>
          <audio-player :fileName="i.fileAll" />
          <button class="btn btn-secondary" v-on:click="Animate">
            Show intervals
          </button>
        </div>

        <div id="endPanel">
          <h2>End of the chapter</h2>
          <button class="btn btn-primary" v-on:click="resetChapter">
            Play again
          </button>
          <button class="btn btn-secondary" @click="$router.push('/train')">
            Back to chapter menu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import audioPlayer from "../components/audioPlayer.vue";
import IntervalDicForm from "../components/IntervalDicForm.vue";
export default {
  components: {
    audioPlayer,
    IntervalDicForm
  },
  data() {
    return {
      c: 0,
      d: 1,
      name: "intervalDicSite",
      endOfMode: false,
      prevVisible: true
    };
  },
  computed: {
    IDics() {
      return this.$store.state.IDics;
    }
  },
  methods: {
    toDic() {
      this.prevVisible = false;
    },

    checkDic() {
      console.log();
    },
    Animate() {
      let au = document.getElementById("player");
      au.play();
      let c1 = document.getElementById("c1");
      let c2 = document.getElementById("c2");
      let c3 = document.getElementById("c3");
      let c4 = document.getElementById("c4");
      let c5 = document.getElementById("c5");
      c1.style.backgroundColor = "white";
      c1.innerHTML = "2";
      setTimeout(() => {
        c1.style.backgroundColor = "cornflowerblue";
        c2.style.backgroundColor = "white";
        c2.innerHTML = "3";
        setTimeout(() => {
          c2.style.backgroundColor = "cornflowerblue";
          c3.style.backgroundColor = "white";
          c3.innerHTML = "1";
          setTimeout(() => {
            c3.style.backgroundColor = "cornflowerblue";
            c4.style.backgroundColor = "white";
            c4.innerHTML = "3>";
            setTimeout(() => {
              c4.style.backgroundColor = "cornflowerblue";
              c5.style.backgroundColor = "white";
              c5.innerHTML = "2>";
              setTimeout(() => {
                c5.style.backgroundColor = "cornflowerblue";
              }, 3000);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
      // c1.style.backgroundColor = "white";
    }
  }
};
</script>
<style scoped>
* {
  font-family: Roboto;
}
#transcryption {
  flex-direction: column;
}
.cartonsBox {
  display: flex;
  justify-content: space-around;
  width: 55vw;
  padding-left: 30px;
  margin-bottom: 30px;
}
.transcryptionImg {
  width: 85%;
}
.carton {
  width: 100px;
  height: 120px;
  background-color: cornflowerblue;
  font-size: 40px;
  border-radius: 5px;
  margin: 6px;
}
img {
  width: 40%;
}
#imputsI {
  margin: 40px !important;
}
#prev {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#main {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  height: 84vh;
  display: flex;
  align-items: center;
  margin-top: 2vh;
  width: 80%;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#contentBox {
  display: flex;
  flex-direction: column;
  width: 80vw;
}
.invisible {
  display: none;
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
</style>
