<template>
  <v-container>
    <v-row class="text-center">
        <h1> Random Recipe </h1>
    </v-row><br>
    <v-row>
        <h3>{{name}}</h3>
    </v-row><br>
    <v-row>
        <img :src="img">
    </v-row><br>
    <!--v-row>
        <span>{{summary}}</span>
    </v-row--> 
    <v-row>
        <h4> Instructions: </h4>
        <span>{{instructions}}</span>
    </v-row>
  </v-container>
</template>

<script>
import api from '@/api/api'

export default {
  name: 'App',
  data: () => ({
      img: '',
      name: undefined,
      summary: undefined,
      instructions: undefined

  }),
  created() {
    this.loadRecipes()
  },
  methods: {
    loadRecipes(){    
        api.getRandomRecipes().then(response => {
            this.img = response.recipes[0].image
            this.name = response.recipes[0].title
            this.summary = response.recipes[0].summary
            this.instructions = response.recipes[0].instructions

            console.log(response.recipes[0].image)
            console.log(response.recipes[0].title)
            console.log(response.recipes[0].summary)
            console.log(response.recipes[0].instructions)
        })
    }
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
.subtitle {
  padding-top: 20px;
  padding-bottom: 20px;
}
.autocomplete{
  width: 50%;
}
</style>
