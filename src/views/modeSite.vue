<template>
  <div class="container">
    <!-- <mainBanner></mainBanner>-->
    <div id="main" class="row">
      <menuCard
        title="Learn material"
        imageLink="covers/LI.png"
        destination="ILBox"
        class=" mc col-12 col-lg-6 col-sm-12"
      ></menuCard>
      <menuCard
        title="Train intervals"
        imageLink="covers/TI.png"
        destination="trainModeTest"
        chapter="I1"
        class=" mc col-12 col-lg-6 col-sm-12"
      ></menuCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import mainBanner from "../components/Banner.vue";
import menuCard from "../components/menuCard.vue";
//import firebase from "@/firebase/init"
import db from "@/firebase/init";
//import VueFire from "VueFire"
export default {
  name: "modeSite",
  components: {
    // mainBanner,
    menuCard
  },
  methods: {
    created() {
      console.log("hfshgfs");
      db.collection.get("testOne").then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc);
        });
      });
    }
  }
};
</script>
<style scoped>
#main {
  display: flex;
  flex-direction: row;
  /* padding-top: 10vh;*/
  justify-content: space-around;
  align-items: center;
  height: 88vh;
  background-color: rgba(255, 255, 255, 0.7);
}
.menuCard {
  display: flex;
  justify-content: center;
}

@media (max-width: 700px) {
  .row {
    margin-bottom: 20px;
    margin-top: none;
  }
  #main {
    height: 95%;
  }
  .menuCard {
    margin-top: 30px !important;
  }
}
</style>
