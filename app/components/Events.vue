<script setup lang="ts">
const { data, status, error } = await useFetch('/api/events', {
   query: { token: 'a1000' },
});
const isOpen = ref([true, true, false]);
</script>

<style scoped>
.events {
    font-size: 14px;
    padding: 2rem;
    background: #ebcb73;
    background: linear-gradient(180deg, rgba(235, 203, 115, 1) 64%, rgba(237, 125, 81, 1) 100%);
}

.short {
    font-size: 20px;
    cursor: pointer;
    border: 1px dashed red;
    padding: 12px 2px;

    & span {
        font-size: 22px;
        letter-spacing: 4px;
    }
}
</style>

<template>
  <div class="events">
  <h2>Events</h2>
    <div v-for="(priceEvt, index) in data.data" :key="priceEvt.id" class="event">
        <div v-if="isOpen[index]">
            <Event :priceEvent="priceEvt" />
        </div>
        <div v-else class="short" @click="isOpen[index] = !isOpen[index];"> 
            Click on Event <span>{{priceEvt.title}}</span> for details
        </div>
    </div>
  </div>
</template>