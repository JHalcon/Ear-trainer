<template>
  <div id="prl1" class="container p-2">
    <div id="str">
      <h3 class="text-center white-font ">TEST LEVEL 1</h3>
    </div>
    <div class="innerContainer">
      <div
        class="qbox"
        v-for="product in products.slice(a, b)"
        :key="product.id"
      >
        <h4 class="question mb-3">{{ product.text }}</h4>
        <div id="audio" class="player-wrapper"></div>
        <audioPlayerbtn v-bind:fileName="product.file" />
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
        <span id="answer">{{ product.correct }}</span>
      </div>
      <div id="gameResoult" v-if="endList">
        <h3 class="mb-3">Your test resoults:</h3>
        <span class="ga-font">Good answers: {{ goodA }}</span>
        <span class="ba-font">Bad answers: {{ badA }}</span>
      </div>
      <div class="buttons" id="testBtnBox">
        <button
          class="btn btn-light"
          v-show="backBtn"
          @click="$router.push('/')"
        >
          Back to chapter menu
        </button>
        <button id="nextItem" class="btn btn-dark" v-on:click="nextQuestion">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import audioPlayerbtn from "../components/audioPlayerbtn.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsSize() {
      return this.$store.state.products.length;
    },
    goodA() {
      return this.$store.state.goodA;
    },
    badA() {
      return this.$store.state.badA;
    }
  },
  name: "testOne",
  selected: "",
  components: {
    audioPlayerbtn
  },
  data() {
    return {
      a: 0,
      b: 1,
      endList: false,
      iteratorList: 0,
      selectedAns: "a",
      isSelected: false,
      backBtn: false
    };
  },
  methods: {
    selectAnswer(e) {
      this.isSelected = true;
      console.log(e.currentTarget.value);
      let odp = e.currentTarget.value;
      this.selectedAns = odp;
      let correctAnswer = document.getElementById("answer").innerText;
      console.log(correctAnswer);
      if (odp === correctAnswer) {
        console.log("good answer");
      } else {
        console.log("wrong answer");
      }
    },
    increaseGA() {
      this.$store.commit("increaseGA");
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
    backToMenu() {
      this.resetGame();
      //router.push('/train');
    },
    checkIfSelected() {
      console.log("sprawdzam czy zaznaczone");
      console.log(this.selecedAns);
      if (this.isSelected == false) return false;
      else return true;
    },
    resetGame() {
      console.log("reset game now");
      this.a = 0;
      this.b = 1;
      this.endList = false;
      this.iteratorList = 0;
      this.selectedAns = "a";
      this.resetGA();
      this.resetBA();
      let btn = document.getElementById("nextItem");
      btn.innerHTML = "Next";
      document.getElementById("answerWarning").style.display = "none";
    },
    nextQuestion() {
      let warDiv = document.getElementById("answerWarning");

      if (this.endList === true) {
        this.resetGame();
        this.backBtn = false;
        document.getElementById("testBtnBox").style.justifyContent = "flex-end";
      } else {
        if (this.checkIfSelected() == true) {
          this.isSelected = true;
          warDiv.style.display = "none";
          this.a++;
          this.b++;
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
            document.getElementById("testBtnBox").style.justifyContent =
              "space-between";
            this.backBtn = true;

            document.getElementById("answerWarning").style.display = "none";
          }
        } else {
          warDiv.style.display = "block";
        }
        this.isSelected = false;
      }
    },
    opop() {
      let audio1 = document.getElementById("titleSong").textContent;
      let aud = new Audio(audio1);
      aud.play();
    }
  },
  mounted() {
    console.log("test mouned");
    this.resetGame();
  }
};
</script>
<style lang="scss" scoped>
#str {
  margin-top: 5vh;
  width: 100%;
  background-color: cornflowerblue;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.question {
  text-align: center;
}
#str > h2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.qbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
span {
  display: flex;
  font-size: 1.5em;
}
.ga-font {
  color: green;
}
.ba-font {
  color: red;
}
.white-font {
  color: honeydew;
  font-weight: bold;
}
.buttons {
  background-color: darkgray;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
span #answer {
  display: hidden;
}
#gameResoult {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6vh;
  margin-bottom: 10vh;
}
#prl1 {
  background-color: rgba(255, 255, 255, 0.7);
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.innerContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;
}
h4 {
  font-weight: bold;
}
#answer {
  display: none;
}
.btn:active {
  background-color: gray !important;
}
.btn:hover {
  background-color: gray !important;
}
.active {
  background-color: gray !important;
}

@media (max-width: 700px) {
  #str {
    height: 10vh;
    margin-bottom: 0%;
  }
  #prl1 {
    background-color: rgba(255, 255, 255, 0.7);
    min-height: 86vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .qbox {
    margin-top: 0;
  }
}
@media (max-width: 800px) and (orientation: landscape) {
  #prl1 {
    min-height: 90vh;
    margin-bottom: 2vh;
  }
  #str {
    height: 20vh;
  }
  #prl1 {
    background-color: rgba(255, 255, 255, 0.7);
    min-height: 160vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .qbox {
    margin-top: 0;
  }
}
</style>
