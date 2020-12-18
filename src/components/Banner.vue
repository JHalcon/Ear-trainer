<template>
  <div id="mainBanner" class="container-fluid">
    <div class="left">
      <h1>Ear Trainer</h1>
      <div class="bImg">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 477.216 477.216"
          style="enable-background:new 0 0 477.216 477.216;"
          xml:space="preserve"
        >
          <g>
            <path
              d="M453.858,105.116v-91.6c0-4.3-2.1-8.4-5.5-10.9c-3.5-2.5-8-3.3-12.1-2l-272.9,86.7c-5.6,1.8-9.4,7-9.4,12.9v91.7v0.1v175.3
		c-14.3-9.9-32.6-15.3-51.8-15.3c-20.3,0-39.6,6.1-54.3,17.1c-15.8,11.9-24.5,28-24.5,45.5s8.7,33.6,24.5,45.5
		c14.7,11,33.9,17.1,54.3,17.1s39.6-6.1,54.3-17.1c15.8-11.9,24.5-28,24.5-45.5v-212.8l245.9-78.2v156.6
		c-14.3-9.9-32.6-15.3-51.8-15.3c-20.3,0-39.6,6.1-54.3,17.1c-15.8,11.9-24.5,28-24.5,45.5s8.7,33.6,24.5,45.5
		c14.7,11,33.9,17.1,54.3,17.1s39.6-6.1,54.3-17.1c15.8-11.9,24.5-28,24.5-45.5v-222.3
		C453.858,105.116,453.858,105.116,453.858,105.116z M102.158,450.216c-28.1,0-51.8-16.3-51.8-35.6c0-19.3,23.7-35.6,51.8-35.6
		s51.8,16.3,51.8,35.6C153.958,434.016,130.258,450.216,102.158,450.216z M180.958,173.416v-63.4l245.9-78.1v63.4L180.958,173.416z
		 M375.158,363.116c-28.1,0-51.8-16.3-51.8-35.6c0-19.3,23.7-35.6,51.8-35.6s51.8,16.3,51.8,35.6
		C426.858,346.816,403.158,363.116,375.158,363.116z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
    </div>
    <div class="small_right">
      <svg
        id="humburger"
        viewBox="0 0 96 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="12" width="80" height="11" rx="5.5" fill="black" />
        <rect x="8" y="38" width="80" height="11" rx="5.5" fill="black" />
        <rect x="8" y="64" width="80" height="11" rx="5.5" fill="black" />
      </svg>
    </div>
    <div class="right">
      <div class="bImg4">
        <svg
          id="arrow"
          viewBox="0 0 88 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="$router.go(-1)"
        >
          <path
            d="M2.29088 30.8789C0.512476 32.615 0.47815 35.464 2.21421 37.2424L30.5049 66.2232C32.241 68.0016 35.09 68.0359 36.8684 66.2998C38.6468 64.5638 38.6812 61.7148 36.9451 59.9363L11.7978 34.1757L37.5585 9.02836C39.3369 7.2923 39.3712 4.44326 37.6351 2.66486C35.8991 0.886454 33.05 0.852128 31.2716 2.58819L2.29088 30.8789ZM92.4822 30.6475L5.48851 29.5993L5.38008 38.5987L92.3738 39.6468L92.4822 30.6475Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="bImg3" v-on:click="ifHelpChange">
        <svg
          id="askImg"
          viewBox="0 0 64 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3984 72.5703C21.3984 66.0078 22.1953 60.7812 23.7891 56.8906C25.3828 53 28.2891 49.1797 32.5078 45.4297C36.7734 41.6328 39.6094 38.5625 41.0156 36.2188C42.4219 33.8281 43.125 31.3203 43.125 28.6953C43.125 20.7734 39.4688 16.8125 32.1562 16.8125C28.6875 16.8125 25.8984 17.8906 23.7891 20.0469C21.7266 22.1562 20.6484 25.0859 20.5547 28.8359H0.164062C0.257812 19.8828 3.14063 12.875 8.8125 7.8125C14.5312 2.75 22.3125 0.21875 32.1562 0.21875C42.0938 0.21875 49.8047 2.63281 55.2891 7.46094C60.7734 12.2422 63.5156 19.0156 63.5156 27.7812C63.5156 31.7656 62.625 35.5391 60.8438 39.1016C59.0625 42.6172 55.9453 46.5312 51.4922 50.8438L45.7969 56.2578C42.2344 59.6797 40.1953 63.6875 39.6797 68.2812L39.3984 72.5703H21.3984ZM19.3594 94.1562C19.3594 91.0156 20.4141 88.4375 22.5234 86.4219C24.6797 84.3594 27.4219 83.3281 30.75 83.3281C34.0781 83.3281 36.7969 84.3594 38.9062 86.4219C41.0625 88.4375 42.1406 91.0156 42.1406 94.1562C42.1406 97.25 41.0859 99.8047 38.9766 101.82C36.9141 103.836 34.1719 104.844 30.75 104.844C27.3281 104.844 24.5625 103.836 22.4531 101.82C20.3906 99.8047 19.3594 97.25 19.3594 94.1562Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="bImg2">
        <router-link to="/"
          ><svg
            version="1.1"
            id="house"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 27.02 27.02"
            style="enable-background:new 0 0 27.02 27.02;"
            xml:space="preserve"
            @click="$router.push('/')"
          >
            <g>
              <path
                style="fill:#030104;"
                d="M3.674,24.876c0,0-0.024,0.604,0.566,0.604c0.734,0,6.811-0.008,6.811-0.008l0.01-5.581
		c0,0-0.096-0.92,0.797-0.92h2.826c1.056,0,0.991,0.92,0.991,0.92l-0.012,5.563c0,0,5.762,0,6.667,0
		c0.749,0,0.715-0.752,0.715-0.752V14.413l-9.396-8.358l-9.975,8.358C3.674,14.413,3.674,24.876,3.674,24.876z"
              />
              <path
                style="fill:#030104;"
                d="M0,13.635c0,0,0.847,1.561,2.694,0l11.038-9.338l10.349,9.28c2.138,1.542,2.939,0,2.939,0
		L13.732,1.54L0,13.635z"
              />
              <polygon
                style="fill:#030104;"
                points="23.83,4.275 21.168,4.275 21.179,7.503 23.83,9.752 	"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainBanner",
  computed: {
    ifHelp() {
      return this.$store.state.ifHelp;
    },
    CP() {
      return this.$store.state.CP;
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
#mainBanner {
  height: 12vh;
  background-color: cornflowerblue;
  padding: 16px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  font-family: Impact;
  box-sizing: border-box !important;
}
.bImg {
  width: 40px;
  height: 40px;
}
.bImg2 {
  width: 50px;
  height: 60px;
}
#house {
  height: 6.8vh;
  margin-bottom: 5px;
}
.bImg3 {
  width: 50px;
  height: 50px;
}
#arrow {
  height: 6.3vh;
  margin-right: 18px;
  margin-top: 1px;
}
.small_right {
  display: none;
  height: 18vh;
  align-items: center;
  justify-content: center;
  width: 50px;
}
.right {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 28vh;
  height: 12vh;
  justify-content: space-around;
}
.left {
  display: flex;
  align-content: center;
  align-items: center;
  font-family: Impact;
  box-sizing: border-box !important;
}
#askImg {
  height: 6vh;
}

@media (max-width: 640px) {
  #Capa_1 {
    height: 80%;
  }
  h1 {
    height: 60%;
    font-size: 2.4em;
    margin-bottom: 0;
  }
  svg {
    height: 2vh;
  }
  .right {
    display: none;
  }
  .small_right {
    display: flex;
    height: 12vh;
    align-items: center;
    justify-content: center;
    width: 50px;
  }
  #humburger {
    height: 100%;
  }
  .bImg {
    display: flex;
    align-items: center;
  }
  #mainBanner {
    padding: 13px;
  }
}
@media (max-width: 700px) and (orientation: landscape) {
  #mainBanner {
    height: 15vh;
  }
  svg {
    height: 50%;
  }
}
</style>
