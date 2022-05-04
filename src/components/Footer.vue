<template>
  <v-footer
  color="deep-orange accent-4"
    dark
    padless
    class="footer"
  >
  <v-row>



      <v-card-text class="white--text" style="text-align: center;">
        {{ new Date().getFullYear() }} — <strong>My Fridge APP.&nbsp;</strong><span> Pablo Ortega Lezcano. UOC</span>
      </v-card-text>

  </v-row>

      
  </v-footer>
</template>
<script>
  export default {
    name: 'App',
    data: () => ({
    }),
  }
</script>
<style>
.footer{
  height: 100px;
}
</style>