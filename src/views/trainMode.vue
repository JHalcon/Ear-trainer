<template>
  <div class="container">
    <div id="main" class="row">
      <menuCard
        title="Intervals chapter 1"
        imageLink="covers/I1.png"
        destination="modeSite"
        class="col-12 col-lg-4 col-sm-12"
        innerText="To begin with, get to know the intervals – the basic distances between sounds.
         This chapter will help you to learn about the essential theory 
         about the easiest intervals and remember how them sound. Then you can start doing the exercises."
      ></menuCard>

      <menuCard
        title="Interval dictation chapter 1"
        imageLink="covers/intervalDictation.png"
        destination="intervalDicSite"
        chapter="I1"
        class="col-12 col-lg-4 col-sm-12"
        innerText="The interval dictation is one of the more advanced task. You will have to recognise a set of intervals and write it down. We have prepared a full transcription of the dictation, so that you could check exactly what has been played."
      ></menuCard>
      <menuCard
        title="Note in context chapter 1"
        imageLink="covers/ftic.png"
        destination="noteInContext"
        class="col-12 col-lg-4 col-sm-12"
        innerText="Note in context is a perfect exercise whereby you can learn how to identify various degrees of consonance.
         Listen to the example, and then try to recognise which degree of a triad has been played."
      ></menuCard>
    </div>
  </div>
</template>

<script>
import menuCard from "../components/menuCard.vue";
import db from "@/firebase/init";
export default {
  name: "trainMode",
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
  align-items: center;
  justify-content: center;
}
@media (max-width: 700px) {
  .row {
    margin-bottom: 20px;
    margin-top: none;
    justify-content: center;
    display: flex;
  }
  .menuCard {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #main {
    height: 100%;
    margin-top: 3vh;
  }
}
@media (max-width: 800px) and (orientation: landscape) {
  #main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: 450vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    background-color: rgba(255, 255, 255, 0.7);
  }
}
</style>
