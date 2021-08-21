<template>
  <div class="text-center">
    <div v-if="wallet">
      <Wallet />
    </div>

    <div v-else>
      <h3 class="display-4 p-4">Empty wallet</h3>

      <router-link to="/import">
        <button type="button" class="btn btn-primary">Import wallet</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Wallet from "@/views/Wallet";

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
};
</script>
