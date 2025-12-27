<script setup lang="ts">
   const props = defineProps({
        path: {
            type: String,
            required: true,
        },
        evt: {
            type: Object,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    });
    const { label, evt, path } = props;
    let link = path !== '' ? path : evt;
</script>

<template>
    <NuxtLink :to="link">
        {{ label }}
    </NuxtLink>
</template>
