<template v-if="triadExVisibility" :key="updateBox">
  <div id="ILB" class="container">
    <div class="row" v-for="t in intervalsT.slice(a, b)" :key="t.id">
      <div class="col-12 col-sm-12 col-lg-6" id="left">
        <h3 style="color:white; font-family:Tahoma">{{ t.name }}</h3>
        <img v-bind:src="t.img" />

        <h5>
          <span style="display:inline">Numerical symbol:</span
          ><span class="whiteL"> {{ t.symbol }}</span>
        </h5>
        <h5 class="desc">
          <span style="display:inline">Semitones:</span
          ><span class="whiteL"> {{ t.poltony }}</span>
        </h5>
        <h5 class="whiteL">Example in song (ascending) - {{ t.upname }}</h5>
        <audioPlayer
          class="pl"
          v-bind:fileName="t.upf"
          v-bind:description="t.fileName"
        />
        <h5 class="whiteL">
          Example in song 2 (descending) - {{ t.downname }}
        </h5>
        <audioPlayer
          v-bind:fileName="t.downf"
          v-bind:description="t.fileName"
        />
        <div id="titleSong">
          {{ t.file }}
        </div>
      </div>
      <div class="col-12 col-lg-6 col-sm-12" id="right">
        <h3 style="color: cornflowerblue">Listen to the interval</h3>
        <keyboardBox
          tryb="I"
          v-bind:FN="t.firstNote"
          v-bind:SN="t.secondNote"
          v-bind:file="t.file"
          class="resKey"
        />
      </div>
      <div class="col-12 allCentered">
        <button class="btn btn-secondary" v-on:click="nextT">Next</button>
      </div>
    </div>
    <div id="summary">
      <h2>Training is completed</h2>
      <button class="btn btn-primary mt-4  mb-3 sb" v-on:click="resetGame">
        Learn intervals again
      </button>
      <button
        class="btn btn-dark mt-2 mb-3 sb"
        @click="$router.push('/modeSite')"
      >
        Back to the chapter menu
      </button>
      <button class="btn btn-light mt-2 sb" @click="$router.push('/')">
        Back to the main menu
      </button>
    </div>
  </div>
</template>

<script>
import keyboardBox from "../components/keyboardBox.vue";
import audioPlayer from "../components/audioPlayer.vue";
export default {
  computed: {
    intervalsT() {
      return this.$store.state.intervalsT;
    },
    tabSize() {
      return this.$store.state.intervalsT.length;
    }
  },
  name: "ILBox",
  selected: "",
  Props: ["idQ"],
  components: {
    keyboardBox,
    audioPlayer
  },
  data() {
    return {
      a: 0,
      b: 1,
      endOfList: false,
      iteratorList: 0
    };
  },
  methods: {
    resetGame() {
      console.log("reset");
      this.a = 0;
      this.b = 1;
      document.getElementById("summary").style.display = "none";
    },
    nextT() {
      if (this.b == this.tabSize) {
        console.log("koniec");
        document.getElementById("summary").style.display = "flex";
      }
      this.a++;
      this.b++;
      console.log("hfhgfgf" + this.a + this.tabSize);
    }
  }
};
</script>
<style lang="scss" scoped>
svg#svg8 {
  width: 90% !important;
  height: 90% !important;
}
#ILB {
  background-color: rgba(255, 255, 255, 0.7);
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding: 15px;
}
.row {
  width: 100%;
  height: 100%;
}
.invisible {
  display: none;
}
#right {
  height: 90%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.white {
  color: white;
}
.whiteL {
  display: inline;
  color: white;
}
#left {
  height: 90%;
  background-color: cornflowerblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 5vh;
}
audio#player {
  height: 40px !important;
  width: 200px !important;
}
#summary {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.allCentered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
#widthDiv {
  width: 100%;
  margin: 10px;
}
h5.desc:last-child {
  color: white;
}
h5 {
  margin-top: 10px;
}
img {
  min-height: 20vh;
}
@media (max-width: 700px) {
  .row {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  #right {
    margin-bottom: 20px;
    margin-top: 20px;
    height: 70vh;
  }
  .pl {
    height: 40px !important;
    width: 200px !important;
  }
  #ILB {
    height: 95%;
    margin-top: 3vh;
  }
  svg#svg8 {
    width: 250px !important;
  }
}
@media (max-width: 700px) {
  svg#svg8 {
    width: 450px !important;
  }
  #summary {
    height: 84vh;
  }
  button.sb {
    margin-top: 10vh;
  }
  img {
    width: 120%;
  }
}

@media all and (max-width: 900px) and (orientation: landscape) {
  #ILB {
    height: 100% !important;
  }
  #right {
    min-height: 110vh;
  }
  img {
    width: 100%;
  }
}
</style>
