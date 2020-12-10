<template
  ><div>
    <trainBox v-bind:chapter="chapterMode"></trainBox>
  </div>
</template>

<script>
// @ is an alias to /src
import trainBox from "../components/trainBox.vue";

//import ILBox from "../components/intervalLearnBox.vue"
export default {
  props: ["chapterMode"],
  name: "trainModeTest",
  components: {
    trainBox
  }
};
</script>
<style></style>
