<template>
<div>
    <div>
        <b-form>
            <h1>Login</h1>

            <input type="text" v-model="email" name="email" placeholder="Email"><br><br>

            <input type="password" v-model="password" name="password" placeholder="Password"><br>

            <div class="err" v-html="error" /><br>
            <button @click="login">Login</button>
            <!--<router-link :to="{name: 'Login'}">sign in?</router-link>-->
        </b-form>
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
        async login() {
            try {
                await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
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
