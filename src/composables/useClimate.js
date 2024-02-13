import axios from "axios";
import { ref, computed } from "vue";

export default function useClimate() {
  const climate = ref({});
  const loading = ref(false);
  const error = ref("");

  const getClimate = async ({ city, country }) => {
    loading.value = true;
    loading.value = {}; //Reload the spinner if country is changed
    error.value = ""; //Reload error if city is changed

    const key = import.meta.env.VITE_APY_KEY;
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`;

    try {
      const { data } = await axios({
        method: "GET",
        url: url,
      });

      const { lat, lon } = data[0];
      const climateUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

      const { data: weatherData } = await axios({
        method: "GET",
        url: climateUrl,
      });
      climate.value = weatherData;
      loading.value = false;

    } catch (e) {
      error.value = "Ciudad no encontrada";
      loading.value = false;
      console.log(e);
    }
  };

  const showClimate = computed(() => {
    return Object.values(climate.value).length > 0;
  });

  const formatTemperature = (temp) => parseInt(temp - 273.15); //temperature - Kelvin degrees

  return {
    getClimate,
    climate,
    showClimate,
    formatTemperature,
    loading,
    error,
  };
}
