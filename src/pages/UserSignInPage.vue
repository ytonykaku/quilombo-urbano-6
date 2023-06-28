<template>
    <q-page>
        <q-form class="row q-col-gutter-xs justify-center" @submit="handleSubmit">
            <q-input
                label="E-mail"
                outlined
                v-model="form.email"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
                type="email"
            />
            <q-input
                label="Senha"
                outlined
                v-model="form.password"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
                type="password"
            />
            <div>
                <q-btn label="Login" color="primary" class="float-right" type="submit" />
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
