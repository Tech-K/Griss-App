<template>
    <v-app>
        <AppBar/>
            <header>
                <video autoplay loop style="-webkit-mask-box-image: url('https://freepik.cdnpk.net/img/video/rex/mask.svg');
                                mask-image: url('https://freepik.cdnpk.net/img/video/rex/mask.svg');" width="300px">
                    <source src="https://freepik.cdnpk.net/img/video/rex/video.mp4" type="video/mp4">
                </video>
            </header>
                <section class="searcher-container">
                    <v-card dark width="800px">
                        <v-card-title>Buscador de prueba</v-card-title>
                        <v-card-text>Probando Data</v-card-text>

                        <v-card-text class="autocomplete-contain">

                        <v-autocomplete
                            v-model="model"
                            :items="items"
                            :loading="isLoading"
                            :search-input.sync="search"
                            color="white"
                            hide-no-data
                            hide-selected
                            item-text="Description"
                            item-value="API"
                            label="Buscador de Data"
                            placeholder="Intenta Buscar Algo"
                            prepend-icon="mdi-database-search"
                            return-object
                        ></v-autocomplete>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-expand-transition>
                        <v-list v-if="model" class="red lighten-3">
                            <v-list-item
                            v-for="(field, i) in fields"
                            :key="i"
                            >
                            <v-list-item-content>
                                <v-list-item-title v-text="field.value"></v-list-item-title>
                                <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        </v-expand-transition>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            :disabled="!model"
                            color="grey darken-3"
                            @click="model = null"
                        >
                            Limpiar Busqueda
                            <v-icon right>mdi-close-circle</v-icon>
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </section>

            <div class="entry-app">
                <v-btn class="button-route" to="/" x-large="" x-large="" tile color="#9e6bff">
                    Ir a la bienvenida
                </v-btn>

                <v-btn class="button-route" to="/Results" x-large="" x-large="" tile color="#9e6bff">
                    Vista de Resultados
                </v-btn>
            </div>

    </v-app>
</template>

<style scoped>
/* // Main Gradiant: Primary #411f7f Secundary #6138b0 */

    header{
        text-align: center;
    }

    header{
        margin: 20px 0px;
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

    #app{
        background: radial-gradient(circle, rgb(90, 47, 170) 0%, rgba(65,31,127,1) 75%);
        height: auto;
        /* padding: 0px 500px; */
    }

    .searcher-container{
        display: flex;
        justify-content: center;
    }

    .v-autocomplete{
        width: 70%;
    }

    .autocomplete-contain{
        display: flex;
        justify-content: center;
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
import AppBar from "../components/AppBar.vue";

  export default {
    name: 'Home',
    components: {
        AppBar,
    },
     data: () => ({
        descriptionLimit: 60,
        entries: [],
        isLoading: false,
        model: null,
        search: null,
        }),

        computed: {
            fields () {
                if (!this.model) return []

                return Object.keys(this.model).map(key => {
                return {
                    key,
                    value: this.model[key] || 'n/a',
                }
                })
            },
            items () {
                return this.entries.map(entry => {
                const Description = entry.Description.length > this.descriptionLimit
                    ? entry.Description.slice(0, this.descriptionLimit) + '...'
                    : entry.Description

                return Object.assign({}, entry, { Description })
                })
            },
        },

        watch: {
            search (val) {
                // Items have already been loaded
                if (this.items.length > 0) return

                // Items have already been requested
                if (this.isLoading) return

                this.isLoading = true

                // Lazily load input items
                fetch('https://api.publicapis.org/entries')
                .then(res => res.json())
                .then(res => {
                    const { count, entries } = res
                    this.count = count
                    this.entries = entries
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => (this.isLoading = false))
            },
        },
  }
</script>