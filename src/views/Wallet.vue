<template>
  <div>
    <h2 class="p-4">{{ balance }} TRX</h2>

    <router-link to="/send">
      <button type="button" class="btn btn-danger m-1">
        <i class="far fa-arrow-alt-circle-up"></i>
        Send
      </button>
    </router-link>

    <router-link to="/receive">
      <button type="button" class="btn btn-success m-1">
        <i class="far fa-arrow-alt-circle-down"></i>
        Receive
      </button>
    </router-link>

    <a
      :href="detailUrl + '/address/' + wallet.address + '/transactions'"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button" class="btn btn-info m-1">
        <i class="fas fa-external-link-square-alt"></i>
        Detail
      </button>
    </a>

    <router-link to="/export">
      <button type="button" class="btn btn-warning m-1">
        <i class="fas fa-file-download"></i>
        Export
      </button>
    </router-link>

    <Delete />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Delete from "@/components/Delete";

export default {
  components: {
    Delete,
  },
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

<style></style>
