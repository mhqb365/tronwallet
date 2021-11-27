<template>
  <div class="text-center bg-white p-4">
    <div v-if="wallet">
      <Wallet />
    </div>

    <div v-else>
      <h3 class="display-4 mt-5">Empty wallet</h3>

      <router-link to="/import">
        <button type="button" class="btn btn-primary my-5">
          Import wallet
        </button>
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
