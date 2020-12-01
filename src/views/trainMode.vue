<template>
  <div class="container">
   <!-- <mainBanner></mainBanner>-->
    <div id="main">
      <menuCard title="Intervals chapter 1" imageLink="covers/I1.png" destination="modeSite"></menuCard>
      <menuCard title="Note in context chapter 1" imageLink="covers/ftic.png" destination="noteInContext"></menuCard>
      <menuCard title="Intervals chapter 2" imageLink="covers/I1.png" destination="trainModeTest" chapter="I1"></menuCard>
       
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import mainBanner from "../components/Banner.vue";
import menuCard from "../components/menuCard.vue";
//import firebase from "@/firebase/init"
import db from "@/firebase/init"
//import VueFire from "VueFire"
export default {
  name: "trainMode",
  components: {
   // mainBanner,
    menuCard
   
  },
  methods:{
    created(){
      console.log("hfshgfs")
     db.collection.get("testOne").then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc);
            });
          }
        );
  }
    }
  };
</script>
<style scoped>
#main{
display: flex;
flex-direction: row;
padding-top:10vh;
justify-content: space-around;
height:88vh;
background-color: rgba(255, 255, 255, 0.7);
}
</style>