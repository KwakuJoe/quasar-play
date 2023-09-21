<template>
  <q-layout view="hHh LpR fFf">

    <q-header reveal bordered :class="{'bg-black text-white': themeStore.isDark, 'bg-white text-black':!themeStore.isDark, }" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar Pack
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/login" label="Dictionary" />
        <q-route-tab to="/users" label="Traslator" />
        <q-route-tab to="/three" label="Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <MainLayoutMenuList/>
    </q-drawer>

    <q-page-container>
      <!-- view -->
      <router-view />
      <!-- view -->
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore} from 'stores/theme-store'
import MainLayoutMenuList from './MainLayoutMenuList.vue';

const themeStore = useThemeStore()

const leftDrawerOpen = ref(false)

  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

</script>

<style>
.body--light {
  /* ... */

}

.body--dark {
  /* ... */
  background: #000
}
</style>
