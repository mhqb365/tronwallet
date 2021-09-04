<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div class="bg-white p-4">
      <label>Privatekey</label>
      <div class="input-group">
        <input
          v-model="wallet.privateKey"
          type="password"
          class="form-control"
        />

        <button
          v-clipboard:copy="wallet.privateKey"
          v-clipboard:success="copySuccess"
          type="button"
          class="btn btn-primary"
        >
          Copy
        </button>
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

<style>
</style>