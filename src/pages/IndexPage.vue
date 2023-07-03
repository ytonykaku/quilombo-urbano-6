<link rel="stylesheet" href="/css/app.css">

<template>

  <q-page padding>
    <div  classe="q-pa-md q-gutter-sm">
      <q-btn class="q-mt-md q-mr-sm" label="Adicionar Atividade" icon="add" color ="deep-orange-8" :to="{ name: 'activityform'}"/>
      <q-btn class="q-mt-md q-mr-sm" label="Login" icon="add" color ="deep-orange-8" :to="{ name: 'usersigninpage'}"/>
      <q-btn class="q-mt-md q-mr-sm" label="Cronograma" icon="add" color ="deep-orange-8" :to="{ name: 'availabilitytable'}"/>
      <q-btn class="q-mt-md q-mr-sm" label="Usuarios" icon="add" color ="deep-orange-8" :to="{ name: 'userstable'}"/>
      <q-btn class="q-mt-md q-mr-sm" label="Atividades" icon="add" color ="deep-orange-8" :to="{ name: 'activitytable'}"/>
    </div>

        <q-avatar>
              <img src="quilombo-urbano-6/src/assets/Sem-título.png">
            </q-avatar>

 
  </q-page>


    


  
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const activityTable = ref([])
    const loading = ref(true)

    onMounted(() => {
      handleGetList()
    })

    const handleGetList = async () => {
      try {
        loading.value = true
        const { data } = await api.get('activities')
        activityTable.value = data.data.map((activity) => {
          return {
            uid: activity.uid,
            ...activity.attributes
          }
        })
        loading.value = false
      } catch (error) {
        console.error(error)
        loading.value = true
      }
    }

    return {
    }
  }
})
</script>
