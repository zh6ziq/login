<template>
<div class="container">
    <div class="row justify-content-md-center">
        <b-card class="col-4 p-5 m-4">
            <b-form>
                <h1>Register</h1>
                <b-form-group>
                    <input type="text" v-model="email" name="email" placeholder="Email">
                </b-form-group>
                <b-form-group>
                    <input type="password" v-model="password" name="password" placeholder="Password">
                </b-form-group>

                <b-form-group>
                    <b-button variant="success" @click.prevent="register">Register</b-button>
                </b-form-group>

                <div class="err" v-html="error" />

                <!--<router-link :to="{name: 'Register'}">sign in?</router-link>-->
            </b-form>
        </b-card>
    </div>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null

        }
    },
    methods: {
        async register() {
            try {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)

            } catch (error) {
                this.error = error.response.data.error
            }

        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.err {
    color: red !important
}
</style>
