<template>
  <q-page  padding>
      <!-- header -->
        <DictionarySearch/>
      <!-- header -->

    <!-- Error state -->

      <div v-if="wordStore.errors.title" class="row  justify-center full-width">
        <div class="column items-center ">
          <q-icon v-if="wordStore.errors.notFoundIcon" size="100px" color="purple" name="ion-search"></q-icon>
          <q-icon v-else size="100px" color="purple" name="ion-server"></q-icon>
          <p class="text-h3 text-weight-bold">{{ wordStore.errors.title }}</p>
          <p class="text-h5 text-blue-grey">{{ wordStore.errors.message }}</p>
          <p>{{ wordStore.errors.resolution }}</p>
          <q-btn unelevated @click="tryAgain()" class="bg-purple text-white" label="Try again"></q-btn>
        </div>
      </div>
    <!-- Error state -->


    <!-- Dictionary Body -->
    <div v-else v-for="word in wordStore.data" :key="word.license?.url" >
      <div class="dense text-h2 q-mt-xl text-weight-bolder q-m-none">{{ word.word }}</div>
        <p class="text-purple">{{ word.phonetic }}</p>

        <div class="column dense q-mt-lg" >
          <p>Audio</p>
          <q-separator />

          <div class="row q-mt-md q-gutter-x-sm q-gutter-y-md">
            <div v-for="audio in word.phonetics" :key="audio.text"  class="column q-gutter-y-sm">
              <audio controls>
                  <source :src="audio.audio" type="audio/ogg">
              </audio>
              <div class="text-sm text-purple">{{ audio.text }}</div>
            </div>
          </div>
        </div>


        <div v-for="meaning in word.meanings" :key="meaning.partOfSpeech" class="column dense q-mt-lg" >
          <p>{{meaning.partOfSpeech}}</p>
          <q-separator />
          <div class="q-mt-md text-grey-6">Meaning</div>

          <div v-for="(d, index ) in meaning.definitions" :key="index" class="row q-mt-md q-gutter-sm">
              <!-- Meaning -->
              <div class="bg-purple" style="width:3px; height: 24px;"></div>
              <div style="width:90%">
                  <div>{{d.definition}}</div>

                  <!-- Example -->
                  <div class="text-blue-grey q-mt-sm">{{d.example}}</div>

                  <!-- Synonyms -->
                  <div class="row q-gutter-x-md q-mt-md">
                    <div class="q-mt-md text-grey-6">Synonyms</div>
                    <div v-for="(s, index) in d.synonyms" :key="index" class="row q-gutter-x-sm">
                      <div class="q-mt-md  text-weight-bold text-purple">{{ s }}</div>
                    </div>
                  </div>

                  <div class="row q-gutter-x-md q-mt-md">
                    <div class="q-mt-md text-grey-6">Antonyms</div>
                    <div v-for="(a, index) in d.antonyms" :key="index" class="row q-gutter-x-sm">
                      <div class="q-mt-md  text-weight-bold text-purple">{{ a }}</div>
                    </div>
                  </div>

              </div>
          </div>
        </div>

      <!-- source url -->
      <q-separator class="q-my-md" />
      <div class="row q-gutter-x-md">
        <div>Sources</div>
        <a v-for="(url, index) in word.sourceUrls" :key="index" :href="url">{{ url }}</a>
      </div>

    </div>


      <!-- Dictionary Body -->
  </q-page>
</template>

<script lang="ts" setup>
import DictionarySearch from 'src/components/DictionarySearch.vue';
import { onMounted } from 'vue';
import { useWordStore } from 'src/stores/word';
const wordStore = useWordStore()
// onmouted

onMounted(() => {
  wordStore.searchWord('car')
})

function tryAgain(){
    wordStore.errors.title = '';
    // wordStore.errors. = '';
}

</script>
