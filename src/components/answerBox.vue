<template>
<div id="ansB">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
  
   width="400px"
   viewBox="0 0 76.162201 36.285713"
   version="1.1"
   id="svg8">
  <defs
     id="defs2" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(-24.94643,-112.92558)"
     id="layer1">
    <rect
       style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:0.70886797;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect3848"
       width="76.162201"
       height="36.285713"
       x="24.94643"
       y="112.92558" 
       class="white"/>
    <rect
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.24443209;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="c"
       width="6.8035712"
       height="21.072172"
       x="35.529758"
       y="120.8631"
       class="white" />
    <rect
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.24443209;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="d"
       width="6.8035712"
       height="21.072172"
       x="43.391663"
       y="120.8631" 
       class="white"/>
    <rect
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.24443209;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="e"
       width="6.8035712"
       height="21.072172"
       x="51.253567"
       y="120.8631" 
       class="white"/>
    <rect
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.24443209;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="f"
       width="6.8035712"
       height="21.072172"
       x="59.115471"
       y="120.8631"
       class="white" />
    <rect
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.24443209;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="g"
       width="6.8035712"
       height="21.072172"
       x="66.977379"
       y="120.8631" 
       class="white"/>
    <rect
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.24443209;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="a"
       width="6.8035712"
       height="21.072172"
       x="74.839287"
       y="120.8631"
       class="white" />
    <rect
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.24443209;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="h"
       width="6.8035712"
       height="21.072172"
       x="82.701195"
       y="120.8631"
       class="white" />
    <rect
       style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="c#"
       width="5.3453903"
       height="13.016112"
       x="40.239578"
       y="120.81584"
       class="black" />
    <rect
       style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="d#"
       width="5.3453903"
       height="13.016112"
       x="48.175335"
       y="120.81584"
       class="black" />
    <rect
       style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="f#"
       width="5.3453903"
       height="13.016112"
       x="63.671589"
       y="120.81584"
       class="black" />
    <rect
       style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="g#"
       width="5.3453903"
       height="13.016112"
       x="71.561417"
       y="120.81584"
       class="black" />
    <rect
       style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="a#"
       width="5.3453903"
       height="13.016112"
       x="79.445869"
       y="120.81584"
       class="black"/>
  </g>
</svg>
      <button  class="btn btn-secondary" @click="playInterval(FN,SN)">ggggg
         </button>
   </div>
</template>
<script>
export default {
   props:["FN","SN"],
data(){
   return{
   
    name: "answerBox",
   }
},
   methods:{
       playMusic(){
      this.$store.commit("sound");
    },
      colorBtn(key){
         console.log("ahsdfhg");
            let btn = document.getElementById(key);
btn.setAttribute('style','fill:rgb(0, 0, 0) !important');
console.log("ahgsfg");
this.playMusic();
console.log("cos sie dzieje");
setTimeout(() => {  btn.setAttribute('style','fill:rgb(255, 255, 255) !important'); }, 5000);

      },
      playInterval(first,second){
         this.playMusic();
         console.log(first);
         console.log(second);
         console.log("intervallle")
         let btn2 = document.getElementById(second);
         let btn1 = document.getElementById(first);
         console.log(btn1);
         btn1.setAttribute('style','fill:rgb(255, 0, 0) !important'); //czarne c 
         setTimeout(()=> {btn1.setAttribute('style','fill:rgb(255, 255, 255) !important');btn2.setAttribute('style','fill:rgb(81, 98, 247) !important');//biale c
         setTimeout(()=>{ if(btn2.classList.contains("white"))btn2.setAttribute('style','fill:rgb(255,255,255) !important');else btn2.setAttribute('style','fill:rgb(0,0,0) !important');btn1.setAttribute('style','fill:rgb(255,255,255) !important');// rozowe E
         setTimeout(()=>{ btn1.setAttribute('style','fill:rgb(255,0,0) !important');btn2.setAttribute('style','fill:rgb(81, 98, 247) !important');
         setTimeout(() =>{ if(btn1.classList.contains("white")){console.log("OOO");btn1.setAttribute('style','fill:rgb(255,255,255) !important')}
         else {console.log("hgafshf");btn1.setAttribute('style','fill:rgb(0,0,0) !important');}
         if(btn2.classList.contains("white"))btn2.setAttribute('style','fill:rgb(255,255,255) !important');
         else{console.log("2222") ;btn2.setAttribute('style','fill:rgb(0,0,0) !important')};
         },2000)
         } //biale E
         ,200)}
         ,1000);     
         },1000)
      },
       // setTimeout(()=>{ btn1.setAttribute('style','fill:rgb(255, 255, 255) !important');
       // btn2.setAttribute('style','fill:rgb(0, 0, 0) !important');}, 2000);
         
        // setTimeout(() => {  btn2.setAttribute('style','fill:rgb(255, 255, 255) !important'); }, 2000);
        // btn1.setAttribute('style','fill:rgb(0, 0, 0) !important');
        // btn2.setAttribute('style','fill:rgb(0, 0, 0) !important');
         //setTimeout(() => {  btn1.setAttribute('style','fill:rgb(255, 255, 255) !important');  btn2.setAttribute('style','fill:rgb(255, 255, 255) !important'); }, 5000);


      },
   }
</script>
<style scoped>
#ansB{
  height:300px;
  /*display:flex;*/
  align-items: center;
  flex-direction: column;
  align-items: center;
  display: none;
  margin-bottom: 2%;
   
}
div{
   display:flex;
   justify-content: center;
   align-items: center;

}
svg#svg8{
   width:120;
   margin-bottom:40px;
   margin-top:40px;
}
rect#rect3850{

    fill: rgb(185, 0, 0) !important;
}
</style>