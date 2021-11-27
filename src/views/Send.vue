<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="bg-white p-4">
      <div class="mb-3">
        <label>Receiving address</label>
        <input v-model="address" type="text" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Transfer amount</label><br />
        <small class="text-muted"> Available balance: {{ balance }} TRX </small>
        <input v-model="amount" type="number" class="form-control" />
      </div>

      <div class="d-grid">
        <button type="submit" class="btn btn-danger" @click="send">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tronWeb from "@/utils/tronWeb";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      address: "",
      amount: 0,
    };
  },
  created() {
    document.title = "Send";
  },
  computed: {
    ...mapGetters(["wallet", "balance"]),
  },
  methods: {
    async send() {
      if (!this.address || !this.amount || this.amount <= 0)
        return Swal.fire({
          text: "Invalid address or amount",
          icon: "warning",
          position: "top",
          toast: true,
          showConfirmButton: false,
          timer: 15e2,
        });

      await tronWeb.setPrivateKey(this.wallet.privateKey);

      await tronWeb.trx.sendTransaction(
        this.address,
        tronWeb.toSun(Number(this.amount).toFixed(6))
      );

      Swal.fire({
        text: "Success",
        icon: "success",
        position: "top",
        toast: true,
        showConfirmButton: false,
        timer: 15e2,
      });

      this.address = "";
      this.amount = 0;
    },
  },
};
</script>

<style></style>
