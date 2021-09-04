<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="bg-white p-4">
      <div class="mb-3">
        <label>Private key</label>
        <input v-model="privateKey" type="password" class="form-control" />
      </div>

      <button type="button" class="btn btn-primary" @click="importPrivateKey">
        Import
      </button>
    </div>
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
          position: "top",
          toast: true,
          showConfirmButton: false,
          timer: 15e2,
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