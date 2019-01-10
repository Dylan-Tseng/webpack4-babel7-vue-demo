<template>
    <div class="h100 flex-v">
        <div class="flex flex-align-center bgw line pdl40 pdr40" style="height: .6rem">
            <img :src="p1" style="height: .3rem;"/>
            <div class="mgl15 h100 flex flex-align-center" v-waves.classic>
                <router-link to="/"  class="f18 pdl10 pdr10 nav">
                    音乐馆
                </router-link>
            </div>
            <div class="mgl15 h100 flex flex-align-center" v-waves.classic>
                <router-link to="/home"  class="f18 pdl10 pdr10 nav">
                    我的音乐
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import p1 from "../images/p1.png"
    export default {
        name: "index.vue",
        data(){
            return {
                p1
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../css/sass/variables";
    .nav{
        transition: all .3s;
        color:$default ;
        cursor: pointer;
        &:hover{
            color:#31c27c;
        }
        &.active{
            background-color:#31c27c;
            color: #fff;
        }
    }
</style>