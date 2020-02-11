import Vue from 'vue';
import VueRouter from 'vue-router';

import Website from '@/js/views/Website';
import Dashboard from '@/js/views/Dashboard';
import Home from '@/js/components/Home';
import About from '@/js/components/About';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'website',
            component: Website,
            children: [
                {
                    path: '',
                    name: 'website.home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'website.about',
                    component: About
                }
            ]
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [
                {
                    path: '',
                    name: 'dashboard.home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'dashboard.about',
                    component: About
                }
            ]
        }
    ]
});

export default router;
