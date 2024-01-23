<script setup>
import ClimateForm from './components/ClimateForm.vue'
import Climate from './components/Climate.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import Alert from './components/Alert.vue'
//Composables
import useClima from './composables/useClimate'
const { getClimate, climate, showClimate, formatTemperature, loading, error } = useClima()

</script>

<template>
  <div>
    <h1 class="title">Buscador de clima</h1>
    <div class="container climate-searcher">
      <ClimateForm @get-climate="getClimate" />
      <LoadingSpinner v-if="loading" />
      <Climate v-if="showClimate" :climate="climate" @format-temperature="formatTemperature" />
      <Alert>{{ error }}</Alert>
    </div>
  </div>
</template>

<style scoped></style>
