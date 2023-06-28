<template>
    <q-page padding>
      <q-table
        title="Cronograma"
        :rows="availabilityTable"
        :columns="columns"
        row-key="uid"
        :loading="loading"
      >
      </q-table>
    </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

const columns = [
  {
    name: 'hour',
    label: 'Horario',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'monday',
    label: 'Segunda-Feira',
    align: 'left',
    field: row => row.teacher,
    sortable: true
  },
  {
    name: 'tuesday',
    label: 'Terca-Feira',
    align: 'left',
    field: row => row.location,
    sortable: true
  },
  {
    name: 'wednesday',
    label: 'Quarta-Feira',
    align: 'left',
    field: row => row.activity_day,
    sortable: true
  },
  {
    name: 'thursday',
    label: 'Quinta-Feira',
    align: 'left',
    field: row => row.activity_time,
    sortable: true
  },
  {
    name: 'friday',
    label: 'Sexta-Feira',
    align: 'left',
    field: row => row.actions
  },
  {
    name: 'saturday',
    label: 'Sabado',
    align: 'left',
    field: row => row.actions
  },
  {
    name: 'sunday',
    label: 'Domingo',
    align: 'left',
    field: row => row.actions
  }
]

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const availabilityTable = ref([])
    const loading = ref(true)

    onMounted(() => {
      handleGetList()
    })

    const handleGetList = async () => {
      try {
        loading.value = true
        const { data } = await api.get('activities')
        availabilityTable.value = data.data.map((activity) => {
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

    const handleDelete = async (uid) => {
      try {
        await api.delete(`activities/${uid}`)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      columns,
      availabilityTable,
      loading,
      handleDelete
    }
  }
})
</script>
