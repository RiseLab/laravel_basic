<template>
    <div>
        <v-dialog v-model="show"
                  persistent
                  width="300">
            <v-card>
                <v-card-title class="headline grey lighten-2"
                              primary-title>
                    Authorization
                </v-card-title>

                <v-card-text class="pt-5">
                    <v-form>
                        <v-text-field label="Email"
                                      append-icon="person"
                                      v-model="username" />
                        <v-text-field label="Password"
                                      :append-icon="password.show ? 'visibility' : 'visibility_off'"
                                      :type="password.show ? 'text' : 'password'"
                                      v-model="password.value"
                                      @click:append="password.show = !password.show" />
                    </v-form>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary"
                           text
                           :loading="loading"
                           @click="login">
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="message.show"
                    top
                    :color="message.color">
            {{ message.text }}
            <v-btn text @click="message.show = false">
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            show: true,
            loading: false,
            error: true,
            username: '',
            password: {
                show: false,
                value: ''
            },
            message: {
                show: false,
                color: 'error',
                text: ''
            }
        }),
        methods: {
            login() {
                let data = {
                    username: this.username,
                    password: this.password.value
                };
                this.loading = true;
                axios.post('/api/login', data)
                    .then(({data}) => {
                        auth.login(data.token, data.user);
                    })
                    .catch(error => {
                        this.message.text = error.response.data.message;
                        this.message.show = true;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
