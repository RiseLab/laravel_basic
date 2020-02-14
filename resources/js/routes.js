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

router.beforeEach((to, from, next) => {
    if (to.name.indexOf('dashboard') === 0 && to.name !== 'dashboard.home' && !auth.check()) {
        next({
            path: '/dashboard'
        });

        return;
    }

    next();
});

export default router;
