<template>
  <div class="text-center bg-white p-4">
    <div v-if="wallet">
      <Wallet />
    </div>

    <div v-else>
      <h3 class="display-4 my-5">Empty wallet</h3>

      <router-link to="/import">
        <button type="button" class="btn btn-primary my-3">
          <i class="fas fa-file-import"></i>
          Import wallet
        </button>
      </router-link>
      <br />
      <button type="button" class="btn btn-warning my-3" @click="createWallet">
        <i class="fas fa-plus"></i>
        Create wallet
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Wallet from "@/views/Wallet";
import tronWeb from "@/utils/tronWeb.js";

export default {
  name: "Home",
  components: {
    Wallet,
  },
  created() {
    document.title = "TRON Wallet";
  },
  computed: {
    ...mapGetters(["wallet"]),
  },
  methods: {
    ...mapMutations(["setWallet"]),
    async createWallet() {
      const newAccount = await tronWeb.createAccount();
      const newWallet = {
        privateKey: newAccount.privateKey,
        address: newAccount.address.base58,
      };
      this.setWallet(newWallet);
      localStorage.setItem("wallet", JSON.stringify(newWallet));
    },
  },
};
</script>
