<template>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand">King Of Box</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :class="route_name=='pk_index' ? 'nav-link active' :'nav-link'" aria-current="page" :to="{name:'pk_index'}">对战</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="route_name=='record_index' ? 'nav-link active' : 'nav-link'" :to="{name:'record_index'}">对局列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="route_name=='rankList_index' ? 'nav-link active' : 'nav-link'" :to="{name:'rankList_index'}">排行榜</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            王自强
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" :to="{name:'user_bot_index'}">我的Bot</router-link></li>
                            <li><a class="dropdown-item" href="#">退出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
</style>
<script>
import { computed } from 'vue'
import {useRouter} from 'vue-router'
export default {
    setup(){
        const route=useRouter();
        let route_name=computed(()=>route.name)
    return{
        route_name
    }   
}
}
</script>