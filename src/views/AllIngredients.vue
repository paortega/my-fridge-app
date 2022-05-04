<template>
  <v-container>
    <h1>All ingredients</h1><br>
        <h4 class="subtitle">The list contain all ingredients that you can choose on the API</h4>
    <v-row class="text-center">
        
      <v-col cols="12">
        
<v-row>
        <v-list-item v-for="item in items" :key="item">
        <v-list-item-content>
          <v-list-item-title class="title-recipe">{{ item}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-row>








      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ingredientsData from "../api/data/ingredients.json"

export default {
  name: 'App',
  data: () => ({
      items: [],
    }),
  created() {
    for (let i=0; i<ingredientsData.length; i++ ){
      this.items.push(ingredientsData[i].name)
    }
  },
  methods: {
    /*loadRecipes(){   
        api.getComplexRecipes(this.values).then(response => {
          this.recipes = response.results
        })
    }*/
  }
}
</script>
<style>
.img-option{
  padding-right: 5%;
}
.slide{
  padding-right: 5%;
    top: -139px;
    left: -51px;
    min-width: 1400px;
}
</style>
