<template>
    <q-page>
        <q-form style="padding-top: 25px;" class="row" @submit="handleSubmit">
        <q-title style="font-size: 25px; padding-left:40%; padding-bottom: 20px; font-family:Arial; " >
         Registrar Atividade
        </q-title>
        
            <q-input 
                label="Nome da atividade"
                outlined
                v-model="form.name"
                class="col-md-6 offset-md-3"
                :rules="recquiredRule"
            />
            <q-input class="col-md-6 offset-md-3"
                label="Professor"
                outlined
                v-model="form.teacher"
                :rules="recquiredRule"
            />
            <q-input
                label="Descreva a atividade sugerida"
                outlined
                v-model="form.description"
                class="col-md-6 offset-md-3"
                :rules="recquiredRule"
            />
            <q-select
          class="col-md-3 offset-md-3"
            
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
            class="col-md-4"
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
            class="col-md-6 offset-md-3"
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
           class="col-md-3 offset-md-3"
                outlined
                standout="bg-white text-black"
                v-model="form.projecttype"
                type="text"
                label="Seu projeto é:"
                :options="projecttype"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
            </q-select>
            <q-input
            class="col-md-6 offset-md-3"
                label="Quantas pessoas fazem parte do seu projeto?"
                outlined
                v-model="form.amountofhelpers"
                :rules="recquiredRule"
            />
            <q-select
            class="col-md-6 offset-md-3"
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
            class="col-md-6 offset-md-3"
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
            <div style="margin-left: 45%; padding-top: 20px" col-md-6 offset-md-3>
                <q-btn label="Salvar" color ="deep-orange-8" class="float-right" type="submit" />
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
