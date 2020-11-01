<template>
<div v-if="$store.state.isUserLoggedIn">
    <div class="container ml-0 pl-0 ">
        <nav class="nav flex-column justify-content-start col-3 mynav">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mynav {
    background: whitesmoke;
    left: 0;
    height: 500px;
}
</style>
