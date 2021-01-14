<template v-if="triadExVisibility" :key="updateBox">
  <div id="TriadBox" class="container p-2">
    <div class="innerContainer">
      <div class="qbox" v-for="e in exerTest.slice(a, b)" :key="e.id">
        <div id="audio" class="player-wrapper"></div>
        <h2>{{ e.text }}</h2>
        <audio id="id1" v-bind:src="e.file"></audio>
        <p id="titleSongE">{{ e.file }}</p>
        <button v-on:click="opop" class=" btn btn-dark">Play</button>
        <span > {{ qid }} {{ e.qid }}</span>
        <button
          class="btn btn-primary m-2 ansBtn"
          v-on:click="selectAnswer"
          value="a"
        >
          {{ e.a }}
        </button>
        <button
          class="btn btn-primary m-2 ansBtn"
          v-on:click="selectAnswer"
          value="b"
        >
         {{ e.b }}
        </button>
        <button
          class="btn btn-primary m-2 ansBtn"
          v-on:click="selectAnswer"
          value="c"
        >
         {{ e.c }}
        </button>
        <span id="answer">{{ e.correct }}</span>
        <div id="results">
          <span v-if="correctA" class="textGood"
            >Great! This is correct answer</span
          >
          <span v-if="!correctA" class="textBad"
            >I'm sorry this is wrong answer. Good answer is
            {{ e.correct }}</span
          >
        </div>
      </div>

      <div class="buttons">
        <button id="ChAItem" class="btn btn-light" v-on:click="checkA">
          Check answer
        </button>
        <button
          id="nextItem"
          class="btn btn-dark ml-3"
          v-on:click="nextQuestion"
        >
          Next question
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import db from "@/firebase/init";

export default {
  props: ["qid"],
  computed: {
    triadExVisibility() {
      return this.$store.state.triadExVisibility;
    },
    exerTest() {
      return this.$store.state.exerTest;
    },
    exercises() {
      return this.$store.state.exercises;
    },
    productsSize() {
      return this.$store.state.exerTest.length;
    },
    updateBox() {
      return this.$store.state.updateBox;
    },
    tNumber() {
      return this.$store.state.tNumber;
    }
  },
  name: "triadTestBox",
  selected: "",
  components: {},
  data() {
    return {
      Triads: 0,
      TTBkey: 0,
      a: 0,
      b: 1,
      endList: false,
      iteratorList: 0,
      selectedAns: "a",
      isSelected: false,
      correctA: false,
      ext: []
    };
  },
  methods: {
    cIncrease() {
      this.$store.commit("cIncrease");
    },
    dIncrease() {
      this.$store.commit("dIncrease");
    },
    increaseTNumber() {
      this.$store.commit("increaseTnumber");
    },

    selectAnswer(e) {
      document.getElementById("results").style.display = "none";
      this.isSelected = true;
      console.log(e.currentTarget.value);
      let odp = e.currentTarget.value;
      this.selectedAns = odp;
      let correctAnswer = document.getElementById("answer").innerText;
      console.log(correctAnswer);
      if (odp === correctAnswer) {
        console.log("good answer");
        this.correctA = true;
      } else {
        console.log("wrong answer");
        this.correctA = false;
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
    exerFilter() {
      this.$store.commit("exerFilter");
    },
    resetBA() {
      this.$store.commit("resetBA");
    },
    Fetchquestions() {
      this.exercises.splice();
      db.collection("triadsE")
        .where("qid", "==", this.qid)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log("dodaje" + doc.data() + doc.id);
            let product = doc.data();
            product.id = doc.id;
            this.ext.push(product);
          });
        });
    },
    created() {
      this.Fetchquestions();
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
    },
    nextTriad() {
      console.log("next Triad f" + this.tNumber);
      if (this.tNumber == 1) {
        document.getElementById("endPanel").style.display = "flex";
        document.getElementById("TriadBox").style.display = "none";
        document.getElementById("sectionTitle").style.display = "none";
      } else {
        console.log("NEXT TRIAD");
        this.cIncrease();
        this.dIncrease();
        document.getElementById("keyBox").style.display = "flex";
        console.log("1");
        document.getElementById("TriadBox").style.display = "none";
        console.log("2");
        //document.getElementById("sectionTitle").style.display="flex";
        this.increaseTNumber();
        console.log("hdsgjhdgsj" + this.tNumber + this.c);
      }
    },
    nextQuestion() {
      let warDiv = document.getElementById("answerWarning");
      if (this.checkIfSelected() == true) {
        console.log(this.endList);
        this.isSelected = true;
        warDiv.style.display = "none";
        console.log("next yes");
        if (this.endList === true) {
          this.nextTriad();
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
            btn.innerHTML = "Next triad";
          }
          if (this.iteratorList === this.productsSize) {
            this.endList = true;
            btn.innerHTML = "Play again";
            this.nextTriad();
          }
        }
        this.isSelected = false;
      } else {
        warDiv.style.display = "block";
      }
    },
    checkA() {
      let warDiv = document.getElementById("answerWarning");
      if(this.checkIfSelected() == true) {
        
      document.getElementById("results").style.display = "flex";
      }else{
warDiv.style.display = "block";
      }
    },
    opop() {
      let audio1 = document.getElementById("titleSongE").textContent;
      console.log(audio1);
      let aud = new Audio(audio1);
      aud.play();
    }
  }
};
</script>
<style lang="scss" scoped>
#titleSongE {
  display: none;
}
.qbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
span {
  display: flex;
  font-size: 20px;
}
.buttons {
  background-color: darkgray;
  width: 80%;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
span #answer {
  display: hidden;
}
#gameResoult {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#TriadBox {
  align-items: center;
  /*width: 80%;*/
  width:100%;
  margin: none;
  // display:none;
}
.innerContainer {
  width: 100%;
  padding: 30px;
  margin: 0;
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

#results {
  display: none;
}
.textGood {
  color: darkgreen;
  font-style: bold;
}
@media (max-width: 700px) {
  h2 {
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 10%;
  }
  .textGood{
    color:green;
  }
  .textBad{
    color:red;
  }
  span {
    font-size: 1.2em;
  }
  .qbox {
    margin-bottom: 3vh;
    width:100%;
  }
  #TriadBox {
    width: 100%;
  }
  .buttons{
    width: 100%;
  }
}

@media all and (max-width: 840px) and (orientation: landscape) {
  #main {
    color: red;
    flex-wrap: wrap;
    
  }
  .qbox {
    margin-bottom: 3vh;
  }
}
</style>
