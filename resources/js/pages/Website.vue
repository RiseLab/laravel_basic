<template>
    <v-app>
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
            <v-toolbar-title>Laravel Basic Website</v-toolbar-title>
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
    export default {
        name: 'Website',
        data: () => ({
            drawer: null,
            links: [
                { title: 'Home', icon: 'home-outline', to: '/' },
                { title: 'About', icon: 'information-outline', to: '/about' }
            ]
        })
    }
</script>

<style scoped>

</style>
