<template>
  <div id="main" class="container p-1">
    <div id="prev" v-show="!firstStep">
      <h3 style="color:white">
        Try to face a well known exercise used in music schools - interval
        dictation!
      </h3>
      <img src="nuty.png" id="nuty" />
      <h5 class="m-3" style="color:white">
        Firstly, you have to listen to the whole recording and then you have to
        write down interval symbols in the correct order.
      </h5>
      <h5>
        After that you'll see a completed transcription with highlighted
        intervals
      </h5>
      <h4 style="color:rgb(72,72,72)" id="textgo" class="mb-1">
        Good luck and have fun!
      </h4>
      <button class="btn btn-primary mb-4" v-on:click="toDic">Let's try</button>
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
            src="intervalDic.png"
            v-on:click="makeBigImg"
          />
          <div class="cartonsBox">
            <div class="cb1"><div class="carton" id="c1"></div></div>
            <div class="cb1"><div class="carton" id="c2"></div></div>
            <div class="cb1"><div class="carton" id="c3"></div></div>
            <div class="cb1"><div class="carton" id="c4"></div></div>
            <div class="cb1"><div class="carton" id="c5"></div></div>
          </div>
          <audio-player :fileName="i.fileAll" class="invisible" />
          <button
            class="btn btn-primary mt-3"
            style="margin:0"
            v-on:click="Animate"
          >
            Show intervals
          </button>
          <button v-on:click="resetD" class="btn btn-secondary mt-3">
            Reset transcription
          </button>
          <button v-on:click="backToiInt" class="btn btn-light mt-3">
            Back to the dictation view
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
      firstStep: false
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
    backToiInt() {
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
            }, 11000);
          }, 11500);
        }, 11000);
      }, 11000);
    },
    bigImg() {
      console.log("dhh");
    },
    makeBigImg() {
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
  margin-top: 2%;
  width: 100%;
}
h5 {
  text-align: center;
}
#ex {
  position: fixed;
  height: 5vh;
  top: 22vh;
  right: 3vw;
  width: 4vw;
  z-index: 99999;
}
#main {
  min-height: 84vh;
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
  height: 40%;
  top: 30%;
  left: 5%;
  background-color: #0ff;
}
.cartonsBox {
  display: flex;
  justify-content: space-around;
  width: 60vw;
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
.blueText {
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
  background-color: cornflowerblue;
}
h4 {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
span {
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
  text-align: center;
}
#prev {
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

@media (max-width: 800px) {
  .cartonsBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .carton {
    width: 100px;
    height: 100px;
  }
  #prev {
    background-color: cornflowerblue;
    text-align: center;
  }
  #main {
    min-height: 100vh;
    width: 100%;
    margin-bottom: 2vh;
  }
  h3 {
    font-size: 1.8em;
  }
  .btn {
    margin: 1%;
  }
  audio {
    width: 70%;
  }
  img#nuty {
    width: 350px;
  }
  .cartonsBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
  .cb1 {
    width: 30%;
    height: 100px;
    margin: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 5vh;
  }
  .carton {
    width: 100px;
    height: 100px;
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
}
@media (max-width: 800px) and (orientation: landscape) {
  #main {
    min-height: 110vh;
  }
  .cartonsBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
  }
  .cb1 {
    width: 25%;
    height: 100px;
    align-items: center;
    justify-content: center;
    margin-bottom: 5vh;
  }
  .carton {
    width: 100px;
    height: 100px;
  }
  .fullscreen {
    width: 90%;
    height: 40%;
    top: 40%;
  }
}
@media only screen and (min-width: 1800px) {
  .cartonsBox {
    width: 47vw;
  }
  #prev {
    background-color: cornflowerblue;
    text-align: center;
    height: 60vh;
  }
  #textgo {
    color: grey;
  }
}
</style>
