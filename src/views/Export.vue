<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="text-center bg-white p-4">
      <p class="text-muted">
        This is private key, be careful with it
      </p>

      <div>
        <strong
          class="text-danger bg-light p-2 wallet-address"
          v-clipboard:copy="wallet.privateKey"
          v-clipboard:success="copySuccess"
        >
          {{ getPrivateKey(wallet.privateKey) }} <i class="fas fa-copy"></i>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  created() {
    document.title = "Export";
  },
  computed: {
    ...mapGetters(["wallet"]),
  },
  methods: {
    getPrivateKey(privateKey) {
      return privateKey.slice(0, 5) + "..." + privateKey.slice(-5);
    },
    copySuccess() {
      Swal.fire({
        text: "Success",
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

<style></style>
