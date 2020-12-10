<template>
  <div id="imputsI">
    <form>
      <div class="row">
        <div class="col mb-2">
          <span v-if="checkform" class="mb-2"
            ><span class="goodA" v-if="gai1">This is correct answer</span>
            <span class="badA" v-if="!gai1">This is wrong answer</span>
          </span>
          <input
            type="text"
            id="aI1"
            class="form-control w-50"
            placeholder="First interval"
          />
        </div>
        <div class="col">
          <span v-if="checkform">
            <span class="goodA" v-if="gai2">This is correct answer</span>
            <span class="badA" v-if="!gai2">This is wrong answer</span></span
          >
          <input
            type="text"
            id="aI2"
            class="form-control w-50"
            placeholder="Second interval"
          />
        </div>
        <div class="col">
          <span v-if="checkform">
            <span class="goodA" v-if="gai3">This is correct answer</span>
            <span class="badA" v-if="!gai3">This is wrong answer</span></span
          >
          <input
            type="text"
            id="aI3"
            class="form-control w-50"
            placeholder="Third interval"
          />
        </div>
        <div class="col">
          <span v-if="checkform">
            <span class="goodA" v-if="gai4">This is correct answer</span>
            <span class="badA" v-if="!gai4">This is wrong answer</span></span
          >
          <input
            type="text"
            id="aI4"
            class="form-control w-50"
            placeholder="Fourth interval"
          />
        </div>
        <div class="col">
          <span v-if="checkform">
            <span class="goodA" v-if="gai5">This is correct answer</span>
            <span class="badA" v-if="!gai5">This is wrong answer</span></span
          >
          <input
            type="text"
            id="aI5"
            class="form-control w-50 h-50"
            placeholder="Fifth interval"
          />
        </div>
      </div>
    </form>

    <!--<h2 class="triadInfo">{{triad.qid}}</h2>-->

    <button id="NS" class="btn btn-secondary" @click="checkDic()">
      Check dictation
    </button>
  </div>
</template>
<script>
export default {
  props: ["FI", "SI", "THI", "FOI", "FII"],
  components: {},
  data() {
    return {
      name: "IntervalDicForm",
      checkform: false,
      FIans: false,
      SIans: false,
      THIans: false,
      FOans: false,
      FIIAns: false,
      gai1: false,
      gai2: false,
      gai3: false,
      gai4: false,
      gai5: false
    };
  },
  computed: {},
  methods: {
    checkDic() {
      this.checkform = true;
      console.log(this.FI + this.SI + this.THI + this.FOI + this.FII);
      let aI1 = document.getElementById("aI1").value;
      let aI2 = document.getElementById("aI2").value;
      let aI3 = document.getElementById("aI3").value;
      let aI4 = document.getElementById("aI4").value;
      let aI5 = document.getElementById("aI5").value;
      console.log(aI1 + aI2 + aI3 + aI4 + aI5);
      if (aI1 == this.FI) {
        console.log("1 good");
        this.gai1 = true;
      } else {
        this.gai1 = false;
      }
      if (aI2 == this.SI) {
        console.log("2 good");
        this.gai2 = true;
      } else {
        this.gai2 = false;
      }
      if (aI3 == this.THI) {
        console.log("3 good");
        this.gai3 = true;
      } else {
        this.gai3 = false;
      }
      if (aI4 == this.FOI) {
        console.log("4 good");
        this.gai4 = true;
      } else {
        this.gai4 = false;
      }
      if (aI5 == this.FII) {
        console.log("5 good");
        this.gai5 = true;
      } else {
        this.gai5 = false;
      }
    }
  }
};
</script>
<style scoped>
* {
  font-family: Roboto;
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
}

div#imputsI {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#contentBox {
  display: flex;
  flex-direction: column;
  width: 80vw;
}
.invisible {
  display: none;
}
h3 {
  margin: 20px !important;
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
.row {
  display: flex;
  align-items: center;
}
.col {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
</style>
