import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const router  = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
    ]
})

export default router ;