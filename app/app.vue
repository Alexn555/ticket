<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  .nav {
    padding: 4px 8px;
    border: 1px solid red;
  }
</style>

<template>
  <div class="nav">
    Ticket System | 
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/about">About</NuxtLink>
  </div>

  <div>
    <NuxtPage to="/" />
  </div>
</template>
