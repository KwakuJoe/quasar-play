import { defineStore } from 'pinia';
import {ref, reactive} from 'vue'
import { Word, Errors } from 'src/utils/types';
import {api} from 'boot/axios';

export const useWordStore = defineStore('word', () => {

  const data = ref<Word[]>()
  const not_found_errors = ref<string>('')
  const errors = reactive<Errors>({
    message:'',
    notFoundIcon:false,
    resolution:'',
    title:''
  })
  const isLoading = ref<boolean>(false)


  async function searchWord(word:string){

    isLoading.value = true

    try{

      const response = await api.get<Word[]>(`${word}`);

      if(response.status === 200){

        data.value = response.data
        console.log(data.value)
        isLoading.value = false


      } else {

        console.log('Unexpected status code:', response.status);
        not_found_errors.value  = response.status.toString();
        console.log(response.status)
        isLoading.value = false

      }

    }catch(err:any){
      console.log(err);
      isLoading.value = false

      if(err.response){

          errors.notFoundIcon = true,
          errors.message = err.response.data.message,
          errors.title = err.response.data.title,
          errors.resolution = err.response.data.resolution

      } else if (err.request){

        errors.notFoundIcon = false,
        errors.message = 'No response recieved',
        errors.title = 'We didnt get a response from ther database',
        errors.resolution = 'Please try again or with a different word'

      } else {

        errors.notFoundIcon = false,
        errors.message = err.message,
        errors.title = 'Error occured during setup',
        errors.resolution = 'Please try again or with a different word'

      }

    }finally{

      isLoading.value = false;

    }
  }

  return { data, not_found_errors, errors, isLoading, searchWord }
})
