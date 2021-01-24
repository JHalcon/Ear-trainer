<template>
  <div id="ansB">
    <keyboardBox
      tryb="I"
      v-bind:FN="this.FN"
      v-bind:SN="this.SN"
      v-bind:file="this.file"
      v-bind:description="jshdgfjhg"
    />
  </div>
</template>
<script>
import keyboardBox from "../components/keyboardBox.vue";
export default {
  components: {
    keyboardBox
  },
  props: ["FN", "SN", "tryb", "file"],
  data() {
    return {
      name: "answerBox"
    };
  },
  methods: {
    playMusic() {
      this.$store.commit("sound");
    },
    colorBtn(key) {
      console.log("ahsdfhg");
      let btn = document.getElementById(key);
      btn.setAttribute("style", "fill:rgb(0, 0, 0) !important");
      console.log("ahgsfg");
      this.playMusic();
      console.log("cos sie dzieje");
      setTimeout(() => {
        btn.setAttribute("style", "fill:rgb(255, 255, 255) !important");
      }, 5000);
    },
    playInterval(first, second) {
      this.playMusic();
      console.log(first);
      console.log(second);
      console.log("intervallle");
      let btn2 = document.getElementById(second);
      let btn1 = document.getElementById(first);
      console.log(btn1);
      btn1.setAttribute("style", "fill:rgb(255, 0, 0) !important");
      setTimeout(() => {
        btn1.setAttribute("style", "fill:rgb(255, 255, 255) !important");
        btn2.setAttribute("style", "fill:rgb(81, 98, 247) !important");
        setTimeout(() => {
          if (btn2.classList.contains("white"))
            btn2.setAttribute("style", "fill:rgb(255,255,255) !important");
          else btn2.setAttribute("style", "fill:rgb(0,0,0) !important");
          btn1.setAttribute("style", "fill:rgb(255,255,255) !important");
          setTimeout(() => {
            btn1.setAttribute("style", "fill:rgb(255,0,0) !important");
            btn2.setAttribute("style", "fill:rgb(81, 98, 247) !important");
            setTimeout(() => {
              if (btn1.classList.contains("white")) {
                console.log("OOO");
                btn1.setAttribute("style", "fill:rgb(255,255,255) !important");
              } else {
                console.log("hgafshf");
                btn1.setAttribute("style", "fill:rgb(0,0,0) !important");
              }
              if (btn2.classList.contains("white"))
                btn2.setAttribute("style", "fill:rgb(255,255,255) !important");
              else {
                console.log("2222");
                btn2.setAttribute("style", "fill:rgb(0,0,0) !important");
              }
            }, 2000);
          }, 200);
        }, 1000);
      }, 1000);
    }
  }
};
</script>
<style scoped>
#ansB {
  min-height: 110vh;
  align-items: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  display: flex;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
svg#svg8 {
  width: 350px !important;

  height: 550px !important;
  margin-bottom: 40px;
  margin-top: 40px;
}
rect#rect3850 {
  fill: rgb(185, 0, 0) !important;
}
@media (max-width: 700px) {
  #ansB {
    min-height: 60vh;
    margin-bottom: 20px;
  }
}
</style>
