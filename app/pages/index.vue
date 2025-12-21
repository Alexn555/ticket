<script setup lang="ts">
  let version = 1.0;
</script>

<style scoped>
    .home {
        border: 1px solid rgb(179, 176, 176);
    }
</style>
<template>
    <div class="home">
        <h3>Home page version # {{ version }}</h3>
    </div>
    <div>
        <Events />
    </div>
</template>