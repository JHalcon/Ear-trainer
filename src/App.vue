<template>
  <div id="app">
    <Banner></Banner>
    <help v-show="ifHelp" />
    <div
      class="alert alert-danger"
      id="answerWarning"
      v-if="alertV"
      role="alert"
    >
      Please check the answer
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Banner from "./components/Banner.vue";
import help from "./components/help.vue";
export default {
  name: "app",
  components: {
    Banner,
    help
  },
  data() {
    return {
      alertV: true
    };
  },
  computed: {
    ifHelp() {
      return this.$store.state.ifHelp;
    }
  },
  methods: {
    fetch() {
      this.$store.commit("fetchProducts");
    },
    fetch2() {
      this.$store.commit("fetchInt1");
    },
    fetch3() {
      this.$store.commit("fetchTriads");
    },
    fetch4() {
      this.$store.commit("fetchExercises");
    },
    fetch5() {
      this.$store.commit("fetchTid");
    },
    fetch6() {
      this.$store.commit("fetchIntervalsT");
    },
    ifHelpChange() {
      this.$store.commit("ifHelpChange");
    },
    fetch7() {
      this.$store.commit("fetchIDic");
    },
    resetIPP() {
      this.$store.commit("resetIPP");
    },
    resetCPP() {
      this.$store.commit("resetCPP");
    }
  },
  mounted: function() {
    this.fetch();
    this.fetch2();
    this.fetch3();
    this.fetch4();
    this.fetch5();
    this.fetch6();
    this.fetch7();
    this.resetIPP();
    this.resetCPP();
  }
};
</script>
<style lang="scss">
body {
  background-color: #2d2c2e !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23686868' fill-opacity='0.4'%3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
#answerWarning {
  display: none;
}
@media (max-width: 640px) {
  * {
    font-size: 15px;
  }

  #svg8 {
    margin: 1vh;
    width: 100% !important;
    height: 100% !important;
  }
  #keyBox {
    width: 100%;
    margin-bottom: 100px !important;
  }
}

</style>
