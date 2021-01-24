<template
  ><div>
    <trainBox v-bind:chapter="chapterMode"></trainBox>
  </div>
</template>

<script>
import trainBox from "../components/trainBox.vue";
export default {
  props: ["chapterMode"],
  name: "trainModeTest",
  components: {
    trainBox
  }
};
</script>
<style></style>
