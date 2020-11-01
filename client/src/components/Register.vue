<template>
<div>
    <div>
        <form action="">
            <h1>Register</h1>

            <input type="text" v-model="email" name="email" placeholder="Email"><br>

            <input type="password" v-model="password" name="password" placeholder="Password"><br>

            <div class="err" v-html="error" /><br>
            <button @click="register">Register</button>
            <!--<router-link :to="{name: 'Register'}">sign in?</router-link>-->
        </form>
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
                await AuthenticationService.register({
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
