<script setup>
//import module
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
//业务处理逻辑
const debug = ref('no information')
const res = reactive({ data: '' })
const test = onMounted(() => {
    console.log('OnMounted')
    getdata()
})

function getdata() {
    axios.get('http://localhost/projects/learn/api/api.php?action=query')
        .then(function (response) {
            // 处理成功情况
            res.data = response.data;

            console.log(response);
        })
        .catch(function (error) {
            // 处理错误情况
            console.log(error);
            debug.value = response.data
            // debug.value=error;
        })
        .then(function () {
            // 总是会执行
        });
}


</script>

<template>
    <h1>Get data</h1>
    <div :class="debug">
        <p>debug:{{debug}}</p>
        <p>data:{{res.data}}</p>
    </div>

    <table border="1px" align="center">
        <tr>
            <td>id</td>
            <td>data</td>
        </tr>
        <tr v-for="item in res.data" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.data}}</td>
        </tr>
    </table>
</template>

<style>
table{
    width: 50%;
    border: 1px seagreen dashed;
}
</style>