<template>
  <div class="container">
    <div id="main" class="row">
      <menuCard
        title="Learn material"
        imageLink="covers/LI.png"
        destination="ILBox"
        class=" mc col-12 col-lg-6 col-sm-12"
        innerText="Learn the most important information about the intervals. Listen to the examples that will make it easier for you to memorize the consonance. This will enable you to do the practical exercises."
      ></menuCard>
      <menuCard
        title="Train intervals"
        imageLink="covers/TI.png"
        destination="trainModeTest"
        chapter="I1"
        class=" mc col-12 col-lg-6 col-sm-12"
        innerText="Try to recognise the played interval. In each example there are 3 answer options but don’t worry, you can always use the virtual keyboard, which will play the sounds for you – this will certainly be helpful! "
      ></menuCard>
    </div>
  </div>
</template>

<script>
import menuCard from "../components/menuCard.vue";
import db from "@/firebase/init";
export default {
  name: "modeSite",
  components: {
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
    margin-top: 3vh;
    padding-bottom: 2vh;
  }
  .menuCard {
    margin-top: 30px !important;
  }
}
@media (max-width: 800px) and (orientation: landscape) {
  #main {
    height: 100%;
    margin-top: 3vh;
    padding-bottom: 2vh;
    padding-top: 3vh;
    margin-bottom: 3vh;
  }
}
</style>
