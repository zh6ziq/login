<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">HOSPITAL KU</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
            <b-navbar-nav class="m-1">
                <b-button variant="primary" @click="navigateTo({name: 'Register'})">Register</b-button>
                <b-button variant="primary" @click="navigateTo({name: 'Login'})">Login</b-button>

            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

}
</script>

<style scoped>

</style>
