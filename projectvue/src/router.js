import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import PreviousArtists from "./components/PreviousArtists.vue";
import JulieMehretuPage from "./components/JulieMehretuPage.vue";
import Kandinsky from "./components/Kandinsky.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/previous-artists',
            name: 'PreviousArtists',
            component: PreviousArtists,
        },
        {
            path: '/julie-mehretu',
            name: 'JulieMehretuPage',
            component: JulieMehretuPage,
        },
        {
            path: '/wassily-kandinsky',
            name: 'WassilyKandinsky,',
            component: Kandinsky,
        }
    ],
});

export default router;
