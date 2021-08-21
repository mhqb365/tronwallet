<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="mb-3">
      <label class="form-label">Private key</label>
      <input v-model="privateKey" type="password" class="form-control" />
    </div>

    <button type="button" class="btn btn-primary" @click="importPrivateKey">
      Import
    </button>
  </div>
</template>

<script>
import tronWeb from "@/utils/tronWeb";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      privateKey: "",
    };
  },
  created() {
    document.title = "Import";
  },
  methods: {
    importPrivateKey() {
      if (this.privateKey.length != 64)
        return Swal.fire({
          text: "Wrong private key",
          icon: "warning",
        });

      localStorage.setItem(
        "wallet",
        JSON.stringify({
          privateKey: this.privateKey,
          address: tronWeb.address.fromPrivateKey(this.privateKey),
        })
      );

      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>