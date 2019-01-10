import VueRouter from "vue-router";
import Index from "./pages/Index.vue"
import Home from "./pages/Home.vue"
const routes = [
     { path: '/', component: Index,},
     { path: '/home', component: Home,},
];
const router = new VueRouter({routes});
export default router;