import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useQuasar } from 'quasar';

export const useThemeStore = defineStore('theme', () => {


  const quasar =  useQuasar()
  const isDark = ref(quasar.dark.isActive);

  console.log(`Initial val - ${isDark.value}`)
  watch(() => quasar.dark.isActive, val => {
      console.log(val ? 'dark mode': 'you light mode')

      isDark.value = val
      console.log(isDark.value)
  });

  function toggleTheme(){
    quasar.dark.toggle()
  }

  return { toggleTheme, isDark }

})
