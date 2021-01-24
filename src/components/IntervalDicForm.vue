<template>
  <div id="imputsI">
    <form>
      <div class="row">
        <div class="col-12  col-lg-2 whiteInput ">
          <span v-if="checkform" id="span1">
            <span class="emptyB" v-if="ea1">Empty answer box!</span>
            <span class="goodA" v-if="gai1">This is a correct answer</span>
            <span class="badA" v-if="bai1">This is a wrong answer</span>
          </span>
          <input
            type="text"
            id="aI1"
            class="form-control w-100 mt-2"
            placeholder="First interval"
          />
        </div>
        <div class="col-12 col-lg-2 whiteInput">
          <span v-if="checkform" id="span2">
            <span class="emptyB" v-if="ea2">Empty answer box!</span>
            <span class="goodA" v-if="gai2">This is a correct answer</span>
            <span class="badA" v-if="bai2">This is a wrong answer</span></span
          >
          <input
            type="text"
            id="aI2"
            class="form-control w-100 mt-2"
            placeholder="Second interval"
          />
        </div>
        <div class="col-12 col-lg-2 whiteInput">
          <span v-if="checkform" id="span3">
            <span class="emptyB" v-if="ea3">Empty answer box!</span>
            <span class="goodA" v-if="gai3">This is a correct answer</span>
            <span class="badA" v-if="bai3">This is a wrong answer</span></span
          >
          <input
            type="text"
            id="aI3"
            class="form-control w-100 mt-2"
            placeholder="Third interval"
          />
        </div>
        <div class="col-12 col-lg-2 whiteInput" id="span4">
          <span v-if="checkform">
            <span class="emptyB" v-if="ea4">Empty answer box!</span>
            <span class="goodA" v-if="gai4">This is a correct answer</span>
            <span class="badA" v-if="bai4">This is a wrong answer</span></span
          >
          <input
            type="text"
            id="aI4"
            class="form-control w-100 mt-2"
            placeholder="Fourth interval"
          />
        </div>
        <div class="col-12 col-lg-2 whiteInput">
          <span v-if="checkform" id="span5">
            <span class="emptyB" v-if="ea5">Empty answer box!</span>
            <span class="goodA" v-if="gai5">This is a correct answer</span>
            <span class="badA" v-if="bai5">This is a wrong answer</span></span
          >
          <input
            type="text"
            id="aI5"
            class="form-control w-100 h-50 mt-2"
            placeholder="Fifth interval"
          />
        </div>
      </div>
    </form>
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
      gai5: false,
      bai1: false,
      bai2: false,
      bai3: false,
      bai4: false,
      bai5: false,
      ea1: false,
      ea2: false,
      ea3: false,
      ea4: false,
      ea5: false
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

      if (aI1 == "") {
        this.ea1 = true;
        this.gai1 = false;
        this.bai1 = false;
      } else {
        if (aI1 == this.FI) {
          console.log("1 good");
          this.gai1 = true;
          this.bai1 = false;
          this.ea1 = false;
        } else {
          this.gai1 = false;
          this.bai1 = true;
          this.ea1 = false;
        }
      }
      console.log("dalej");
      if (aI2 == "") {
        this.ea2 = true;
        console.log("hgsfhdf");
        this.gai2 = false;
        this.bai2 = false;
      } else {
        if (aI2 == this.SI) {
          this.gai2 = true;
          this.bai2 = false;
          this.ea2 = false;
        } else {
          this.gai2 = false;
          this.bai2 = true;
          this.ea2 = false;
        }
      }
      if (aI3 == "") {
        this.ea3 = true;
        this.gai3 = false;
        this.bai3 = false;
      } else {
        if (aI3 == this.THI) {
          this.gai3 = true;
          this.bai3 = false;
          this.ea3 = false;
        } else {
          this.gai3 = false;
          this.bai3 = true;
          this.ea3 = false;
        }
      }
      if (aI4 == "") {
        this.ea4 = true;
        this.gai4 = false;
        this.bai4 = false;
      } else {
        if (aI4 == this.FOI) {
          this.gai4 = true;
          this.bai4 = false;
          this.ea4 = false;
        } else {
          this.gai4 = false;
          this.bai4 = true;
          this.ea4 = false;
        }
      }
      if (aI5 == "") {
        this.ea5 = true;
        this.gai5 = false;
        this.bai5 = false;
      } else {
        if (aI5 == this.FII) {
          this.gai5 = true;
          this.bai5 = false;
          this.ea5 = false;
        } else {
          this.gai5 = false;
          this.bai5 = true;
          this.ea5 = false;
        }
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
span.badA {
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: red;
  font-weight: bold;
}
span.goodA {
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: green;
  font-weight: bold;
}
span.emptyB {
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: blue;
  font-weight: bold;
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
  justify-content: center;
}
.col {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 50px;
}
.whiteInput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
}
@media (max-width: 700px) {
  .whiteInput {
    margin: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    margin-bottom: 2px;
  }
}
</style>
