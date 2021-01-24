<template>
  <div id="prl1" class="container p-2">
    <div class="innerContainer">
      <div
        class="qbox"
        v-for="product in products.slice(a, b)"
        :key="product.id"
      >
        <div id="innerBoxQ" v-show="!hintV">
          <h3 class="text-center mb-4" style="font-weight: bold">
            What interval can you hear?
          </h3>
          <div id="audio" class="player-wrapper">
            <div id="songTitle" class="invisible">
              {{ product.file }}
            </div>
            <span id="answer" class="invisible">{{ product.correct }}</span>
          </div>
          <audio id="id1" v-bind:src="product.file"></audio>
          <p id="titleSong">{{ product.file }}</p>
          <button v-on:click="opop" class="btn btn-secondary">Play</button>
          <button
            class="btn btn-primary m-2 ansBtn"
            v-on:click="selectAnswer"
            value="a"
          >
            {{ product.a }}
          </button>
          <button
            class="btn btn-primary m-2 ansBtn"
            v-on:click="selectAnswer"
            value="b"
          >
            {{ product.b }}
          </button>
          <button
            class="btn btn-primary m-2 ansBtn"
            v-on:click="selectAnswer"
            value="c"
          >
            {{ product.c }}
          </button>
          <span id="answer" class="invisible">{{ product.correct }}</span>
          <div id="comm" class="mt-3" v-show="checkMode">
            <span id="goodA" v-show="correctA" class="greenT"
              >Great! this is correct answer</span
            >
            <span id="wrongA" v-show="!correctA" class="redT"
              >Sorry this is a wrong answer</span
            >
          </div>
        </div>

        <answerBox
          v-bind:FN="product.firstNote"
          v-bind:SN="product.secondNote"
          v-bind:file="product.file"
          v-show="hintV"
        ></answerBox>
        <div class="buttons">
          <button id="ChAItem" class="btn btn-dark" v-on:click="checkA">
            Check answer
          </button>
          <button id="hint" class="btn btn-light mr-2" v-on:click="hint">
            Keys hint
          </button>
          <button id="nextItem" class="btn btn-dark" v-on:click="nextT">
            Next
          </button>
        </div>
      </div>
      <div id="summary">
        <h3 class="mb-4">Training is completed</h3>
        <button class="btn btn-primary mb-4" v-on:click="resetGame">
          Try again
        </button>
        <button class="btn btn-dark mb-4" @click="$router.push('/modeSite')">
          Back to chapter menu
        </button>
        <button class="btn btn-light" @click="$router.push('/')">
          Back to main menu
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import answerBox from "../components/answerBox.vue";

export default {
  props: {
    chapter: {
      type: String,
      default: "I1"
    }
  },
  computed: {
    products() {
      return this.$store.getters.search(this.chapter);
    },

    intervals1() {
      return this.$store.state.intervals1;
    },
    tabSize() {
      return this.$store.state.products.length;
    },
    goodA() {
      return this.$store.state.goodA;
    },
    badA() {
      return this.$store.state.badA;
    }
  },
  name: "trainBox",
  selected: "",
  components: {
    answerBox
  },
  data() {
    return {
      a: 0,
      b: 1,
      testName: "Interwals",
      endList: false,
      iteratorList: 0,
      checkMode: false,
      selectedAns: "a",
      isASelected: false,
      hintV: false,
      correctA: false,
      spec: 0
    };
  },
  methods: {
    selectAnswer(e) {
      document.getElementById("comm").style.display = "none";
      let odp = e.currentTarget.value;
      this.selectedAns = odp;
      let correctAnswer = document.getElementById("answer").innerText;
      this.isASelected = true;
      if (odp === correctAnswer) {
        console.log("good answer");
        this.correctA = true;
        console.log(this.correctA);
      } else {
        console.log("wrong answer");
        this.correctA = false;
        console.log(this.correctA);
      }
    },
    increaseGA() {
      this.$store.commit("increaseGA");
    },
    resetGame() {
      console.log("reset");
      this.a = 0;
      this.b = 1;
      document.getElementById("summary").style.display = "none";
    },
    increaseBA() {
      this.$store.commit("increaseBA");
    },
    resetGA() {
      this.$store.commit("resetGA");
    },
    resetBA() {
      this.$store.commit("resetBA");
    },
    checkIfSelected() {
      console.log("sprawdzam czy zaznaczone");
      console.log(this.selecedAns);
      if (this.isASelected == false) return false;
      else return true;
    },
    checkAnswer: function() {
      console.log(this.selectedAns);

      let correctAnswer = document.getElementById("answer").innerText;
      console.log("dobra odp" + correctAnswer);
      if (this.selectedAns === correctAnswer) {
        console.log("good ANSWER and increase");
        this.increaseGA();
      } else {
        console.log("BAD ANSWER GO ON");
        this.increaseBA();
      }
    },

    checkA() {
      console.log("hgsfhgf");
      let warDiv = document.getElementById("answerWarning");

      if (this.checkIfSelected() == true) {
        warDiv.style.display = "none";
        document.getElementById("comm").style.display = "flex";
        if (this.isASelected == true) {
          this.checkMode = true;
          let ans = document.getElementById("answer").innerText;
          console.log(ans);
          if (this.selectedAns == ans) console.log("yesss");
          else {
            console.log("no no");
          }
        } else {
          console.log("nie ma praw");
        }
      } else {
        warDiv.style.display = "block";
      }
    },
    showResoult() {},
    nextT() {
      document.getElementById("answerWarning").style.display = "none";
      console.log(this.tabSize);
      this.isASelected = false;
      this.hintV = false;
      this.checkMode = false;
      if (this.b == this.tabSize - 1) {
        console.log("koniec");
        document.getElementById("summary").style.display = "flex";
      }
      this.a++;
      this.b++;
      console.log("hfhgfgf" + this.a + this.tabSize);
    },

    nextQuestion() {
      let box = document.getElementById("ansB");
      this.isASelected = false;
      box.style.display = "none";
      if (this.endList === true) {
        this.resetGame();
      } else {
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
        }
      }
    },
    hint() {
      if (this.spec == 0) {
        this.hintV = true;
        document.getElementById("hint").innerHTML = "Hide hint";
        this.spec++;
      } else {
        document.getElementById("hint").innerHTML = "Keys hint";
        this.hintV = false;
        this.spec -= this.spec;
      }
    },
    opop() {
      let audio1 = document.getElementById("titleSong").textContent;
      let aud = new Audio(audio1);
      aud.play();
    },

    playS: function(sound) {
      console.log(sound);
    }
  }
};
</script>
<style lang="scss">
.qbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
#ansbox {
  display: none;
}

span {
  display: flex;
}
.buttons {
  background-color: darkgray;
  margin: auto;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
#titleSong {
  display: none;
}
#summary {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

#gameResoult {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#prl1 {
  background-color: rgba(255, 255, 255, 0.7);
  min-height: 74vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 1%;
  margin-bottom: 1%;
}
.innerContainer {
  width: 100%;
  padding: 30px;
}
.btn:active {
  background-color: gray !important;
}
.btn:hover {
  background-color: gray !important;
}
#innerBoxQ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
}
span {
  font-size: 20px;
}
.greenT {
  color: green;
}
.redT {
  color: red;
}
#results {
  margin: 10px;
}
.active {
  background-color: gray !important;
}

.ansBtn {
  width: 150px;
}
svg#svg8 {
  width: 550px !important;
  height: 350px !important;
}
.buttons {
  font-size: medium;
  width: 80%;
}
@media (max-width: 700px) {
  #prl1 {
    background-color: rgba(255, 255, 255, 0.7);
    min-height: 78vh;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
  .innerContainer {
    margin-bottom: 0;
    padding-left: 20px;
  }
  .buttons {
    font-size: 0.5rem;
    margin-bottom: 3vh;
  }

  .btn {
    font-size: 0.8rem !important;
  }
  #keyBox {
    margin-bottom: none !important;
  }
  .buttons {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}
@media (max-width: 700px) and (orientation: landscape) {
  #prl1 {
    background-color: rgba(255, 255, 255, 0.7);
    min-height: 80vh;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-top: 2%;
    margin-bottom: 2vh;
  }
  .innerContainer {
    margin: 0 !important;
  }
  .mb-5 {
    margin-bottom: 5px !important;
  }
  #innerBoxQ {
    margin-bottom: 4vh;
  }
}
</style>
