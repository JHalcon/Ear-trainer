<template>
<div>
    <figure>
    <figcaption>{{description}}</figcaption>
   <div class="invisible"> <audio id="player"
        controls
        :src=fileName>
            Your browser does not support the
            <code>audio</code> element.
    </audio></div>
</figure>
 <button class="btn btn-primary" onclick="document.getElementById('player').play()">Play</button> 
    </div>
</template>


<script>
export default {
    props:['fileName','description'],
    name: "audioPlayerbtn",
data(){
   return{
    
    
   
   }
},
methods:{
    showme(){
        console.log(this.fileName)
    }
}
}
</script>
<style lang="scss">
.invisible{
    display:none;
}
</style>
