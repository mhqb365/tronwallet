<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="mb-3 text-center">
      <QRCodeVue3
        :width="200"
        :height="200"
        :value="wallet.address"
        image="logo.png"
      />
    </div>

    <label class="form-label">Deposit address</label>

    <div class="input-group mb-3">
      <input v-model="wallet.address" type="text" class="form-control" />

      <button
        v-clipboard:copy="wallet.address"
        v-clipboard:success="copySuccess"
        type="button"
        class="btn btn-primary"
      >
        Copy
      </button>
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
    copySuccess() {
      Swal.fire({
        text: "Copy success",
        icon: "success",
      });
    },
  },
};
</script>

<style>
</style>