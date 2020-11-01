<template>
<div>
    <!--components-->
    <PageHeader />
    <div id="app">

        <!--<img src="./assets/logo.png">-->
        <router-view />

    </div>
</div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import BoardUser from './components/BoardUser.vue'

export default {
    name: 'App',
    components: {
        PageHeader,
        BoardUser
    }
}
</script>

<style>
body {
    height: 100vh;
    background: black;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;

}
</style>
