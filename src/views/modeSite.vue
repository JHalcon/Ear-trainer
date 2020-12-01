<template>
  <div class="container">
   <!-- <mainBanner></mainBanner>-->
    <div id="main">
      <menuCard title="Learn material" imageLink="covers/LI.png" destination="ILBox"></menuCard>
      <menuCard title="Train intervals" imageLink="covers/TI.png" destination="trainModeTest" chapter="I1"></menuCard>
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
  name: "modeSite",
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