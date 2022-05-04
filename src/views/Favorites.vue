<template>
  <v-container>
    <v-row class="text-center">
        <h1>Favoritos </h1>
      <v-img
          class="slide"
          src="https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg"
        ></v-img>
      <v-col cols="12">
        <v-row>
        <v-img
          class="img-option"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="250"
          max-width="350"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-img
          class="img-option"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="250"
          max-width="350"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-img
          class="img-option"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="250"
          max-width="350"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'App',

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
