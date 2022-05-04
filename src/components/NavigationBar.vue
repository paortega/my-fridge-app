<template>
    <v-navigation-drawer permanent>
      <!--v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item-->

      <v-list
        class="menu"
        dense
        nav
      >
        <v-list-item-content>
          <v-list-item-title class="menu-content"><v-icon class="icon">mdi-food-apple</v-icon><router-link class="link" to="/home">Home</router-link></v-list-item-title>
          <v-list-item-title class="menu-content"><v-icon class="icon">mdi-food-apple</v-icon><router-link class="link" to="/myingredients">API Food Ingredients</router-link></v-list-item-title>
          <v-list-item-title class="menu-content"><v-icon class="icon">mdi-food-apple</v-icon><router-link class="link" to="/categories">API Categories</router-link></v-list-item-title></v-list-item-content>
          <v-list-item-title class="menu-content"><v-icon class="icon">mdi-food-apple</v-icon><router-link class="link" to="/allingredients">All Ingredientes</router-link></v-list-item-title>
          <v-list-item-title class="menu-content"><v-icon class="icon">mdi-food-apple</v-icon><router-link class="link" to="/random">Random</router-link></v-list-item-title>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
    name: 'NavigationBar',
    data () {
      return {
        right: null,
      }
    },
  }
</script>
<style scoped>
.icon{
  padding-right: 25px;
  padding-left: 15px;
  color: #ff5722;
}
.menu{
  margin-top: 8%;
  padding-left: 25px;
}
.menu-content{
  padding-top: 50px;
  font-size: 16px;
}
.link{
  text-decoration: none;
  color:black;
}
</style>