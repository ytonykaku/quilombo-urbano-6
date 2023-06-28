<template>
  <q-page padding>
    <div classe="q-pa-md q-gutter-sm">
      <q-btn icon="add" color ="primary" :to="{ name: 'activityform'}"/>
      <q-btn label="Ovo" icon="add" color ="primary" :to="{ name: 'usersigninpage'}"/>
      <q-btn label="bobo" icon="add" color ="primary" :to="{ name: 'availabilitytable'}"/>
      <q-btn label="loco" icon="add" color ="primary" :to="{ name: 'userstable'}"/>
      <q-btn label="troco" icon="add" color ="primary" :to="{ name: 'activitytable'}"/>
    </div>
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
