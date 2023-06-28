<template>
    <q-page>
        <q-form class="row q-col-gutter-xs justify-center" @submit="handleSubmit">
            <q-input
                label="Digite seu nome"
                outlined
                v-model="form.name"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
            />
            <q-input
                label="Digite seu CPF"
                outlined
                v-model="form.cpf"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                type="text"
                mask="###.###.###-##"
                unmasked-value
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
            />
            <q-input
                label="Digite a rua onde mora"
                outlined
                v-model="form.street_name"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
            />
            <q-input
                label="Digite o numero da casa onde mora"
                outlined
                v-model="form.househood_number"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
            />
            <q-input
                label="Digite seu CEP"
                outlined
                v-model="form.cep"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
            />
            <q-input
                label="E-mail"
                outlined
                v-model="form.email"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
                type="email"
            />
            <q-input
                label="Telefone"
                outlined
                v-model="form.phone"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
                type="phone"
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
                <q-btn label="Salvar" color="primary" class="float-right" type="submit" />
                <q-btn label="Cancelar" color="white" class="float-right text-black q-mr-md"
                :to="{ name: 'activitytable'}" />
            </div>
        </q-form>
    </q-page>
</template>

<script>
import { api } from 'boot/axios'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'UserSignUpPage',
  setup () {
    const form = ref({
      name: '',
      cpf: '',
      street_name: '',
      househood_number: '',
      cep: '',
      email: '',
      phone: '',
      password: ''
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
      recquiredRule
    }
  }
})

</script>
