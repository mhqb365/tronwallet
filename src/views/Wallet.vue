<template>
  <div>
    <h1 class="p-4">{{ Number(balance).toLocaleString() }} TRX</h1>

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
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      detailUrl:
        window.location.hostname == "localhost"
          ? "https://shasta.tronscan.org/#"
          : "https://tronscan.org/#",
    };
  },
  computed: {
    ...mapGetters(["wallet", "balance"]),
  },
  created() {
    this.getBalance();
  },
  methods: {
    ...mapActions(["getBalance"]),
  },
};
</script>

<style>
</style>