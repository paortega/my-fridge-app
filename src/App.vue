<template>
  <v-app>
    <NavigationBar />
    <Toolbar />
    <v-main>
      <v-container fluid>

      <!-- If using vue-router -->
      <div id="nav">
  </div>
  <router-view/>
    </v-container>
    </v-main>
    <v-footer app>
    <Footer />
  </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Toolbar from './components/Toolbar.vue'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Toolbar,
    NavigationBar,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>
