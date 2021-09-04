import tronWeb from "../../utils/tronWeb";
import TronGrid from "trongrid";

const tronGrid = new TronGrid(tronWeb);

const state = {
  balance: 0,
};

const getters = {
  balance: (state) => state.balance,
};

const mutations = {
  setBalance(state, balance) {
    state.balance = balance;
  },
};

const actions = {
  getBalance: async function(context) {
    let bal = await tronGrid.account.get(context.getters.wallet.address);
    context.commit("setBalance", tronWeb.fromSun(bal.data[0].balance));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
