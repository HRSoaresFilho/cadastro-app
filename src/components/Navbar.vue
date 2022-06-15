<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <div>
                <router-link to="/">
                    <img :src="logo" :alt="alt" id="logo">
                </router-link>
            </div>
            <ul class="navbar-nav">
                <li>
                    <router-link  class="nav-link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/contacts">Contatos</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['logo', 'alt']
}
</script>

<style scoped>
</style>