<template>
  <div>
    <i class="fas fa-trash delete-wallet mt-5" @click="deleteWallet"></i>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setWallet"]),
    deleteWallet() {
      localStorage.removeItem("wallet");
      this.setWallet(null);
    },
  },
};
</script>

<style>
.delete-wallet {
  cursor: pointer;
}
</style>
