<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 bg-light full-heigh pt-5">
        <router-view />
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
@import url("https://use.fontawesome.com/releases/v5.7.0/css/all.css");

.full-heigh {
  height: 100vh;
}
</style>