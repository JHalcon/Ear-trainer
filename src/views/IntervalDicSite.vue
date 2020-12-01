<template>
<div id="main" class="container p-1">
    <div id="prev"  v-if="prevVisible"><h3>Now You can do intervals dictation</h3>
    <h4>At first you have to listen to the whole record and than write down interval symbols 
    in the corect order</h4>
    <h4>Good luck and have fun!</h4>
    <button class="btn btn-second" v-on:click="toDic">Lets try</button>
    </div>
    <div v-if="!prevVisible">
   <div id="contentBox"   v-for="i in IDics.slice(c,d)" :key="i.id">
      
      <h3 id="sectionTitle">Listen to the whole dictation</h3>
      <audioPlayer v-bind:filename="i.fileAll"/>
      <h3>White down interval symbols in the correct pleace</h3>


      <IntervalDicForm v-bind:FI="i.firstI"  v-bind:SI="i.secondI" v-bind:THI="i.thirdI" v-bind:FOI="i.fourthI" v-bind:FII="i.fifthI" />

   <!--<h2 class="triadInfo">{{triad.qid}}</h2>-->

    <div id="endPanel">
       <h2>End of the chapter</h2>
    <button class="btn btn-primary" v-on:click="resetChapter">Play again</button>
    <button class="btn btn-secondary" @click="$router.push('/train')">Back to chapter menu</button>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
import audioPlayer from "../components/audioPlayer.vue";
import IntervalDicForm from "../components/IntervalDicForm.vue";
export default {
    components:{
        audioPlayer,
        IntervalDicForm
    },
data(){
   return{
   c:0,
    d:1,
    name: "intervalDicSite",
    endOfMode:false,
    prevVisible:true,
   }
}, 
computed:{
    IDics(){
      return this.$store.state.IDics;
    },
   
},
   methods:
    {  
        toDic(){
            this.prevVisible = false;

        },
        
        
        checkDic(){
            console.log()
        }

    }
}
</script>
<style scoped>
*{
   font-family: Roboto;
}
img{
    width:40%;
}
#imputsI{

   margin:40px !important;
}
#prev{
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#main{
   display: flex;
   flex-direction: column;
   background-color: rgba(255, 255, 255, 0.7);
  height:84vh;
  display: flex;
  align-items: center;
  margin-top:2vh;
  width:80%,
}

div{
   display:flex;
   justify-content: center;
   align-items: center;

}
#contentBox{
   display: flex;
   flex-direction: column;
   width: 80vw;
}
.invisible{
   display: none;
}
rect#rect3850{

    fill: rgb(185, 0, 0) !important;
}
#TriadBox{
   display:none;
   
}
h3 {
   margin:20px !important;
}
#endPanel{
   display:none;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
 .btn-primary{
  margin:10px;
}

</style>