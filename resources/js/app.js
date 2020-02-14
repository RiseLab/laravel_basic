import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

import Routes from '@/routes';

import Api from "@/api";
window.api = new Api();

import Auth from '@/auth';
window.auth = new Auth();

import App from '@/views/App';

Vue.use(Vuetify);

window.Event = new Vue();

new Vue({
    el: '#app',
    router: Routes,
    vuetify: new Vuetify(),
    render: h => h(App)
});
