<template>
  <div id="prl1" class="container p-2">
    <div class="innerContainer">
      <h3 class="text-center white-font mb-4" >Level I test</h3>
      <div
        class="qbox"
        v-for="product in products.slice(a, b)"
        :key="product.id"
      >
        <h4 class="question">{{ product.text }}</h4>
        <div id="audio" class="player-wrapper">
          <!--	<audio-player file='product.file'></audio-player>-->
        </div>
        <audioPlayerbtn v-bind:fileName="product.file" />
        <!-- <audio id="id1" v-bind:src="product.file"> </audio><p id="titleSong">{{ product.file }}</p> <button v-on:click="opop" class="btn btn-primary">Play</button>-->
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
        <h2>Your test resoults:</h2>
        <span class="ga-font">Good answers: {{ goodA }}</span>
        <span class="ba-font">Bad answers: {{ badA }}</span>
      </div>
      <div class="buttons" id="testBtnBox">
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
      isSelected: false
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
    checkIfSelected() {
      console.log("sprawdzam czy zaznaczone");
      console.log(this.selecedAns);
      if (this.isSelected == false) return false;
      else return true;
    },
    resetGame() {
      console.log("reset game");
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
            document.getElementById("answerWarning").style.display = "none";
          }
        } else {
          warDiv.style.display = "block";
        }
        this.isSelected = false;
      }
    },
    opop() {
      // console.log(text);
      let audio1 = document.getElementById("titleSong").textContent;
      let aud = new Audio(audio1);
      aud.play();
    }
  }
};
</script>
<style lang="scss" scoped>
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
  width: 80%;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
span #answer {
  display: hidden;
}
#testBtnBox {
  // margin-top:20vh;
}
#gameResoult {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 10vh;
}
#prl1 {
  background-color: rgba(255, 255, 255, 0.7);
  height: 84vh;
  display: flex;
  align-items: center;
}
.innerContainer {
  width: 100%;
  padding: 30px;
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
</style>
