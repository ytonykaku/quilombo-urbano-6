<template>
    <q-page padding>
      <q-table
        title="Atividades"
        :rows="activityTable"
        :columns="columns"
        row-key="uid"
        :loading="loading"
      >
        <template v-slot:top-right>
          <q-btn label="Novo" icon="add" color ="primary" :to="{ name: 'activityform'}"/>
        </template>
        <template v-slot:top-left>
          <q-btn label="Ovo" icon="add" color ="primary" :to="{ name: 'usersigninpage'}"/>
        </template>
        <template v-slot:bottom-right>
          <q-btn label="bobo" icon="add" color ="primary" :to="{ name: 'activityform'}"/>
        </template>
        <template v-slot:bottom-left>
          <q-btn label="loco" icon="add" color ="primary" :to="{ name: 'activityform'}"/>
        </template>
        <template v-slot:body-cell-actions="props">
          <td class="float-center">
            <q-btn color="negative" icon="delete" size="sm" @click=handleDelete(props.row.uid) />
          </td>
        </template>
      </q-table>
    </q-page>
  </template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

const columns = [
  {
    name: 'name',
    label: 'Atividade',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'teacher',
    label: 'Professor',
    align: 'left',
    field: row => row.teacher,
    sortable: true
  },
  {
    name: 'location',
    label: 'Local',
    align: 'left',
    field: row => row.location,
    sortable: true
  },
  {
    name: 'activity_day',
    label: 'Dia da semana',
    align: 'left',
    field: row => row.activity_day,
    sortable: true
  },
  {
    name: 'activity_time',
    label: 'Horario',
    align: 'left',
    field: row => row.activity_time,
    sortable: true
  },
  {
    name: 'actions',
    label: 'Acoes',
    align: 'left',
    field: row => row.actions
  }
]

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

    const handleDelete = async (uid) => {
      try {
        await api.delete(`activities/${uid}`)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      columns,
      activityTable,
      loading,
      handleDelete
    }
  }
})
</script>
