<script setup>
import { ref, reactive } from 'vue'
import Alert from './Alert.vue'
const emit = defineEmits(['get-climate'])
const countries = [
    { code: 'US', name: 'Estados Unidos' },
    { code: 'MX', name: 'México' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'ES', name: 'España' },
    { code: 'PE', name: 'Perú' }
]
const searchParameters = reactive({
    city: '',
    country: ''
})

const error = ref('')

const checkWeather = () => {
    if (Object.values(searchParameters).includes('')) {
        error.value = "Todos los cambpos son obligatorios."
        return
    }

    error.value = ''
    emit('get-climate', searchParameters)
}

</script>

<template>
    <div>
        <Alert v-if="error">{{ error }}</Alert>
        <form class="form" @submit.prevent="checkWeather">
            <div class="field">
                <label for="city">Ciudad</label>
                <input v-model="searchParameters.city" type="text" id="city" placeholder="Ciudad">
            </div>
            <div class="field">
                <label for="country">País</label>
                <select v-model="searchParameters.country" id="country">
                    <option class="country-option" value="">-- Seleccione un país --</option>
                    <option class="country-option" v-for="country in countries" :value="country.code">{{ country.name }}</option>
                </select>
            </div>
            <input type="submit" value="Consultar clima">
        </form>
    </div>
</template>
