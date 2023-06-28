<template>
    <q-page>
        <q-form class="row q-col-gutter-xs justify-center" @submit="handleSubmit">
            <q-select
                  style="width: 20%; margin-right: auto"
                  outlined
                  standout="bg-white text-black"
                  v-model="activitiesOption"
                  type="text"
                  label="Atividade que deseja participar"
                  :options="activitiesName"
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-select>
            <div>
                <q-btn label="Salvar" color="primary" class="float-right" type="submit" />
                <q-btn label="Cancelar" color="white" class="float-right text-black q-mr-md"
                :to="{ name: 'userregisteractivity'}" />
            </div>
        </q-form>
    </q-page>
</template>

<script>
import { api } from 'boot/axios'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'UserRegisterActivityForm',
  setup () {
    const form = ref({
      activitiesOption: ''
    })

    const router = useRouter()

    const recquiredRule = [
      val => (val && val.length > 0) || 'Campo Obrigatorio'
    ]

    const handleSubmit = async () => {
      try {
        await api.post('users', form.value)
        router.push({ name: 'usersignuptable' })
      } catch (error) {
        console.log('erro')
      }
    }
    return {
      form,
      handleSubmit,
      recquiredRule,
      activitiesOption: ref(null),
      activitiesName: [
        'Dancas Urbanas',
        'Clube do livro'
      ]
    }
  }
})

</script>
