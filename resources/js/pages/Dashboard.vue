<template>
    <v-app>
        <login v-if="!(user.authenticated && user.data)" />
        <v-navigation-drawer v-model="drawer"
                             app
                             clipped>
            <v-list>
                <v-list-item link
                             v-for="(link, id) in links"
                             :key="id"
                             :to="link.to"
                             exact>
                    <v-list-item-action>
                        <v-icon>mdi-{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app
                   clipped-left
                   hide-on-scroll>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Laravel Basic Dashboard</v-toolbar-title>
            <v-spacer />
            <v-btn color="primary"
                   @click="logout"
                   v-if="user.authenticated && user.data">
                Logout
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-content>
        <v-footer app>
            <span>RiseLab &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Login from "@/components/dashboard/Login";
    export default {
        name: 'Dashboard',
        components: {Login},
        data: () => ({
            drawer: null,
            links: [
                { title: 'Home', icon: 'home-outline', to: '/dashboard' },
                { title: 'About', icon: 'information-outline', to: '/dashboard/about' }
            ],
            user: {
                authenticated: auth.check(),
                data: auth.user
            }
        }),
        mounted() {
            Event.$on('userLoggedIn', () => {
                this.user = {
                    authenticated: true,
                    data: auth.user
                }
            });
            Event.$on('userLoggedOut', () => {
                this.user = {
                    authenticated: false,
                    data: auth.user
                }
            });
        },
        methods: {
            logout () {
                axios.post('/api/logout')
                    .then(({data}) => {
                        auth.logout();
                        this.$router.push('/');
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(() => {

                    });
            }
        }
    }
</script>

<style scoped>

</style>
