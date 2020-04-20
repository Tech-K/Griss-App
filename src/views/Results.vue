<template>
    <v-app>
        <div class="main-background">
            <header>
                <h1>Results Route</h1>
            </header>

            <div class="entry-app">
                <v-btn class="button-route" to="/" x-large="" x-large="" tile color="#9e6bff">
                    Ir a la bienvenida
                </v-btn>

                <v-btn class="button-route" to="/Home" x-large="" x-large="" tile color="#9e6bff">
                    Vista de Home
                </v-btn>
            </div>
        </div>
    </v-app>
</template>

<style scoped>
/* // Main Gradiant: Primary #411f7f Secundary #6138b0 */

    header h1{
        font-size: 60px;
        text-align: center;
        padding: 60px;
        color: rgba(255, 255, 255, 0.822);
        text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.589); 
    }

    .v-application{
        background: radial-gradient(circle, rgb(90, 47, 170) 0%, rgba(65,31,127,1) 51%);
        /* background-color: #411f7f; */
    }

    .entry-app{
        text-align: center;
        margin: 50px 10px;
    }

    .button-route{
        display: flex;
        justify-content: center;
    }

</style>

<script>
export default {
    name: 'Results'
}
        // <router-link to="/" title="Ruta Welcome">Bienvenida</router-link>
        // <router-link to="/Results" title="Ruta Resultas">Results</router-link>
</script>


