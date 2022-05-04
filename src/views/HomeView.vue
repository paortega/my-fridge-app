<template>
  <v-container>
    <v-img
          class="slide"
          src="../assets/slide.png"
        ></v-img>
    <v-row class="text-center">
      
      <v-col cols="12">
        <v-row>
        <v-img
          class="img-option"
          max-height="250"
          max-width="350"
          @click="img1"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
        ></v-img>
        <v-img
          class="img-option"
          max-height="250"
          max-width="350"
          @click="img2"
          src="https://c.pxhere.com/photos/fd/39/dessert_frutti_di_bosco_torta_con_frutta_torta_frutti_di_bosco-1636753.jpg!s2"
        ></v-img>
        <v-img
          class="img-option"
          max-height="250"
          max-width="350"
          @click="img3"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Interrogante.jpg"
        ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState('admin', ['nameLogin']),

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
  methods: {
    img1(){
      this.$router.push({ path: '/myingredients' })
    },
    img2(){
      this.$router.push({ path: '/allingredients' })
    },
    img3(){
      this.$router.push({ path: '/random' })
    }
  }
}
</script>
<style>
.img-option{
  height: 200px;
  padding-right: 5%;
}
.img-option:hover{
  cursor: pointer;
  opacity: 0.5;
}
.slide{
  position: relative;
  display: flex;
	overflow: hidden;
  width: 100vw;
	flex-shrink: 0;
  top: -50px;
	animation-name: slide;
	animation-duration: 20s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}
</style>
