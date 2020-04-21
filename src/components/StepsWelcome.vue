<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Paso 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Paso 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Paso 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
          width="290px"
        ></v-card>
          <!-- width="300px" -->

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Siguiente
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
          width="290px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Siguiente
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
          width="290px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Volver al Paso 1
        </v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<style scoped>
    .v-stepper{
        width: auto;
    }
</style>

<script>
  export default {
    name: 'StepsWelcome',
    data () {
      return {
        e1: 1,
        overlay: false,
      }
    },
  }
</script>