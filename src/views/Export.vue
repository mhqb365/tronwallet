<template>
  <div>
    <div class="mb-5">
      <router-link to="/">Back</router-link>
    </div>

    <div>
      <label class="form-label">Privatekey</label>
      <div class="input-group mb-3">
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
      });
    },
  },
};
</script>

<style>
</style>