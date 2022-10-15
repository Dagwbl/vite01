<script setup>
import axios from 'axios';
import { ref } from 'vue';


const rawHtml = ref('<h1>1421</h1>"')

function changeRawHtml() {
    axios.get("http://127.0.0.1/projects/learn/paging/mypage.php?p=4").then(function (response) {
        rawHtml.value = response.data
        console.log(rawHtml.value)
    }).catch(function(error){
        console.log(error)
    }).then(function(){
        //TODO
    })
}

</script>

<template >
    <!-- <p>v-html test</p> -->
    <button @click="changeRawHtml">load</button>
    <div v-html="rawHtml"> </div>
</template>