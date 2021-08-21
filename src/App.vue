<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 bg-light full-heigh pt-4">
        <router-view />
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.full-heigh {
  height:100vh;
}
</style>