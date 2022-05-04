<template>
  <div>
    <v-app-bar
      color="deep-orange accent-4"
      dense
      dark
    >
      <!--v-app-bar-nav-icon></v-app-bar-nav-icon-->

      <v-toolbar-title>My Fridge App</v-toolbar-title>

      <v-btn @click="goLogin" icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
//import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
  },
  //computed: mapState('admin', ['nameLogin']),

  data: () => ({
    //
  }),
  created() {
      this.showToolbar()
  },
  methods: {
    showToolbar(){    
        //alert(this.nameLogin)
    },
    goLogin(){
      this.$router.push("/");
    }
  }
}
</script>