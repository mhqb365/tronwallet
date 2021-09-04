<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="bg-white p-4">
      <div class="mb-3">
        <label>Receiving account</label>
        <input v-model="address" type="text" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Transfer amount</label><br />
        <small class="text-muted">
          Available balance: {{ Number(balance).toLocaleString() }} TRX
        </small>
        <input v-model="amount" type="number" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary" @click="send">Send</button>
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
      amount: "",
    };
  },
  created() {
    document.title = "Send";
  },
  computed: {
    ...mapGetters(["wallet", "balance"]),
  },
  methods: {
    send() {
      if (!this.address || !this.amount || this.amount <= 0)
        return Swal.fire({
          text: "Invalid address or amount",
          icon: "warning",
          position: "top",
          toast: true,
          showConfirmButton: false,
          timer: 15e2,
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
              position: "top",
              toast: true,
              showConfirmButton: false,
              timer: 15e2,
            });
        });
    },
  },
};
</script>

<style>
</style>