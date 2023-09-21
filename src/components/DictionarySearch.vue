<template>
  <!-- toggle and icon -->
  <div class="row  justify-between">
    <q-icon  size="50px"  name="ion-book" />
    <q-btn unelevated @click="themeStore.toggleTheme()" :icon=" themeStore.isDark ? 'ion-sunny' : 'ion-moon' " />
  </div>
  <!-- search form -->
  <q-form ref="myForm" @submit="handleSearch"  class="q-gutter-md">
    <q-input
      clearable
      placeholder="Search word :)"
      stack-label class="q-mt-md"
      filled
      :disable="wordStore.errors.title ? true : false"
      v-model="search"
      :rules="[ val => val && val.length > 0 || 'Please type something']"
      >
      <template #append>
        <q-btn   @click="validate()" :loading="wordStore.isLoading" square color="dark" icon="ion-search" />
      </template>
    </q-input>
  </q-form>
</template>
<script setup>


import {ref} from 'vue'
import {useThemeStore} from 'stores/theme-store'
import {useWordStore} from 'src/stores/word'

const themeStore  = useThemeStore()
const wordStore = useWordStore()

const search = ref('')

const myForm = ref(null)

function validate () {
  myForm.value.validate().then(success => {
    if (success) {
      // yay, models are correct
      wordStore.searchWord(search.value);
    }
    else {
      // oh no, user has filled in
      // at least one invalid value
    }
  })
}
function handleSearch(){
    wordStore.searchWord(search.value);
}

//

</script>

<style>


</style>
