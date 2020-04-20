<template>
    <v-app>
        <div class="main-background">
            <header>
                <!-- <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"/> -->
                <h1>Giss App</h1>
            </header>

            <section class="steps-welcome">
                <!-- First Step -->
                <v-card max-width="344" class="step-welcome mx-auto">

                    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

                    <v-list-item>
                        <v-list-item-avatar color="grey"></v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="headline">De Que Trata La App</v-list-item-title>
                                <v-list-item-subtitle>Conoce la App</v-list-item-subtitle>
                            </v-list-item-content>
                    </v-list-item>
                    <v-card-text>
                        Visit ten places on our planet that are undergoing the biggest changes today.
                        Visit ten places on our planet that are undergoing the biggest changes today.
                    </v-card-text>
                </v-card>

                    <!-- Second Step -->
                <v-card max-width="344" class="step-welcome mx-auto">

                    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

                    <v-list-item>
                        <v-list-item-avatar color="grey"></v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="headline">Como Utilizarlo</v-list-item-title>
                                <v-list-item-subtitle>Busca Productos de tu interes</v-list-item-subtitle>
                            </v-list-item-content>
                    </v-list-item>
                    <v-card-text>
                        Visit ten places on our planet that are undergoing the biggest changes today.
                        Visit ten places on our planet that are undergoing the biggest changes today.
                    </v-card-text>
                </v-card>
            </section>

            <div class="entry-app">
                <v-btn to="/Home" x-large="" x-large="" tile color="#9e6bff">
                    Entrar a la App
                </v-btn>
            </div>
        </div>
    </v-app>
</template>

<style scoped>
/* // Main Gradiant: Primary #411f7f Secundary #6138b0 */
    .main-background{
        background: radial-gradient(circle, rgb(90, 47, 170) 0%, rgba(65,31,127,1) 51%);
    }

    header h1{
        font-size: 60px;
        text-align: center;
        padding: 60px;
        color: rgba(255, 255, 255, 0.822);
        text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.589); 
    }

    .v-application{
        background-color: #411f7f;
    }

    .steps-welcome{
        display: flex;
        justify-content: center;
        flex-wrap: wrap ;
    }

    .step-welcome{
        margin: 20px 20px
    }

    .entry-app{
        text-align: center;
        margin: 50px 0px;
    }
</style>

<script>
export default {
    name: 'Welcome'
}
        // <router-link to="/" title="Ruta Welcome">Bienvenida</router-link>
        // <router-link to="/Results" title="Ruta Resultas">Results</router-link>
</script>


