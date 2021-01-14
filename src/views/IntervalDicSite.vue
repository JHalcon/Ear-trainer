<template>
  <div id="main" class="container p-1">
    <div id="prev" v-show="!firstStep">
      <h3 style="color:white">Try to face with well known from music lessons exercise - inerval dictation!</h3>
      <h4 class="m-3">
        At first you have to listen to the whole record and than write down
        interval symbols in the correct order.
       <span style="text-align:center"> After that you'll can see completed transcription with highlighted intervals</span>
      </h4>
      <h4 style="color:cornflowerblue" class="mb-4">Good luck and have fun!</h4>
      <button class="btn btn-primary" v-on:click="toDic">Lets try</button>
    </div>
    <div id="firstStepBox" v-show="firstStep">
      <div id="contentBox" v-for="i in IDics.slice(c, d)" :key="i.id">
        <div id="firstStep" v-show="!trVisible">
          <div class="strip">
            <h3 id="sectionTitle">
              Listen to the whole dictation
            </h3>

            <audio-player :fileName="i.fileAll" />
          </div>
          <h3 class="blueText">
            White down interval symbols in the correct pleace
          </h3>

          <IntervalDicForm
            v-bind:FI="i.firstI"
            v-bind:SI="i.secondI"
            v-bind:THI="i.thirdI"
            v-bind:FOI="i.fourthI"
            v-bind:FII="i.fifthI"
          />
          <button class="btn btn-primary" v-on:click="goToTrans">
            Go to transcription
          </button>
        </div>

        <!--<h2 class="triadInfo">{{triad.qid}}</h2>-->
        <div id="transcryption" v-show="trVisible">
          <div>
            <svg
              id="ex"
              v-on:click="makeSmallImg"
              v-show="imgBigVisible"
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
          </div>
          <img
            class="transcryptionImg"
            id="trImg"
            src="IDic1.jpg"
            v-on:click="makeBigImg"
          />
          <div class="cartonsBox">
            <div class="carton" id="c1"></div>
            <div class="carton" id="c2"></div>
            <div class="carton" id="c3"></div>
            <div class="carton" id="c4"></div>
            <div class="carton" id="c5"></div>
          </div>
          <!--
          <div class="cartonsBox2">
            <div class="row">
            <div class="carton2 col-6" id="c1"></div>
            <div class="carton2 col-6" id="c2"></div>
            </div>
            <div class="row">
            <div class="carton2 col-4" id="c3"></div>
            <div class="carton2 col-4" id="c4"></div>
            <div class="carton2 col-4" id="c5"></div>
            </div>
          </div>
          -->

          <audio-player :fileName="i.fileAll" class="invisible" />
          <button class="btn btn-primary mt-3" style="margin:0" v-on:click="Animate">
            Show intervals
          </button>
          <button v-on:click="resetD" class="btn btn-secondary mt-3">
            Reset transcription
          </button>
          <button v-on:click="backToiInt" class="btn btn-light mt-3">
            Back to dictation view
          </button>
        </div>

        <div id="endPanel">
          <h2>End of the chapter</h2>
          <button class="btn btn-primary">
            Play again
          </button>
          <button class="btn btn-secondary" @click="$router.push('/train')">
            Back to chapter menu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import audioPlayer from "../components/audioPlayer.vue";
import IntervalDicForm from "../components/IntervalDicForm.vue";
export default {
  components: {
    audioPlayer,
    IntervalDicForm
  },
  data() {
    return {
      c: 0,
      d: 1,
      name: "intervalDicSite",
      endOfMode: false,
      prevVisible: true,
      trVisible: false,
      fstopped: false,
      imgBigVisible: false,
      firstStep:false,
    };
  },
  computed: {
    IDics() {
      return this.$store.state.IDics;
    }
  },
  methods: {
    toDic() {
      console.log("ssfd");
      //this.prevVisible = false;
      this.firstStep = true;
    },
    resetD() {
      this.fstopped = true;
      let p = document.getElementById("player");
      let c1 = document.getElementById("c1");
      let c2 = document.getElementById("c2");
      let c3 = document.getElementById("c3");
      let c4 = document.getElementById("c4");
      let c5 = document.getElementById("c5");
      c1.style.backgroundColor = "cornflowerblue";
      c1.innerHTML = "";
      c2.style.backgroundColor = "cornflowerblue";
      c2.innerHTML = "";
      c3.style.backgroundColor = "cornflowerblue";
      c3.innerHTML = "";
      c4.style.backgroundColor = "cornflowerblue";
      c4.innerHTML = "";
      c5.style.backgroundColor = "cornflowerblue";
      c5.innerHTML = "";
      p.pause();
      p.currentTime = 0;
    },
    checkDic() {
      console.log();
    },
    goToTrans() {
      this.trVisible = true;
      console.log(this.trVisible);
    },
    backToiInt(){
      this.trVisible = false;
    },
    Animate() {
      let au = document.getElementById("player");
      au.play();
      let c1 = document.getElementById("c1");
      let c2 = document.getElementById("c2");
      let c3 = document.getElementById("c3");
      let c4 = document.getElementById("c4");
      let c5 = document.getElementById("c5");
      c1.style.backgroundColor = "white";
      c1.innerHTML = "2";
      setTimeout(() => {
        if (this.fstopped == false) {
          c1.style.backgroundColor = "cornflowerblue";
          c2.style.backgroundColor = "white";
          c2.innerHTML = "3";
        } else {
          return;
        }
        setTimeout(() => {
          if (this.fstopped == false) {
            c2.style.backgroundColor = "cornflowerblue";
            c3.style.backgroundColor = "white";
            c3.innerHTML = "1";
          } else {
            return;
          }
          setTimeout(() => {
            if (this.fstopped == false) {
              c3.style.backgroundColor = "cornflowerblue";
              c4.style.backgroundColor = "white";
              c4.innerHTML = "3>";
            } else {
              return;
            }
            setTimeout(() => {
              if (this.fstopped == false) {
                c4.style.backgroundColor = "cornflowerblue";
                c5.style.backgroundColor = "white";
                c5.innerHTML = "2>";
              } else {
                return;
              }
              setTimeout(() => {
                if (this.fstopped == false) {
                  c5.style.backgroundColor = "cornflowerblue";
                } else {
                  return;
                }
              }, 12000);
            }, 12000);
          }, 11000);
        }, 11000);
      }, 11000);
      // c1.style.backgroundColor = "white";
    },
    bigImg() {
      console.log("dhh");
    },
    makeBigImg(){
      document.getElementById("trImg").className = "fullscreen";

      this.imgBigVisible = true;
    },
    makeSmallImg() {
      document.getElementById("trImg").className = "transcryptionImg";
      this.imgBigVisible = false;
    }
  }
};
</script>
<style scoped>
* {
  font-family: Roboto;
}
#transcryption {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#firstStepBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*height:100%;*/
  margin-top: 2%;
  width: 100%;
}
#ex {
  position: fixed;

  top: 22vh;
  right: 4vw;
  width: 4vw;
  z-index: 99999;
}
#main {
  height: 84vh;
}
#firstStep {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
#NS {
  width: 50%;
}
.fullscreen {
  z-index: 9999;
  position: fixed;
  margin: 0 auto;
  width: 90%;
  height: 20%;
  top: 30%;
  left: 5%;
  background-color: #0ff;
}
.cartonsBox {
  display: flex;
  justify-content: space-around;
  width: 55vw;
  padding-left: 30px;
  margin-bottom: 30px;
}
.cartonsBox2 {
  display: flex;
  justify-content: space-around;
  width: 55vw;
  padding-left: 30px;
  margin-bottom: 30px;
}
.strip {
  background-color: cornflowerblue;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blueText{
  color: cornflowerblue;
}
.transcryptionImg {
  width: 85%;
}
.carton {
  width: 100px;
  height: 120px;
  background-color: cornflowerblue;
  font-size: 40px;
  border-radius: 5px;
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.carton2 {
  width: 100px;
  height: 120px;
  background-color: cornflowerblue;
  font-size: 40px;
  border-radius: 5px;
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 40%;
}
#imputsI {
  margin: 40px !important;
}
#prev {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
}
h4{
  text-align: center;
}
span{
  text-align: center;
}

#main {
  
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 2vh;
  width: 80%;
}

/*div {
  display: flex;
  justify-content: center;
  align-items: center;
}*/
#contentBox {
  display: flex;
  flex-direction: column;
flex-wrap: wrap;
  width: 100%;
}
.invisible {
  display: none;
}
rect#rect3850 {
  fill: rgb(185, 0, 0) !important;
}
#TriadBox {
  display: none;
}
.whiteText {
  color: cornsilk;
}
h3 {
  margin: 20px !important;
}
#prev{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#endPanel {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-primary {
  margin: 10px;
}

@media (max-width: 700px) {
  .cartonsBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*justify-content: space-around;*/
    width: 55vw;
    padding-left: 30px;
    margin-bottom: 30px;
  }
  
  #main {
    height: 140vh;
    width: 100%;
    margin-bottom: 2vh;
  }
  h3 {
    font-size: 1.4em;
  }
  .btn {
    margin: 1%;
  }
  audio {
    width: 70%;
  }
}
@media (max-width: 700px) and (orientation: landscape) {
  #main {
    height: 270vh;
  }
  .carton{
    width:50%;
  }
  .fullscreen {
  width: 90%;
  height: 40%;
  top:40%;
  
}
}
</style>
