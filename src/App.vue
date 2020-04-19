<template>
    <router-view/>
</template>

<style>

</style>

<script>
import Welcome from "./views/Welcome";

export default {
  name: 'App',

  components: {
    Welcome,
  },

  data: () => ({
    //
  }),
};
</script>
