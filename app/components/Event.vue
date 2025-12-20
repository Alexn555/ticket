<script setup>
    const props = defineProps({
        priceEvent: {
            type: Object,
            required: true,
        },
    });
    const { priceEvent } = props;
</script>

<style scoped>
    .event {
        display: grid;
        grid-template-columns: 20% 20% 30% 20% 10%;
        padding: 20px;
        margin: 10px;
        border-bottom: 1px solid red;

        & img {
            width: 100px;
        }
    }
    .title {
        letter-spacing: 2px;
    }
    .available {
        & div {
            padding-top: 10px;
        }
    }
</style>

<template>
    <div class="event">
        <div> <img :src="priceEvent.image"/> </div>

        <div>Event # {{ priceEvent.id }} </div>
        <div> 
          <span class="title">  {{ priceEvent.title }}</span>
          <p> {{ priceEvent.description }}  </p>
        </div>
        <div>
            Ticket options: €{{ priceEvent.options.low }} | €{{ priceEvent.options.mid }} || €{{ priceEvent.options.high }}
        </div>

        <div class="available"> available: {{ priceEvent.available }}
            <div>
                <BuyTicket />
            </div>
        </div>
    </div>
</template>