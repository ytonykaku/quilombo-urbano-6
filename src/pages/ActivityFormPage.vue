<template>
    <q-page>
        <q-form class="row q-col-gutter-xs justify-center" @submit="handleSubmit">
            <q-input
                label="Nome da atividade"
                outlined
                v-model="form.name"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
            />
            <q-input
                label="Professor"
                outlined
                v-model="form.teacher"
                class="col-xs-12 col-sm-12 col-md000-08 col-lg-7"
                :rules="recquiredRule"
            />
            <q-input
                label="Descreva a atividade sugerida"
                outlined
                v-model="form.description"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
            />
            <q-select
                style="width: 20%; margin-right: auto"
                outlined
                standout="bg-white text-black"
                v-model="form.activity_day"
                type="text"
                label="Dia da semana"
                :options="activity_day"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
            </q-select>
            <q-select
                style="width: 20%; margin-right: auto"
                outlined
                standout="bg-white text-black"
                v-model="form.activity_time"
                type="text"
                label="Horario"
                :options="activity_time"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
            </q-select>
            <q-select
                style="width: 20%; margin-right: auto"
                outlined
                standout="bg-white text-black"
                v-model="form.location"
                type="text"
                label="Atividade que deseja participar"
                :options="location"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
            </q-select>
            <q-select
                style="width: 20%; margin-right: auto"
                outlined
                standout="bg-white text-black"
                v-model="form.projecttype"
                type="text"
                label="Seu projeto e:"
                :options="projecttype"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
            </q-select>
            <q-input
                label="Quantas pessoas fazem parte do seu projeto?"
                outlined
                v-model="form.amountofhelpers"
                class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
                :rules="recquiredRule"
            />
            <q-select
                style="width: 20%; margin-right: auto"
                outlined
                standout="bg-white text-black"
                v-model="form.frequency"
                type="text"
                label="Qual a frequencia das atividades:"
                :options="frequency"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
            </q-select>
            <q-select
                style="width: 20%; margin-right: auto"
                outlined
                standout="bg-white text-black"
                v-model="form.target"
                type="text"
                label="Qual seu publico alvo:"
                :options="target"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
            </q-select>
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
  name: 'ActivityFormPage',
  setup () {
    const form = ref({
      name: '',
      teacher: '',
      description: '',
      activity_day: '',
      activity_time: '',
      location: '',
      projecttype: '',
      amountofhelpers: '',
      frequency: '',
      target: ''
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
      recquiredRule,
      activitiesOption: ref(null),
      activity_day: [
        'Segunda-Feira',
        'Terca-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sabado',
        'Domingo'
      ],
      activity_time: [
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22'
      ],
      location: [
        'Salao',
        'Cozinha',
        'Quadra Esportiva',
        'Campinho'
      ],
      projecttype: [
        'Independente',
        'De extensao',
        'Voluntario',
        'Financiado'
      ],
      frequency: [
        'Duas vezes na semana',
        'Uma vez na semana',
        'De 15 em 15 dias',
        'Uma vez por mes',
        'Pontual'
      ],
      target: [
        'Criancas',
        'Adolescentes',
        'Mulheres',
        'Terceira Idade',
        'Todos',
        'Outra'
      ]
    }
  }
})

</script>
