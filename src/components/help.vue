<template>
  <div class="container-fluid" id="helpDiv">
    <div class="container-fluid" id="hdInner">
      <svg
        id="ex"
        v-on:click="ifHelpChange"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 4" clip-path="url(#clip0)">
          <rect
            id="Rectangle 4"
            x="7.8649"
            y="1"
            width="80"
            height="11"
            rx="5.5"
            transform="rotate(45.6425 7.8649 1)"
            fill="black"
          />
          <rect
            id="Rectangle 5"
            x="63.1107"
            y="6.58189"
            width="80"
            height="11"
            rx="5.5"
            transform="rotate(133.572 63.1107 6.58189)"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="64" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2 style="color:cornflowerblue">About App</h2>
      <h3>
        Welcome to the Ear Trainer – a web app that will help you to increase
        you music hearing skills. Start with the train mode where you can learn
        theory of intervals and triands. Than we prepared for you some exercises
        to train the variuos music skills. If you feel confident with your
        knowladge go to test mode and try to face with test contains various
        questions from known chapters.
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
  computed: {
    ifHelp() {
      return this.$store.state.ifHelp;
    }
  },
  methods: {
    ifHelpChange() {
      this.$store.commit("ifHelpChange");
    }
  }
};
</script>
<style scoped>
#helpDiv {
  background-color: rgba(71, 71, 71, 0.4);
  height: 88vh;
  color: ghostwhite;
  padding: 10vh;
  z-index: 2;
  position: absolute;
  top: 12vh;
  display: flex;
  align-items: center;
}
#hdInner {
  height: 300px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h2 {
  margin-bottom: 4vh;
}
svg#ex {
  position: fixed;
  top: 28vh;
  right: 3vw;
  width: 2.5vw;
  z-index: 99999;
}
@media (max-width: 700px) {
  svg#ex {
    width: 6vw;
    right: 5vw;
    top: 26vh;
  }
  #helpDiv {
    height: 200vh;
    padding: 6vh;
    top: 12vh;
    align-items: flex-start;
    justify-content: center;
  }
  #hdInner {
    margin-top: 5vh;
    margin-right: auto;
    margin-left: auto;
    position: fixed;
    height: 60vh;
    background-color: grey;
    align-items: center;
    display: flex;
  }
  h3 {
    font-size: 1.3rem;
  }
}
@media (max-width: 700px) and (orientation: landscape) {
  svg#ex {
    width: 4vw;
    right: 2vw;
    top: 15vh !important;
  }
  #helpDiv {
    height: 200vh;
    /*padding:6vh;*/
    top: 0px;
    align-items: none;
    justify-content: center;
  }
  #hdInner {
    /*margin-top: 5vh;*/
    margin-bottom: 2vh;
    margin-right: auto;
    margin-left: auto;
    position: fixed;
    height: 70vh;
    background-color: grey;
    align-items: center;
    display: flex;
  }
  .container-fluid {
    margin: none !important;
  }
}
</style>
