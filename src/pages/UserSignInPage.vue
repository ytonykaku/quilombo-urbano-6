<template>
    <q-page>
    
        <q-form class="row " style="padding-top: 25px;" @submit="handleSubmit">
        <q-title style="font-size: 25px; padding-left:40%; padding-bottom: 10px; font-family:Arial; " >
         Entrar
        </q-title>
            <q-input
                label="E-mail"
                outlined
                v-model="form.email"
                class="col-md-6 offset-md-3"
                :rules="recquiredRule"
                type="email"
            />
            <q-input
                label="Senha"
                outlined
                v-model="form.password"
               class="col-md-6 offset-md-3"
                :rules="recquiredRule"
                type="password"
            />
            <div class="col-md-6 offset-md-3">
                <q-btn label="Login" color ="deep-orange-8" class="float-right" type="submit" />
                <q-btn label="Nao Possuo Cadastro" color="white" class="float-right text-black q-mr-md"
                :to="{ name: 'usersignuppage'}" />
            </div>
        </q-form>
    </q-page>
</template>

<script>

import { api } from 'boot/axios'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'UserSignInPage',
  setup () {
    const form = ref({
      email: '',
      password: ''
    })

    const router = useRouter()

    const recquiredRule = [
      val => (val && val.length > 0) || 'Campo Obrigatorio'
    ]

    const handleSubmit = async () => {
      try {
        await api.post('activities', form.value)
        router.push({ name: 'activitytable' })
      } catch (error) {
        console.log('erro')
      }
    }
    return {
      form,
      handleSubmit,
      recquiredRule
    }
  }
})

</script>
