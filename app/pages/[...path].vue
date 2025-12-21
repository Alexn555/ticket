<script>
    export default {
      name: "NotFoundPage",
    };
</script>

<style scoped>
  .page {
    border: 1px solid red;
    margin: 10px;
    padding: 10px;
  }
</style>

<template>
  <div class="page">
    <h1>404</h1>
    <p>
      The page you're looking for doesn't exist.
    </p>
    <NuxtLink to="/">
      Go Back to Home
    </NuxtLink>
  </div>
</template>
