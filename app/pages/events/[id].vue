<script setup lang="ts">
    const route = useRoute();
    const priceEventId = route.params.id; 
    let priceEvt = null;

    const { } = await useFetch('/api/event', {
        query: { id: priceEventId },
        onResponse ({ request, response }) {
            if (response) {
                priceEvt = response._data !== undefined ? response._data.data : null;
            }
        },
    });
   
</script>

<style scoped>
    @import url("~/style/event.css"); 
</style>

<template>
    <div class="events" v-if="priceEvt !== null">
        <h3>Event in details</h3>
        <Event :priceEvent="priceEvt" />
    </div>
    <div class="events" v-else>
        Sorry Event have not been found with id: {{ priceEventId }}
    </div>
</template>