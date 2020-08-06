<template>
<div id="prl1" class="container p-2">
  <div class>
    <h3 class="text-center">List 1</h3>
        <div  class="qbox" v-for="product in products.slice(a,b)" :key="product.id">
          <h4 class="question">{{product.text}}</h4>
          <div id="audio" class="player-wrapper">
<!--	<audio-player file='product.file'></audio-player>-->
</div>
           <audio id="id1" v-bind:src="product.file"> </audio><p id="titleSong">{{ product.file }}</p> <button v-on:click="opop">Play</button>
            <button class="btn btn-primary m-2" v-on:click="selectAnswer" value="a">{{product.a}}</button>
            <button class="btn btn-primary m-2" v-on:click="selectAnswer" value="b"> {{product.b}}</button>
            <button class="btn btn-primary m-2" v-on:click="selectAnswer" value="c"> {{product.c}}</button>
            <span id="answer">{{product.correct}}</span>
        </div>
         <div id="gameResoult" v-if="endList">
    <h2>Your game resoult:</h2>
    <span>Good answers: {{goodA}}</span>
    <span>Bad answers: {{badA}}</span>
    </div>
    <div class="buttons">
      <button id="nextItem" class="btn btn-dark" v-on:click="nextQuestion" :disabled="endList">Next</button>

      </div>

  </div>
 
</div>
</template>


<script>
// @ is an alias to /src


export default {
    computed:{
    products(){
      return this.$store.state.products;
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
  name:"productlistone",
  selected:'',
  components: {

  },
    data(){
    return{
    a:0,
    b:1,
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
    nextQuestion(){
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
          //this.showResoult();
      };
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
}
span{
  display:flex;
  background-color: cornflowerblue;
  border: 2px solid white;
}
.buttons{
  background-color: darkgray;
  width:50%;
  margin:auto;
  padding: 10px;
  display:flex;
  justify-content:flex-end;
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

</style>
