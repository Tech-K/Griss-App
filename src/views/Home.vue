<template>
    <v-app>
        <h1>Home Route</h1>
        <router-link to="/" title="Ruta Welcome">Bienvenida</router-link>
        <router-link to="/Results" title="Ruta Resultas">Results</router-link>
    </v-app>
</template>

<style scoped>
    h1{
      color: red;
    }
</style>

<script>
export default {
    name: 'Home'
}
</script>