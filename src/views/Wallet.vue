<template>
  <div class="text-center">
    <h1 class="pt-4 pb-4">{{ Number(balance).toLocaleString() }} TRX</h1>

    <div>
      <router-link to="/receive">
        <button type="button" class="btn btn-success m-2">Receive</button>
      </router-link>

      <router-link to="/send">
        <button type="button" class="btn btn-danger m-2">Send</button>
      </router-link>

      <a
        :href="detailUrl + '/address/' + wallet.address + '/transactions'"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" class="btn btn-info m-2">Detail</button>
      </a>

      <router-link to="/export">
        <button type="button" class="btn btn-warning m-2">Export</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tronWeb from "@/utils/tronWeb";

export default {
  data() {
    return {
      balance: 0,
      detailUrl:
        window.location.hostname == "localhost"
          ? "https://shasta.tronscan.org/#"
          : "https://tronscan.org/#",
    };
  },
  computed: {
    ...mapGetters(["wallet"]),
  },
  created() {
    tronWeb.trx.getBalance(this.wallet.address).then((response) => {
      this.balance = tronWeb.fromSun(response);
    });
  },
};
</script>

<style>
</style>