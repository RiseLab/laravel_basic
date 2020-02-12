import Vue from 'vue';
import VueRouter from 'vue-router';

import Website from '@/pages/Website';
import WebsiteHome from '@/components/website/Home';
import WebsiteAbout from '@/components/website/About';

import Dashboard from '@/pages/Dashboard';
import DashboardHome from '@/components/dashboard/Home';
import DashboardAbout from '@/components/dashboard/About';

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
                    component: WebsiteHome
                },
                {
                    path: 'about',
                    name: 'website.about',
                    component: WebsiteAbout
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
                    component: DashboardHome
                },
                {
                    path: 'about',
                    name: 'dashboard.about',
                    component: DashboardAbout
                }
            ]
        }
    ]
});

export default router;
