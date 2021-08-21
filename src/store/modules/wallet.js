const state = {
    wallet: null
}

const getters = {
    wallet: (state) => state.wallet
}

const mutations = {
    setWallet(state, wallet) {
        state.wallet = wallet
    }
}

const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}