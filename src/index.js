//console.log = ()=>{};
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./routes";
import VueResource from 'vue-resource';
import "./css/sass/common.scss";
import Navigation from 'vue-navigation';
import VueWaves from 'vue-waves';

Vue.use(Navigation, {router,keyName: '_K'});
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueWaves,{
    name: 'waves',
    duration: 800,
    delay: 200
});
new Vue({
    router,
    data(){
        return {
            transitionName: 'slide-in',
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length;
            let fromDepth = from.path.split('/').length ;
            if(from.path == "/"){
                fromDepth = 0;
            }
            this.transitionName = toDepth > fromDepth ?"slide-in":"slide-out";
        }
    },
}).$mount('#app');


