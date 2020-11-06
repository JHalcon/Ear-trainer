<template v-if="triadExVisibility" :key="updateBox">
<div id="ILB" class="container">
  <div class="allCentered" v-for="t in intervalsT.slice(a,b)" :key="t.id">
    <div class="row" id="widthDiv">
      <div class="col-6"><img v-bind:src="t.img"></div>
      <div class="col-6"><h3>{{t.name}}</h3>
        <h4>Number symbol: {{t.symbol}}</h4>
    <h4>Semitones: {{t.poltony}}</h4>
      
      
      </div>
    </div>
    
    
    <keyboardBox tryb="I" v-bind:FN="t.firstNote" v-bind:SN="t.secondNote"/>
    <span id="titleSong">{{t.file}}</span>
    <button class="btn btn-secondary" v-on:click="nextT">Next</button>
    </div>
</div>
</template>


<script>
// @ is an alias to /src
//import db from "@/firebase/init";
import keyboardBox from "../components/keyboardBox.vue";
export default {
  //props:["qid"],

    computed:{
 intervalsT () {
      return this.$store.state.intervalsT ;
  
      },
    },
  name:"ILBox",
  selected:'',
  components: {
keyboardBox,
  },
    data(){
    return{
     a:0,
    b:1,
    endOfList:false,
    }
  },
  methods:
 { 
   
  nextT(){

   this.a++;
      this.b++;
      console.log("hfhgfgf"+this.a);
 },

  
  },
   
};
</script>
<style lang="scss" scoped>
#ILB{
  background-color: rgba(255, 255, 255, 0.7);
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;
margin-top: 1%;
margin-bottom: 1%;
padding:15px;
}
.allCentered{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
#widthDiv{
  width: 100%;
  margin:10px;
}
</style>
