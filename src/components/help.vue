<template>
  <div class="container-fluid" id="helpDiv">
      <div class="container-fluid" id="hdInner">
    <h3>
      Welcome to the Ear Trainer – a web app that will help you to increase you
      music hearing skills. Start with the train mode where you can learn theory
      of intervals and triands. Than we prepared for you some exercises to train
      the variuos music skills. If you feel confident with your knowladge go to
      test mode and try to face with test contains various questions from known
      chapters.
    </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      IP: true,
      CP: false
    };
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style scoped>
#helpDiv{
    background-color: rgba(71, 71, 71, 0.4);
    height:88vh;
    color:ghostwhite;
    padding:10vh;
    z-index: 2;
    position: absolute;
    top:12vh;
    display: flex;
    align-items: center;
    
}
#hdInner{
    height:200px;
    background-color: grey;
}
</style>
