<template>
    <div>
        <van-tabbar 
        v-model="active" 
        active-color="#ee0a24" 
        inactive-color="#000"
        @change="onChange_fn"
        >
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">分销</van-tabbar-item>
            <van-tabbar-item icon="friends-o">购物</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
    let active:any = ref(0)
    let router = useRouter()
    //点击事件函数
    let onChange_fn:(index?: number | string) => any=function(index?:number | string){
        console.log(index)
        active.value=index
        switch(active.value){
            case 0:router.push("/");
            break;
            case 1:router.push("/fen");
            break;
            case 2:router.push("/cart");
            break;
            case 3:router.push("/mine");
            break;
        }
    }
</script>
<style lang="scss" scoped>

</style>
