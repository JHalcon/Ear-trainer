<template>
  <div>
    <figure>
      <figcaption>{{ description }}</figcaption>
      <div><audio id="player" controls :src="fileName"></audio></div>
    </figure>
  </div>
</template>

<script>
export default {
  props: ["fileName", "description"],
  name: "audioPlayer",
  data() {
    return {};
  },
  methods: {
    showme() {
      console.log(this.fileName);
    }
  }
};
</script>
<style lang="scss">
.invisible {
  display: none;
}
</style>
