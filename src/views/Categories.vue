<template>
  <v-card>
    <v-container fluid>
      <h1>API Categories Cousines</h1>
      <h4 class="subtitle">Select cousine/s parameter that you DO NOT WANT to display. </h4>
      <form>
        <v-row
          align="center"
        >
          <v-col cols="12">
            <v-autocomplete
              v-model="value"
              :items="items"
              outlined
              dense
              chips
              small-chips
              label="Ingredients"
              clearable
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-btn elevation="2" small color="deep-orange accent-4" @click="loadRecipes">Continue</v-btn>
        </v-row>
      </form>
      <v-row>
        <v-list-item v-for="item in recipes" :key="item">
        <v-list-item-content>
          <v-list-item-title class="title-recipe"><h2>{{ item.title}}</h2></v-list-item-title>
          <img :src="item.image">
          <p class="summary-recipe">{{ item.summary}}</p>
        </v-list-item-content>
      </v-list-item>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import categoriesData from "../api/data/cousines.json"
import api from '@/api/api'

  export default {
    name: 'App',
    data: () => ({
      items: [],
      value: [],
      recipes: []
    }),
    created() {
      for (let i=0; i<categoriesData.length; i++ ){
        this.items.push(categoriesData[i].name)
      }
    },
  methods: {
    loadRecipes(){   
        api.getRecipesByCousine(this.value).then(response => {
          this.recipes = response.results
        })
    }
  }
  }
</script>
<style>
.title-recipe{
  padding-top:40px;
  padding-bottom:10px;
}
.summary-recipe{
  padding-top: 10px;
  font-size: 14px;
}
.subtitle{
  margin-bottom: 10px;
}
</style>