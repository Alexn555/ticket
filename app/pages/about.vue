<script setup lang="ts">
  let version = 1.0;
</script>

<style scoped>
    .about {
        border: 1px solid rgb(179, 176, 176);
        margin: 10px;
        padding: 10px;
    }
</style>
<template>
    <div class="about">
        <h3> About page version # {{ version }} </h3>
        <p> Ticket system using Nuxt client and server. </p>
    </div>
</template>