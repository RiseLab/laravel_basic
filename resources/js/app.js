import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

import Routes from '@/routes';

import App from '@/views/App';

Vue.use(Vuetify);

new Vue({
    el: '#app',
    router: Routes,
    vuetify: new Vuetify(),
    render: h => h(App)
});
