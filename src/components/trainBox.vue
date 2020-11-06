<template>
<div id="prl1" class="container p-2">
  <div class="innerContainer">
        <div  class="qbox" v-for="product in products.slice(a,b)" :key="product.id">
          <h3 class="text-center">{{testName}}</h3>
          <h4 class="question">{{product.text}}</h4>
          <div id="audio" class="player-wrapper">
<!--	<audio-player file='product.file'></audio-player>-->
</div>
           <audio id="id1" v-bind:src="product.file"> </audio><p id="titleSong">{{ product.file }}</p> <button v-on:click="opop" class="btn btn-secondary">Play</button>
            <button class="btn btn-primary m-2 ansBtn" v-on:click="selectAnswer" value="a">{{product.a}}</button>
            <button class="btn btn-primary m-2 ansBtn" v-on:click="selectAnswer" value="b"> {{product.b}}</button>
            <button class="btn btn-primary m-2 ansBtn" v-on:click="selectAnswer" value="c"> {{product.c}}</button>
            <span id="answer">{{product.correct}}</span>
            <answerBox v-bind:FN="product.firstNote" v-bind:SN="product.secondNote"></answerBox>
        </div>
         <div id="gameResoult" v-if="endList">
    <h2>Your game resoult:</h2>
    <span>Good answers: {{goodA}}</span>
    <span>Bad answers: {{badA}}</span>
    </div>
    
    <div class="buttons">
       <button id="hint" class="btn btn-light" v-on:click="hint" >Keys hint</button>
      <button id="nextItem" class="btn btn-dark" v-on:click="nextQuestion" >Next</button>
      
      </div>

  </div>
 
</div>
</template>


<script>
// @ is an alias to /src
import answerBox from "../components/answerBox.vue"

export default {
  props:{ chapter: {
        type: String,
        default: 'I1'
      }},
    computed:{
 /* products(){
      return this.$store.getters.getData("C");
    },*/
    products(){
      return this.$store.getters.search(this.chapter);
    },
    
    
    intervals1(){
      return this.$store.state.intervals1;
    },
    productsSize(){
    return this.$store.state.products.length;
    },
    goodA(){
      return this.$store.state.goodA;
    },
    badA(){
      return this.$store.state.badA;
    }
    },
  name:"trainBox",
  selected:'',
  components: {
answerBox,
  },
    data(){
    return{
    a:0,
    b:1,
    testName:"Interwals",
    endList:false,
    iteratorList:0,
    selectedAns:'a',
    }
  },
  methods:
  {
    selectAnswer(e){
      console.log(e.currentTarget.value);
      let odp = e.currentTarget.value;
      this.selectedAns = odp;
      let correctAnswer = document.getElementById("answer").innerText;
      console.log(correctAnswer);
      if(odp===correctAnswer){
        console.log("good answer");
      }else{
        console.log("wrong answer");
      }
    },
    increaseGA(){
      this.$store.commit("increaseGA");
    },
    increaseBA(){
        this.$store.commit("increaseBA");
    },
    resetGA(){
      this.$store.commit("resetGA");
    },
    resetBA(){
      this.$store.commit("resetBA");
    },
      checkAnswer:function(){
        console.log(this.selectedAns);
     let correctAnswer = document.getElementById("answer").innerText;
     console.log("dobra odp"+correctAnswer);
     if(this.selectedAns === correctAnswer){
       console.log("good ANSWER and increase");
       this.increaseGA();
     }
     else{
       console.log("BAD ANSWER GO ON");
       this.increaseBA();
     }
  },
  showResoult(){

  },
  resetGame(){
    console.log("reset game");
   this.a=0;
    this.b=1;
    this.endList=false;
    this.iteratorList=0;
    this.selectedAns='a';
    this.resetGA();
    this.resetBA();
    let btn = document.getElementById("nextItem");
    btn.innerHTML = "Next"
  },
    nextQuestion(){
         let box = document.getElementById('ansB');
       box.style.display = "none";
      if(this.endList===true){
       this.resetGame();
      }else{
      this.a++;
      this.b++;
      console.log("hfhgfgf"+this.a);
      console.log("troll" +this.endList);
      var that = this;
      that.checkAnswer();
      this.iteratorList++;
      console.log(this.productsSize);
      let btn = document.getElementById("nextItem");
      if(this.iteratorList === this.productsSize-1){
        btn.innerHTML = "Summary";
      };
      if(this.iteratorList === this.productsSize){
          this.endList = true;
          btn.innerHTML = "Play again";
          //this.showResoult();
      };
      }
    },
    hint(){
       let box = document.getElementById('ansB');
       box.style.display = "flex";
    },
    opop(){
     // console.log(text);
     let audio1 = document.getElementById('titleSong').textContent;
      let aud = new Audio(audio1);
      aud.play();
    }
  },

  playS:function(sound){
      /*if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }*/
      console.log(sound);
    },

};
</script>
<style lang="scss">
.qbox{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:40px;
   margin-bottom:40px;
}
span{
  display:flex;
  background-color: cornflowerblue;
  border: 2px solid white;
}
.buttons{
  background-color: darkgray;
  width:80%;
  margin:auto;
  box-sizing: border-box;
  padding: 20px;
  display:flex;
  justify-content:space-between;
}
#titleSong{
  display: none;
}
span #answer{
  display:hidden;
}
#gameResoult{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
#prl1{
  background-color: rgba(255, 255, 255, 0.7);
  //height:88vh;
  height:90%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 1%;
  margin-bottom: 1%;
  
}
.innerContainer{
  width:100%;
  padding: 30px;
}
#answer{
  display:none;
}
.btn:active{
background-color: gray !important;
}
.btn:hover{
background-color: gray !important;
}
.active {
background-color: gray !important;
}
#ansB{
  display:none;
}
.ansBtn{
  width:150px;
}
</style>
