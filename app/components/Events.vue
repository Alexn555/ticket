<script setup lang="ts">
    const { data } = await useFetch('/api/events', {
        query: { token: 'a1000' },
    });
    const isOpen = ref([true, true, false]);
</script>

<style scoped>
    @import url("~/style/event.css"); 

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

    .link {
        padding: 4px 12px;
    }
</style>

<template>
  <div class="events" v-if="data !== undefined">
    <h2>Events</h2>
    <div v-for="(priceEvt, index) in data.data" :key="priceEvt.id" class="event">
        <div v-if="isOpen[index]">
            <Event :priceEvent="priceEvt" />
        </div>
        <div v-else class="short" @click="isOpen[index] = !isOpen[index];"> 
            Click on Event <span>{{priceEvt.title}}</span> for details
        </div>

        <div class="link">
             <NuxtLink :to="{ name: 'events-id', params: { id: priceEvt.id } }">
                Show more details
            </NuxtLink>
        </div>
    </div>
  </div>
</template>