<template>
<div id="mainBanner" class="container-fluid">
  <div class="left">
    <h1>Ear Trainer</h1>
  <div class="bImg">  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 477.216 477.216" style="enable-background:new 0 0 477.216 477.216;" xml:space="preserve">
<g>
	<path d="M453.858,105.116v-91.6c0-4.3-2.1-8.4-5.5-10.9c-3.5-2.5-8-3.3-12.1-2l-272.9,86.7c-5.6,1.8-9.4,7-9.4,12.9v91.7v0.1v175.3
		c-14.3-9.9-32.6-15.3-51.8-15.3c-20.3,0-39.6,6.1-54.3,17.1c-15.8,11.9-24.5,28-24.5,45.5s8.7,33.6,24.5,45.5
		c14.7,11,33.9,17.1,54.3,17.1s39.6-6.1,54.3-17.1c15.8-11.9,24.5-28,24.5-45.5v-212.8l245.9-78.2v156.6
		c-14.3-9.9-32.6-15.3-51.8-15.3c-20.3,0-39.6,6.1-54.3,17.1c-15.8,11.9-24.5,28-24.5,45.5s8.7,33.6,24.5,45.5
		c14.7,11,33.9,17.1,54.3,17.1s39.6-6.1,54.3-17.1c15.8-11.9,24.5-28,24.5-45.5v-222.3
		C453.858,105.116,453.858,105.116,453.858,105.116z M102.158,450.216c-28.1,0-51.8-16.3-51.8-35.6c0-19.3,23.7-35.6,51.8-35.6
		s51.8,16.3,51.8,35.6C153.958,434.016,130.258,450.216,102.158,450.216z M180.958,173.416v-63.4l245.9-78.1v63.4L180.958,173.416z
		 M375.158,363.116c-28.1,0-51.8-16.3-51.8-35.6c0-19.3,23.7-35.6,51.8-35.6s51.8,16.3,51.8,35.6
		C426.858,346.816,403.158,363.116,375.158,363.116z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</div>
</div>
<div class="right" >
<div class="bImg2"><router-link to="/"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 27.02 27.02" style="enable-background:new 0 0 27.02 27.02;" xml:space="preserve" @click="$router.push('/')">
<g>
	<path style="fill:#030104;" d="M3.674,24.876c0,0-0.024,0.604,0.566,0.604c0.734,0,6.811-0.008,6.811-0.008l0.01-5.581
		c0,0-0.096-0.92,0.797-0.92h2.826c1.056,0,0.991,0.92,0.991,0.92l-0.012,5.563c0,0,5.762,0,6.667,0
		c0.749,0,0.715-0.752,0.715-0.752V14.413l-9.396-8.358l-9.975,8.358C3.674,14.413,3.674,24.876,3.674,24.876z"/>
	<path style="fill:#030104;" d="M0,13.635c0,0,0.847,1.561,2.694,0l11.038-9.338l10.349,9.28c2.138,1.542,2.939,0,2.939,0
		L13.732,1.54L0,13.635z"/>
	<polygon style="fill:#030104;" points="23.83,4.275 21.168,4.275 21.179,7.503 23.83,9.752 	"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</router-link>
</div>
</div>
    </div>
</template>

<script>
export default {
  name:"mainBanner",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainBanner{
    height:12vh;
    background-color: cornflowerblue;
    padding: 16px;
    display:flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    font-family: Impact;
    box-sizing: border-box !important;
    /*width:70%;
    margin:auto;*/
}
.bImg{
  width:40px;
  height:40px;
}
.bImg2{
  width:50px;
  height:50px;
}
.left{

    display:flex;
    align-content: center;
    align-items: center;
    font-family: Impact;
    box-sizing: border-box !important;
}
@media (max-width: 640px){
  
#Capa_1{
height:80%;
}
h1{
  height:80%;
}
}
</style>
