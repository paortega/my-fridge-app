//import Vue from 'vue'
import Vuex from 'vuex'
import { admin } from './modules/admin'
import { createApp } from 'vue'
import App from '..components'

createApp(App).use(Vuex)

export default new Vuex.Store({
  modules: {
    admin
  }
})
