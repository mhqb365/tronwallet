<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div>
      <h5>Balance: {{ Number(balance).toLocaleString() }} TRX</h5>

      <div class="mb-3">
        <label class="form-label">Address</label>
        <input v-model="address" type="text" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Amount</label>
        <input v-model="amount" type="number" class="form-control" />
      </div>

      <button type="button" class="btn btn-primary" @click="send">Send</button>
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
      balance: 0,
      address: "",
      amount: "",
    };
  },
  created() {
    document.title = "Send";
    tronWeb.trx.getBalance(this.wallet.address).then((response) => {
      this.balance = tronWeb.fromSun(response);
    });
  },
  computed: {
    ...mapGetters(["wallet"]),
  },
  methods: {
    send() {
      if (!this.address || !this.amount || this.amount <= 0)
        return Swal.fire({
          text: "Invalid address or amount",
          icon: "warning",
        });

      tronWeb.setPrivateKey(this.wallet.privateKey);
      tronWeb.trx
        .sendTransaction(
          this.address,
          tronWeb.toSun(Number(this.amount).toFixed(6))
        )
        .then((response) => {
          // console.log(response);
          if (response.result)
            Swal.fire({
              text: "Success",
              icon: "success",
            });
        });
    },
  },
};
</script>

<style>
</style>