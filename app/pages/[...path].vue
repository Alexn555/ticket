<script>
  import NxLink from '~/components/NxLink.vue';

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
    <NxLink path="/" label="Go Back to Home" />
  </div>
</template>
