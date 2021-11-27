<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="text-center bg-white p-4">
      <p class="text-muted">
        Only send TRX to this address
        <br />1 confirmation(s) required
      </p>

      <div class="mb-5">
        <QRCodeVue3
          :width="200"
          :height="200"
          :value="wallet.address"
          :dotsOptions="{
            type: 'square',
            color: '#000',
          }"
          :cornersSquareOptions="{
            type: 'square',
            color: '#000',
          }"
        />
      </div>

      <div>
        <strong
          class="text-danger bg-light p-2 wallet-address"
          v-clipboard:copy="wallet.address"
          v-clipboard:success="copySuccess"
        >
          {{ getAddress(wallet.address) }} <i class="fas fa-copy"></i>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import QRCodeVue3 from "qrcode-vue3";
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  components: {
    QRCodeVue3,
  },
  created() {
    document.title = "Receive";
  },
  computed: {
    ...mapGetters(["wallet"]),
  },
  methods: {
    getAddress(address) {
      return address.slice(0, 5) + "..." + address.slice(-4);
    },
    copySuccess() {
      Swal.fire({
        text: "Copy success",
        icon: "success",
        position: "top",
        toast: true,
        showConfirmButton: false,
        timer: 15e2,
      });
    },
  },
};
</script>

<style>
.wallet-address {
  cursor: pointer;
}
</style>
