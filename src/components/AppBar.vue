<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
    <router-link to="/">
      <v-app-bar-nav-icon style="margin-left: 6px;">
        <figure>
            <img src="@/assets/giss-app-logo.png" alt="Logo Giss App" width="46px">
        </figure>
      </v-app-bar-nav-icon>
    </router-link>

      <v-toolbar-title>Giss App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
                <v-list-item to="/" @click="() => {}">
                    <v-list-item-title>Regresar a la Bienvenida</v-list-item-title>
                </v-list-item>
        </v-list>

      </v-menu>
    </v-app-bar>
  </div>
</template>


<script>
export default {
    name: 'AppBar'
}
</script>