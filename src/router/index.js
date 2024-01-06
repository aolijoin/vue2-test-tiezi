import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";
import List from "@/components/List.vue";
import Pinglun from "@/components/Pinglun.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },


    {
        path: '/list',
        name: 'list',
        component: List
    },

    {
        path: '/ping',
        name: 'ping',
        component: Pinglun
    },

]

const router = new VueRouter({
    routes
})

export default router
