import { createStore } from 'vuex'
import wallet from './modules/wallet'
import balance from './modules/balance'

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        wallet,
        balance
    }
})