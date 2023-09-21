<template>
  <q-page class="flex flex-center">
    <q-input standout="bg-teal text-white" borderless    v-model="text" label="Standard" />
    <q-btn
      icon="message"
      size="xl"
      color="grey-9"
      label="Primary"
      @click="hanflClick()"
    />

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Notify } from 'quasar'
const text = ref('')

function hanflClick(){

  Notify.create({
    message: 'Danger, Will Robinson! Danger!',
    caption:'This is the caption of the notfify',
    avatar:'k',
    spinner:true,
    group:false,
    progress:true,
    color: 'brown-3',
    actions: [

    ]
  })
}

</script>
