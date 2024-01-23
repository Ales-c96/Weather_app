
<script setup>
import useClima from '../composables/useClimate'
const { formatTemperature } = useClima()

const props = defineProps({
    climate: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="result">
        <h2>Clima en: {{ climate.name }}</h2>
        <p class="actual">{{ formatTemperature(climate.main.temp) }}&deg;C</p>
        <div class="temperature">
            <p>Min: {{ formatTemperature(climate.main.temp_min) }}<span>&deg;C</span></p>
            <p>Max: {{ formatTemperature(climate.main.temp_max) }}<span>&deg;C</span></p>
        </div>
    </div>
</template>
