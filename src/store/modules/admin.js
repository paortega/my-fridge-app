//import { SET_COUNTER, GET_COUNTER, COUNTER2_M } from '@/store/mutation-types.ts'

export const admin = {
    namespaced: true,
    state: {
        nameLogin: ''
    },
    mutations: {
        UpdateNameLogin(state, value) {
            state.nameLogin = value
        }
    },

    actions: {
        UpdateNameLogin(context, value) {
            context.commit('UpdateNameLogin', value)
        }
    }
}
