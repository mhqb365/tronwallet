<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 bg-light full-heigh pt-5">
        <router-view />

        <div class="mt-4 text-center">
          <a href="https://github.com/mhqb365/tronwallet" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css");

.full-heigh {
  height: 100vh;
}
</style>
