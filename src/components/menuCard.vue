<template>
  <div class="menuCard">
    <b-card
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      v-bind:img-src="imageLink"
      img-top
    >
      <h3>{{ title }}</h3>
      <b-card-text>
        {{ innerText }}
      </b-card-text>

      <b-button
        href="#"
        variant="primary"
        @click="
          $router.push({
            name: destination,
            params: {
              chapterMode: chapter 
            }
          })
        "
        >Play</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "menuCard",
  mainText: "",
  props: ["title", "imageLink", "destination", "chapter", "innerText"]
};
</script>
<style scoped>
router-link {
  color: white;
}

@media (max-width: 700px) {
  .menuCard {
    margin-top: 30px;
  }
}
</style>
