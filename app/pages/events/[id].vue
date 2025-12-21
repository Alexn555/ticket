<script setup lang="ts">
    const route = useRoute();
    const priceEventId = route.params.id; 
    let priceEvt = ref();
    await useFetch('/api/event', {
        query: { id: priceEventId },
        onResponse ({ request, response }) {
            if (response && response._data !== undefined) {
                priceEvt.value = response._data.data;
            }
        },
    });
</script>

<style scoped>
    @import url("~/style/event.css"); 
</style>

<template>
    <div class="events" v-if="priceEvt">
        <h3>Event in details</h3>
        <Event :priceEvent="priceEvt" />
    </div>
    <div class="events" v-else>
        Sorry Event have not been found with id: {{ priceEventId }}
    </div>
</template>