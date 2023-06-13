<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">
                <router-link class="nav-link" to="/homepage">eNursing</router-link>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/projet">Projets</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/doc">Doc</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import HomePage from "../views/HomePage.vue";

export default {
    name: "Navbar",
    components: {HomePage},
}
</script>

<style scoped>
</style>
