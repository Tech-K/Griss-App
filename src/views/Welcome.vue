<template>
    <v-app>
            <header>
                <!-- <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"/> -->
                <figure>
                    <img src="@/assets/giss-app-logo.png" alt="Logo Giss App">
                </figure>
                <h1>Giss App</h1>
            </header>


            <section class="steps-welcome">

                
                <!-- First Step -->
                    <!-- loading="loading" -->
                    <div class="step1-welcome mx-auto">
                        <v-img src="@/assets/my-app.svg" width="325px" style="margin: 0px 0px 40px 20px"></v-img>
                        <v-card max-width="344" elevation="20">
                            <!-- <v-skeleton-loader type="card"></v-skeleton-loader> -->

                            <v-list-item>
                                <v-list-item-avatar color="purple" size="62">
                                    <v-img src="@/assets/file-analys.svg" width="20px" height="auto"></v-img>
                                </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline">De Que Trata La App</v-list-item-title>
                                        <v-list-item-subtitle>Conoce la App</v-list-item-subtitle>
                                    </v-list-item-content>
                            </v-list-item>

                            <v-card-text>
                                Alguna vez has tenido la molestia de tener que asegurarte que tu kiosko o abasto
                                preferido, tenga los suministros que necesitas, con la marca y el precio que buscas?
                                <br></br>
                                <v-divider></v-divider>
                                <br></br>
                                Bienvenido a <strong>Giss App</strong> 💜 una aplicacion que te quitara las quejas de
                                tener que caminar para confirmar tus productos.
                            </v-card-text>
                        </v-card>
                    </div>


                    <!-- Second Step -->
                <div class="step-welcome mx-auto">
                        <v-img src="@/assets/undraw.svg" width="270px" style="margin: 0px 0px 40px 45px"></v-img>
                    <v-card max-width="344" elevation="20">


                        <v-list-item>
                            <v-list-item-avatar color="purple" size="62">
                                <v-img src="@/assets/mobile-feed.svg" width="20px" height="auto"></v-img>
                            </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="headline">Como Utilizarlo</v-list-item-title>
                                    <v-list-item-subtitle>Busca Productos de tu interes</v-list-item-subtitle>
                                </v-list-item-content>
                        </v-list-item>
                        <v-card-text>
                            <strong>Giss App</strong> Funciona como todo buscador de productos, solo busca el que necesites
                            los resultados de tu busqueda arrojaran productos con informacion de "Quien lo vende"
                            "Que marca del producto venden" y "A que precio lo vende".

                        <br></br>
                        <v-divider></v-divider>
                        <br></br>
                            Tambien puedes ver los <strong>Pasos Especificos</strong> para realizar tu busqueda 😁
                        </v-card-text>


                        <v-card-actions class="card-actions-contain">
                            <v-btn text @click="overlay = !overlay">Ver Pasos Especificos</v-btn>
                        </v-card-actions>


                            <!-- :absolute="absolute" -->
                            <v-overlay
                            :value="overlay"
                            >
                            <StepsWelcome/>
                            <v-btn
                                color="purple light-out-3"
                                @click="overlay = false"
                                block=""
                            >
                                Cerrar
                            </v-btn>
                            </v-overlay>


                    </v-card>
                </div>
            </section>

            <div class="entry-app">
                <v-btn to="/Home" x-large="" x-large="" tile color="#9e6bff">
                    Entrar a la App
                </v-btn>
            </div>

            <footer>
                <span>Made by
                    <strong>
                        <a href="https://twitter.com/TechK19" target="_blank" rel="noopener noreferrer"> Kevin Blanco 🚀</a>
                    </strong>
                </span>
            </footer>
    </v-app>
</template>

<style scoped>
/* // Main Gradiant: Primary #411f7f Secundary #6138b0 */
    #app{
        background: radial-gradient(circle, rgb(90, 47, 170) 0%, rgba(65,31,127,1) 75%);
        height: auto;
        /* padding: 0px 500px; */
    }

    a{
        text-decoration: none;
        color: rgba(0, 231, 50, 0.555);
    }

    .v-application--wrap{
        height: 100vh;
    }

    header h1{
        font-size: 60px;
        text-align: center;
        padding: 20px 60px;
        color: rgba(255, 255, 255, 0.822);
        text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.589); 
    }

    header figure{
        display:flex;
        justify-content: center;
    }

    header figure img{
        width: 200px;
        margin-top: 50px;
        padding-left: 30px;
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
        margin: 20px 0px;
        width: auto;
    }

    .step1-welcome{
        margin: 32px 0px;
        width: auto;
    }

    .entry-app{
        text-align: center;
        margin: 50px 0px;
    }

    .card-actions-contain{
        display: flex;
        justify-content: center;
    }

    .card-actions-contain .v-btn{
        color:#361379;
        font-weight: bold;
    }

    footer{
        display:flex;
        justify-content: center;
        padding: 30px;
    }

    .card-container{
        /* text-align: center; */
    }
</style>

<script>
import StepsWelcome from "@/components/StepsWelcome";

export default {
    name: 'Welcome',
    components: {
        StepsWelcome,
    },
    data: () => ({
    //   absolute: true,
      overlay: false,
    }),
}
        // <router-link to="/" title="Ruta Welcome">Bienvenida</router-link>
        // <router-link to="/Results" title="Ruta Resultas">Results</router-link>
</script>


