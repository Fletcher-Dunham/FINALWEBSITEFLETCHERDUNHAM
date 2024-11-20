import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import PreviousArtist from "./components/Template/PreviousArtist.vue";

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
        },
        {
            path: '/Previous Artists',
            name: 'Previous Artists',
            component: PreviousArtist
        },
    ]
})

export default router ;