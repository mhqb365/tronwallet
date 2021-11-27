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
    const { data } = await tronGrid.account.get(context.getters.wallet.address);
    // console.log(data);
    let balance = 0;
    if (data.length > 0) balance = data[0].balance;
    context.commit("setBalance", tronWeb.fromSun(balance));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
