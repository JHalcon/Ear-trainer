<template>
  <div class="container">
    <div id="main" class="row">
      <menuCard
        title="Intervals chapter 1"
        imageLink="covers/I1.png"
        destination="modeSite"
        class="col-12 col-lg-4 col-sm-12"
        innerText="Donec mollis, erat in venenatis dictum, ipsum urna sollicitudin lectus, eget luctus erat enim aliquet enim. Nam metus dolor, vestibulum id pretium eu, rutrum eu mauris. "
      ></menuCard>
      <menuCard
        title="Note in context chapter 1"
        imageLink="covers/ftic.png"
        destination="noteInContext"
        class="col-12 col-lg-4 col-sm-12"
        innerText="Donec mollis, erat in venenatis dictum, ipsum urna sollicitudin lectus, eget luctus erat enim aliquet enim. Nam metus dolor, vestibulum id pretium eu, rutrum eu mauris. "
      ></menuCard>
      <menuCard
        title="Interval dictation chapter 1"
        imageLink="covers/I1.png"
        destination="intervalDicSite"
        chapter="I1"
        class="col-12 col-lg-4 col-sm-12"
        innerText="Donec mollis, erat in venenatis dictum, ipsum urna sollicitudin lectus, eget luctus erat enim aliquet enim. Nam metus dolor, vestibulum id pretium eu, rutrum eu mauris. "
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
  }
}
</style>
