<script setup>
import useClima from "../composables/useClimate";
const { formatTemperature } = useClima();

const props = defineProps({
  climate: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <div class="result">
    <h2>Clima en: {{ climate.name }}</h2>
    <div class="result-temp">
      <p class="actual">{{ formatTemperature(climate.main.temp) }}&deg;C</p>
      <img :src="`https://openweathermap.org/img/wn/${climate.weather[0].icon}@2x.png`" alt="" />
    </div>
    <p>Sensacion térmica: {{ formatTemperature(climate.main.feels_like) }}<span>&deg;C</span></p>
    <div class="temperature">
      <p>Min: {{ formatTemperature(climate.main.temp_min) }}<span>&deg;C</span></p>
      <p>Max: {{ formatTemperature(climate.main.temp_max) }}<span>&deg;C</span></p>
    </div>
  </div>
</template>
